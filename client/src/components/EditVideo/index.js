import React, { useState, useEffect, useCallback } from 'react';
import { CosmosClient } from "@azure/cosmos";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';

const Container = styled.div`
  padding: 20px;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  width: 70%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 20px;
  height: 5em;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #827498;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const RelatedArticlesContainer = styled.div`
  margin-top: 20px;
`;

const RelatedArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export default function EditVideo() {
    const [title, setTitle] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [description, setDescription] = useState('');
    const [relatedArticles, setRelatedArticles] = useState([]);
    const [language, setLanguage] = useState({ id: "c22bbd46-3d98-49af-8cd0-2acb39e6f05f", description: "English (United States)" });
    const [languageOptions, setLanguageOptions] = useState([]);
    const [articleOptions, setArticleOptions] = useState([]);
    const [keywords, setKeywords] = useState('');
    const [publicationStatus, setPublicationStatus] = useState('draft');
    const [availableParentCategories, setAvailableParentCategories] = useState([]);
    const [selectedParentCategories, setSelectedParentCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [subCategoriesMap, setSubCategoriesMap] = useState({});
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [videoId, setVideoId] = useState(null);
    const lastEditedBy = localStorage.getItem('fullName');

    const client = new CosmosClient({
        endpoint: process.env.REACT_APP_COSMOS_ENDPOINT,
        key: process.env.REACT_APP_COSMOS_KEY,
    });

    const database = client.database("MedExDB");
    const container = database.container("videos");
    const localeContainer = database.container("locale_data");
    const articlesContainer = database.container("articles");
    const parentCategoryContainer = database.container("parent_categories");
    const subCategoryContainer = database.container("sub_categories");

    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const { resources: fetchedLanguages } = await localeContainer.items.readAll().fetchAll();
            const { resources: fetchedArticles } = await articlesContainer.items
                .query("SELECT c.id, c.title FROM c WHERE c.publication_status = 'published'")
                .fetchAll();
            const { resources: fetchedParentCategories } = await parentCategoryContainer.items.readAll().fetchAll();

            setLanguageOptions(fetchedLanguages);
            setArticleOptions(fetchedArticles.map(article => ({ value: article.id, label: article.title })));
            setAvailableParentCategories(fetchedParentCategories);

            const defaultLanguage = fetchedLanguages.find(lang => lang.id === "c22bbd46-3d98-49af-8cd0-2acb39e6f05f");
            setLanguage(defaultLanguage || {});
        }

        fetchData();
    }, []);

    const fetchSubCategoriesForAllParents = useCallback(async (parentCategories) => {
        let subCategoriesByParent = {};
        for (const parentCategory of parentCategories) {
            if (parentCategory.id) {
                const { resources: subCategories } = await subCategoryContainer.items.query({
                    query: "SELECT * FROM c WHERE c.parent_category = @parentCategoryId",
                    parameters: [{ name: "@parentCategoryId", value: parentCategory.id }]
                }).fetchAll();

                subCategoriesByParent[parentCategory.id] = subCategories.map(subCat => ({
                    id: subCat.id,
                    sub_category_name: subCat.sub_category_name
                }));
            }
        }
        setSubCategoriesMap(subCategoriesByParent);
    }, [subCategoryContainer]);

    const fetchVideoDetails = useCallback(async () => {
        const queryParams = new URLSearchParams(location.search);
        const videoId = queryParams.get('id');

        if (videoId) {
            console.log(`Fetching video details for ID: ${videoId}`);
            setVideoId(videoId);
            try {
                const { resource } = await container.item(videoId, videoId).read();
                console.log('Fetched resource:', resource); // Debugging log

                if (resource) {
                    setTitle(resource.title);
                    setVideoLink(resource.videoLink);
                    setDescription(resource.search_preview);
                    setLanguage(languageOptions.find(lang => lang.id === resource.locale) || {});
                    setKeywords(resource.search_keywords.join(', '));
                    setPublicationStatus(resource.publication_status);

                    const parentCategories = resource.parent_category.map(id => {
                        const category = availableParentCategories.find(cat => cat.id === id);
                        return category || { id, category_name: 'Unknown Category' };
                    });
                    setSelectedParentCategories(parentCategories);

                    await fetchSubCategoriesForAllParents(parentCategories);

                    const subCategories = resource.sub_category.map(id => {
                        const parentCatId = parentCategories.find(parentCat =>
                            subCategoriesMap[parentCat.id]?.some(subCat => subCat.id === id)
                        )?.id;
                        const subCat = subCategoriesMap[parentCatId]?.find(subCat => subCat.id === id);
                        return subCat || { id, sub_category_name: 'Unknown Subcategory' };
                    });
                    setSelectedSubCategories(subCategories);

                    const relatedArticlesFetched = resource.relatedArticles.map(id => {
                        const article = articleOptions.find(article => article.value === id);
                        return article || { value: id, label: 'Unknown Article' };
                    });
                    setRelatedArticles(relatedArticlesFetched);
                } else {
                    console.error('No resource found for this ID');
                }
            } catch (error) {
                console.error(`Error fetching video details for ID ${videoId}:`, error); // Error log
            }
        }
    }, [location.search, container, languageOptions, articleOptions, availableParentCategories, subCategoriesMap, fetchSubCategoriesForAllParents]);

    const handleRelatedArticleChange = (selectedOption, index) => {
        const newRelatedArticles = [...relatedArticles];
        newRelatedArticles[index] = selectedOption;
        setRelatedArticles(newRelatedArticles);
    };

    const addRelatedArticle = () => {
        setRelatedArticles([...relatedArticles, { value: '', label: '' }]);
    };

    const removeRelatedArticle = (index) => {
        setRelatedArticles(relatedArticles.filter((_, i) => i !== index));
    };

    const handleParentCategoryChange = async (index, event) => {
        const categoryId = event.target.value;
        const categoryName = event.target.options[event.target.selectedIndex].text;
        const newSelectedParentCategories = [...selectedParentCategories];
        newSelectedParentCategories[index] = { id: categoryId, category_name: categoryName };
        setSelectedParentCategories(newSelectedParentCategories);

        if (categoryId) {
            try {
                const { resources: subCategories } = await subCategoryContainer.items.query({
                    query: "SELECT * FROM c WHERE c.parent_category = @parentCategoryId",
                    parameters: [{ name: "@parentCategoryId", value: categoryId }]
                }).fetchAll();
                setSubCategoriesMap(prev => ({
                    ...prev,
                    [categoryId]: subCategories.map(subCat => ({
                        id: subCat.id,
                        sub_category_name: subCat.sub_category_name
                    }))
                }));
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            }
        } else {
            setSubCategoriesMap(prev => ({
                ...prev,
                [categoryId]: []
            }));
        }
    };

    const addParentCategory = () => {
        setSelectedParentCategories([...selectedParentCategories, { id: '', category_name: '' }]);
    };

    const removeParentCategory = (indexToRemove) => {
        const updatedParentCategories = selectedParentCategories.filter((_, index) => index !== indexToRemove);
        setSelectedParentCategories(updatedParentCategories);

        const updatedSubCategories = selectedSubCategories.filter(subCategory => {
            const parentCatId = updatedParentCategories.find(parentCat =>
                subCategoriesMap[parentCat.id]?.some(subCat => subCat.id === subCategory.id)
            )?.id;
            return parentCatId !== undefined;
        });
        setSelectedSubCategories(updatedSubCategories);

        if (updatedParentCategories.length > 0) {
            const updatedSubCategoriesMap = { ...subCategoriesMap };
            delete updatedSubCategoriesMap[selectedParentCategories[indexToRemove]?.id];
            setSubCategoriesMap(updatedSubCategoriesMap);
        }
    };

    const handleSubCategoryChange = (index, event) => {
        const subCategoryId = event.target.value;
        const subCategoryName = event.target.options[event.target.selectedIndex].text;
        const newSelectedSubCategories = [...selectedSubCategories];
        while (newSelectedSubCategories.length <= index) {
            newSelectedSubCategories.push({ id: '', sub_category_name: '' });
        }
        newSelectedSubCategories[index] = { id: subCategoryId, sub_category_name: subCategoryName };
        setSelectedSubCategories(newSelectedSubCategories);
    };

    const save = async () => {
        if (!title || !videoLink || !description || !keywords) {
            alert('Please fill in all required fields.');
            return;
        }

        const parentCategoryNames = selectedParentCategories.map(category => category.category_name);
        const subCategoryNames = selectedSubCategories.map(subCategory => subCategory.sub_category_name);

        const { resource: updatedItem } = await container.item(videoId, videoId).replace({
            id: videoId,
            title,
            videoLink,
            search_preview: description,
            relatedArticles: relatedArticles.map(article => article.value),
            locale: language.id,
            search_keywords: typeof keywords === 'string' ? keywords.split(',').map(keyword => keyword.trim()) : [],
            publication_status: publicationStatus,
            publication_date: new Date().toISOString(),
            last_edited_by: lastEditedBy,
            created_by: lastEditedBy,
            parent_category: selectedParentCategories.map(category => category.id),
            sub_category: selectedSubCategories.map(subCategory => subCategory.id),
            parent_category_names: parentCategoryNames,
            sub_category_names: subCategoryNames
        });

        console.log(`Updated video: ${updatedItem}`);
        setSaveSuccess(true);

        // Clear the form
        setTitle('');
        setVideoLink('');
        setDescription('');
        setRelatedArticles([]);
        setLanguage({ id: "c22bbd46-3d98-49af-8cd0-2acb39e6f05f", description: "English (United States)" });
        setKeywords('');
        setPublicationStatus('draft');
        setSelectedParentCategories([]);
        setSelectedSubCategories([]);
    };

    return (
        <Container>
            <Button onClick={fetchVideoDetails}>Fetch Video Details</Button>
            <Label className="label">Language</Label>
            <select
                value={language.id || ''}
                onChange={e => setLanguage(languageOptions.find(lang => lang.id === e.target.value) || {})}
            >
                <option value="">Select language</option>
                {languageOptions.map(lang => (
                    <option key={lang.id} value={lang.id}>
                        {lang.description}
                    </option>
                ))}
            </select>
            <Label className="label">Title</Label>
            <Input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <Label className="label">YouTube Video Link</Label>
            <Input
                type="text"
                value={videoLink}
                onChange={e => setVideoLink(e.target.value)}
                placeholder="YouTube Video Link"
                required
            />
            <Label className="label">Description</Label>
            <Textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <Label className="label">Search Keywords</Label>
            <Textarea
                value={keywords}
                onChange={e => setKeywords(e.target.value)}
                placeholder="Keywords"
                required
            />
            <Label className="label">Related Articles</Label>
            <RelatedArticlesContainer>
                {relatedArticles.map((article, index) => (
                    <RelatedArticleWrapper key={index}>
                        <Select
                            styles={{
                                container: (provided) => ({
                                    ...provided,
                                    width: '50%',
                                    marginRight: '10px'
                                }),
                            }}
                            options={articleOptions}
                            value={article}
                            onChange={(selectedOption) => handleRelatedArticleChange(selectedOption, index)}
                            isSearchable
                        />
                        <button
                            type="button"
                            onClick={() => removeRelatedArticle(index)}
                            style={{
                                padding: '6px 12px',
                                fontSize: '14px',
                                borderRadius: '4px',
                                backgroundColor: 'gray',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Remove
                        </button>
                    </RelatedArticleWrapper>
                ))}
            </RelatedArticlesContainer>
            <Button type="button" onClick={addRelatedArticle}>+ Add another related article</Button>

            <Label className="label">Categories</Label>
            {selectedParentCategories.map((selectedParentCategory, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <div>
                        <Label className="label" style={{ marginRight: '10px' }}>Parent Category</Label>
                        <select
                            style={{
                                width: '30%',
                                padding: '10px',
                                boxSizing: 'border-box',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                fontSize: '16px',
                                marginRight: '10px',
                            }}
                            value={selectedParentCategory.id}
                            onChange={(e) => handleParentCategoryChange(index, e)}
                        >
                            <option value="">Select category</option>
                            {availableParentCategories.map((category, categoryIndex) => (
                                <option key={categoryIndex} value={category.id}>
                                    {category.category_name}
                                </option>
                            ))}
                        </select>
                        <button
                            type="button"
                            onClick={() => removeParentCategory(index)}
                            style={{
                                padding: '6px 12px',
                                fontSize: '14px',
                                borderRadius: '4px',
                                backgroundColor: 'gray',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Remove
                        </button>
                    </div>
                    <Label className="label" style={{ marginRight: '10px' }}>Sub Category</Label>
                    <select
                        style={{
                            width: '30%',
                            padding: '10px',
                            boxSizing: 'border-box',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            fontSize: '16px',
                        }}
                        value={selectedSubCategories[index]?.id || ''}
                        onChange={(e) => handleSubCategoryChange(index, e)}
                    >
                        <option value="" disabled>Select sub category</option>
                        {subCategoriesMap[selectedParentCategory.id]?.map(subCategory => (
                            <option key={subCategory.id} value={subCategory.id}>
                                {subCategory.sub_category_name}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
            <Button type="button" onClick={addParentCategory}>+ Add another category</Button>

            <Label className="label">Publication Status</Label>
            <select
                value={publicationStatus}
                onChange={(e) => setPublicationStatus(e.target.value)}
                style={{
                    width: '20%',
                    padding: '10px',
                    boxSizing: 'border-box',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    fontSize: '16px',
                    marginBottom: '20px',
                    marginRight: '10px',
                }}
            >
                <option value="archived">Archive</option>
                <option value="draft">Save as Draft</option>
                <option value="published">Publish</option>
            </select>
            <div>
                <Button onClick={save}>Save Video</Button>
            </div>
            {saveSuccess && <div style={{ color: 'green', marginTop: '10px' }}>Success! Your form has been submitted.</div>}
        </Container>
    );
}
