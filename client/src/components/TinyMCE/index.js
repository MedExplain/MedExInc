import React, { useEffect, useState, useRef, useCallback } from 'react';
import Modal from 'react-modal';
import { Editor } from '@tinymce/tinymce-react';
import DOMPurify from 'dompurify';
import { CosmosClient } from "@azure/cosmos";
import Select from 'react-select';
import 'components/articles/articles.css';
import { TopControlsPreview, StyledButton, ArticleContainer, ContentContainer, AuthorsContainer, Author, PalsLogoContainer, PalsText, placeholderHeadshot } from 'components/articles/styledArticleComponents';
import { PreviewRadioOption, PreviewQuestion, PreviewAssessment, BulletBlockWrapper, BulletList } from 'components/articlePreview/articlePreviewComonents';
import SearchArticles from "components/search-articles";
import styled from 'styled-components';
import BeakerIcon from 'assets/images/icons/beaker.png';
import PALSLogo from 'assets/images/PALS_logo.png';
import IndependentImageUpload from 'components/imageUpload';
import { isEqual } from 'lodash';

Modal.setAppElement('#root');

export default function TinyMCEEditor() {
    const editorRef = useRef(null);
    const evidenceSummaryRef = useRef(null);
    const evidenceSummaryReferencesRef = useRef(null);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [evidenceSummary, setEvidenceSummary] = useState('');
    const [evidenceSummaryReferences, setEvidenceSummaryReferences] = useState('');
    const [relatedVideoPage, setRelatedVideoPage] = useState('');
    const [language, setLanguage] = useState({ id: "c22bbd46-3d98-49af-8cd0-2acb39e6f05f", description: "English (United States)" });
    const [languageOptions, setLanguageOptions] = useState([]);
    const [authors, setAuthors] = useState([]);
    const authorOptions = authors.map(author => ({
        value: author.id,
        label: author.name,
        headshot: author.headshot_link,
        credentials: author.credentials,
        affiliations: author.affiliations,
        author_title: author.author_title
    }));
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const [coauthors, setCoauthors] = useState([{ id: '', name: '' }]);
    const [availableParentCategories, setAvailableParentCategories] = useState([]);
    const [selectedParentCategories, setSelectedParentCategories] = useState([{ id: '', category_name: '' }]);
    const [availableSubCategories, setAvailableSubCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([{ id: '', sub_category_name: '' }]);
    const [subCategoriesForParents, setSubCategoriesForParents] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const [subCategoriesMap, setSubCategoriesMap] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isFrontPage, setIsFrontPage] = useState(false);
    const [thumbnailLink, setThumbnailLink] = useState('');
    const [thumbnailAlt, setThumbnailAlt] = useState('');
    const [publicationStatus, setPublicationStatus] = useState('draft');
    const [duplicateTitle, setDuplicateTitle] = useState(false);
    const [password, setPassword] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const actualPassword = process.env.REACT_APP_PASSWORD;
    const [saveSuccess, setSaveSuccess] = useState(false);

    const client = new CosmosClient({
        endpoint: process.env.REACT_APP_COSMOS_ENDPOINT,
        key: process.env.REACT_APP_COSMOS_KEY
    });

    const [questions, setQuestions] = useState([
        {
            question: "",
            options: [
                { option: "", isCorrect: false, explanation: "" },
                { option: "", isCorrect: false, explanation: "" },
                { option: "I don't know.", isCorrect: null, explanation: "" }
            ],
        }
    ]);

    const addChoice = (questionIndex) => {
        const newQuestions = [...questions];
        const options = newQuestions[questionIndex].options;
        if (options.length > 0 && options[options.length - 1].option === "I don't know.") {
            options.pop();
        }
        options.push({ option: "", isCorrect: false, explanation: "" });
        options.push({ option: "I don't know.", isCorrect: null });
        setQuestions(newQuestions);
    };

    const updateChoice = (questionIndex, choiceIndex, option, explanation) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].options[choiceIndex] = { option, explanation, isCorrect: newQuestions[questionIndex].options[choiceIndex].isCorrect };
        setQuestions(newQuestions);
    };

    const updateQuestion = (questionIndex, question, explanation) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].question = question;
        newQuestions[questionIndex].explanation = explanation;
        setQuestions(newQuestions);
    };

    const updateIsCorrect = (questionIndex, optionIndex, isChecked) => {
        setQuestions(prevQuestions => {
            return prevQuestions.map((questionData, currentQuestionIndex) => {
                if (currentQuestionIndex !== questionIndex) {
                    return questionData;
                }

                return {
                    ...questionData,
                    options: questionData.options.map((optionData, currentOptionIndex) => {
                        if (currentOptionIndex === optionIndex) {
                            if (optionData.option === "I don't know.") {
                                return { ...optionData, isCorrect: null };
                            } else {
                                return { ...optionData, isCorrect: isChecked };
                            }
                        }

                        if (optionData.option === "I don't know.") {
                            return { ...optionData, isCorrect: null };
                        } else {
                            return { ...optionData, isCorrect: false };
                        }
                    }),
                };
            });
        });
    };

    const extractTextFromHtml = (htmlContent) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlContent;
        return tempDiv.textContent || tempDiv.innerText || "";
    };

    const handlePreview = () => {
        const content = editorRef.current?.getContent() || '';
        setEditorContent(content);
        const evidenceSummaryContent = evidenceSummaryRef.current?.getContent() || '';
        setEvidenceSummary(evidenceSummaryContent);
        const evidenceSummaryReferencesContent = evidenceSummaryReferencesRef.current?.getContent() || '';
        setEvidenceSummaryReferences(evidenceSummaryReferencesContent);
        setIsPreviewOpen(true);
    };

    const [isScienceModalOpen, setIsScienceModalOpen] = useState(false);
    const [sanitizedEvidence, setSanitizedEvidence] = useState('');
    const [selectedArticle, setSelectedArticle] = useState(null);

    const clearForm = () => {
        setTitle('');
        setSummary('');
        setKeywords('');
        setEvidenceSummary('');
        setEvidenceSummaryReferences('');
        setRelatedVideoPage('');
        setLanguage({});
        setLanguageOptions([]);
        setAuthors([]);
        setSelectedAuthor(null);
        setCoauthors([{ id: '', name: '' }]);
        setAvailableParentCategories([]);
        setSelectedParentCategories([{ id: '', category_name: '' }]);
        setAvailableSubCategories([]);
        setSelectedSubCategories([{ id: '', sub_category_name: '' }]);
        setQuestions([
            {
                question: "",
                options: [
                    { option: "", isCorrect: false, explanation: "" },
                    { option: "", isCorrect: false, explanation: "" },
                    { option: "I don't know.", isCorrect: null, explanation: "" }
                ],
            }
        ]);
        setIsFrontPage(false);
        setThumbnailLink('');
        setThumbnailAlt('');
        setTimeout(() => {
            setPublicationStatus('draft');
        }, 10000);
        setTimeout(() => {
            setDuplicateTitle(false);
        }, 10000);
        setPassword('');

        if (editorRef.current) {
            editorRef.current.setContent('');
        }

        if (evidenceSummaryRef.current) {
            evidenceSummaryRef.current.setContent('');
        }

        if (evidenceSummaryReferencesRef.current) {
            evidenceSummaryReferencesRef.current.setContent('');
        }
        setTimeout(() => {
            setSaveSuccess(false);
        }, 10000);
    };

    const database = client.database("MedExDB");
    const container = database.container("articles");
    const authorsContainer = database.container("authors");
    const parentCategoryContainer = database.container("parent_categories");
    const subCategoryContainer = database.container("sub_categories");
    const localeContainer = database.container("locale_data");

    const handleCoauthorSelectChange = async (selectedOption, index) => {
        let updatedCoauthors = [...coauthors];
        if (selectedOption) {
            const coauthorFullData = await fetchAuthorData(selectedOption.value);
            updatedCoauthors[index] = coauthorFullData;
        } else {
            updatedCoauthors[index] = {};
        }
        setCoauthors(updatedCoauthors);
    };

    const fetchAuthorData = async (authorId) => {
        try {
            const response = await authorsContainer.item(authorId).read();
            if (response.resource) {
                return {
                    id: response.resource.id,
                    name: response.resource.name,
                    headshot: response.resource.headshot_link,
                    credentials: response.resource.credentials,
                    affiliations: response.resource.affiliations,
                    author_title: response.resource.author_title
                };
            } else {
                console.error('Author not found');
                return {};
            }
        } catch (error) {
            console.error('Error fetching author data:', error);
            return {};
        }
    };

    const addCoauthor = () => {
        setCoauthors([...coauthors, {}]);
    };

    const removeCoauthor = (index) => {
        setCoauthors(coauthors.filter((_, coauthorIndex) => coauthorIndex !== index));
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

    const fetchSubCategoriesForAllParents = useCallback(async () => {
        let subCategoriesByParent = {};
        for (const parentCategory of selectedParentCategories) {
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
        setSubCategoriesForParents(subCategoriesByParent);
    }, [selectedParentCategories, subCategoryContainer]);

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [titleFromFormData, setTitleFromFormData] = useState('');

    const addParentCategory = () => {
        setSelectedParentCategories([...selectedParentCategories, { id: '', category_name: '' }]);
    };

    const removeParentCategory = (indexToRemove) => {
        const updatedParentCategories = selectedParentCategories.filter((_, index) => index !== indexToRemove);
        setSelectedParentCategories(updatedParentCategories);

        const updatedSubCategories = selectedSubCategories.filter((_, index) => index !== indexToRemove);
        setSelectedSubCategories(updatedSubCategories);

        if (updatedParentCategories.length > 0) {
            const updatedSubCategoriesMap = { ...subCategoriesMap };
            delete updatedSubCategoriesMap[updatedParentCategories[indexToRemove]?.id];
            setSubCategoriesMap(updatedSubCategoriesMap);
        }
    };

    const addSubCategory = () => {
        setSelectedSubCategories([...selectedSubCategories, { id: '', sub_category_name: '' }]);
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

    const fetchData = useCallback(async () => {
        const { resources: fetchedAuthors } = await authorsContainer.items.readAll().fetchAll();
        const { resources: fetchedParentCategories } = await parentCategoryContainer.items.readAll().fetchAll();
        const { resources: fetchedLanguages } = await localeContainer.items.readAll().fetchAll();
        const defaultLanguage = fetchedLanguages.find(lang => lang.id === "c22bbd46-3d98-49af-8cd0-2acb39e6f05f");
        setAuthors(fetchedAuthors);
        setAvailableParentCategories(fetchedParentCategories);
        setLanguage(defaultLanguage || {});
        setLanguageOptions(fetchedLanguages);

        if (selectedParentCategories.length > 0) {
            const { resources: fetchedSubCategories } = await subCategoryContainer.items.query({
                query: `SELECT * FROM c WHERE c.parent_category = @selectedParentCategory`,
                parameters: [
                    {
                        name: "@selectedParentCategory",
                        value: selectedParentCategories[0].id
                    }
                ]
            }).fetchAll();

            setAvailableSubCategories(fetchedSubCategories);
        } else {
            setAvailableSubCategories([]);
        }
    }, [selectedParentCategories]);

    useEffect(() => {
        fetchData().then(() => { });
    }, [fetchData]);

    //Save to Cosmos
    const save = async () => {
        if (!title) {
            alert('Please fill in the title field.');
            return;
        }
        if (publicationStatus === 'published') {
            if (!language.id) {
                alert('Please select a language.');
                return;
            }
            if (!selectedAuthor) {
                alert('Please select an author.');
                return;
            }
            if (!keywords) {
                alert('Please enter some search keywords and phrases.');
                return;
            } if (!editorRef.current || editorRef.current.getContent() === '<p>This is the initial content of the editor.</p>' || editorRef.current.getContent().trim() === "") {
                alert('Please include the body of the article.');
                return;
            } if (!evidenceSummaryRef.current || evidenceSummaryRef.current.getContent() === '<p>This is the initial content of the evidence summary editor.</p>' || evidenceSummaryRef.current.getContent().trim() === "") {
                alert('Please include the evidence summary.');
                return;
            } if (!evidenceSummaryReferencesRef.current || evidenceSummaryReferencesRef.current.getContent() === '<p>This is the initial content of the evidence summary references editor.</p>' || evidenceSummaryReferencesRef.current.getContent().trim() === "") {
                alert('Please include the evidence summary references.');
                return;
            }
            if (editorRef.current) {
                const content = editorRef.current.getContent();
                const textContent = extractTextFromHtml(content);
                setSummary(textContent.substring(0, 141));
            }
            if (!questions || questions.some(question => {
                return (
                    !question.question ||
                    question.question.trim() === '' ||
                    !question.options.some(option => option.option.trim() !== '')
                );
            })) {
                alert('Please fill in all the question fields.');
                return;
            }
        }

        if (editorRef.current && evidenceSummaryRef.current && evidenceSummaryReferencesRef.current) {
            const content = editorRef.current.getContent();
            const evidenceSummaryContent = evidenceSummaryRef.current.getContent();
            const evidenceSummaryReferencesContent = evidenceSummaryReferencesRef.current.getContent();
            const coauthorIds = coauthors.map(coauthor => coauthor.id);
            const parentCategoryIds = selectedParentCategories.map(category => category.id);
            const subCategoryIds = selectedSubCategories.map(category => category.id);
            const parentCategoryNames = selectedParentCategories.map(category => category.category_name);
            const subCategoryNames = selectedSubCategories.map(subCategory => subCategory.sub_category_name);
            const textContent = extractTextFromHtml(content);
            const lastEditedBy = localStorage.getItem('fullName');

            const { resources: existingItems } = await container.items
                .query({
                    query: "SELECT * FROM c WHERE c.title = @title",
                    parameters: [{ name: "@title", value: title }]
                })
                .fetchAll();

            if (existingItems.length > 0) {
                setDuplicateTitle(true);
            }

            const { resource: createdItem } = await container.items.create({
                locale: language.id,
                author: selectedAuthor ? selectedAuthor.value : null,
                coauthors: coauthorIds,
                title: title,
                search_keywords: typeof keywords === 'string' ? keywords.split(',').map(keyword => keyword.trim()) : [],
                article_body: content,
                search_preview: textContent,
                evidence_summary: evidenceSummaryContent,
                evidence_summary_references: evidenceSummaryReferencesContent,
                related_video_page: relatedVideoPage,
                parent_category: parentCategoryIds,
                sub_category: subCategoryIds,
                parent_category_names: parentCategoryNames,
                sub_category_names: subCategoryNames,
                publication_status: publicationStatus,
                isFrontPage: isFrontPage,
                thumbnailLink: thumbnailLink,
                altThumbnail: thumbnailAlt,
                questions: questions,
                publication_date: new Date().toISOString(),
                last_edited_by: lastEditedBy,
                created_by: lastEditedBy,
            });

            console.log(`Saved editor content: ${createdItem.content}`);
            setSaveSuccess(true);
            clearForm();
        }
    };

    const renderAuthors = (mainAuthor, coauthors) => {
        let allAuthors = [];

        if (mainAuthor && mainAuthor.value) {
            allAuthors.push({
                id: mainAuthor.value,
                name: mainAuthor.label,
                headshot: mainAuthor.headshot || placeholderHeadshot,
                credentials: mainAuthor.credentials,
                affiliations: mainAuthor.affiliations,
                author_title: mainAuthor.author_title
            });
        }

        allAuthors = allAuthors.concat(coauthors.filter(author => author && author.id).map(coauthor => ({
            ...coauthor,
            headshot: coauthor.headshot || placeholderHeadshot
        })));

        return (
            <AuthorsContainer>
                {allAuthors.map((author, index) => (
                    <Author key={index}>
                        <img
                            className="author-image"
                            src={author.headshot}
                            alt={`${author.name} headshot`}
                        />
                        <div className="author-details">
                            <div className="author-name">{author.name}{author.credentials ? `, ${author.credentials}` : ''}</div>
                            {author.title && <div className="author-name">{author.title}</div>}
                            {author.affiliations && <div className="author-affiliations">{author.affiliations}</div>}
                        </div>
                    </Author>
                ))}
            </AuthorsContainer>
        );
    };

    return (
        <>
            <div className="innerspace">
                <label className="label">Language</label>
                <label className="instruct_label">ISO language and country code.</label>
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

                <label className="label">Main Author</label>
                <Select
                    styles={{
                        container: (provided) => ({
                            ...provided,
                            width: '30%',
                            marginBottom: '20px'
                        }),
                    }}
                    options={[...authorOptions]}
                    value={selectedAuthor}
                    onChange={selectedOption => setSelectedAuthor(selectedOption)}
                    isSearchable
                    placeholder=""
                />
                <label className="label">Coauthors (optional)</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {coauthors.map((coauthor, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            <Select
                                styles={{
                                    container: (provided) => ({
                                        ...provided,
                                        width: '30%',
                                        marginBottom: '10px',
                                        marginRight: '10px'
                                    }),
                                }}
                                options={authorOptions}
                                value={coauthors[index] ? { value: coauthors[index].id, label: coauthors[index].name } : null}
                                onChange={(selectedOption) => handleCoauthorSelectChange(selectedOption, index)}
                                isSearchable
                            />
                            <button
                                type="button"
                                onClick={() => removeCoauthor(index)}
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
                    ))}
                    <button
                        type="button"
                        onClick={addCoauthor}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            borderRadius: '4px',
                            backgroundColor: '#827498',
                            color: '#FFFFFF',
                            border: 'none',
                            cursor: 'pointer',
                            marginTop: '20px',
                            width: '250px'
                        }}
                    >
                        + Add another coauthor
                    </button>
                </div>

                <label className="label">Title</label>
                <input
                    style={{
                        width: '50%',
                        padding: '10px',
                        boxSizing: 'border-box',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        marginBottom: '20px'
                    }}
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <input
                    style={{
                        width: '70%',
                        padding: '10px',
                        boxSizing: 'border-box',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        marginBottom: '20px'
                    }}
                    type="hidden"
                    value={summary}
                    onChange={e => setSummary(e.target.value)}
                    placeholder="Summary"
                    maxLength="141"
                />
                <div>
                    <label className="label">Upload Images</label>
                    <IndependentImageUpload />
                </div>
                <label className="label">Article</label>
                <label className="instruct_label">Please use Helvetica 18pt for most content.&#160; Links should open in a new window.Image alt text (alternative description) is for the blind.&#160; &#160; Example: An link to Google, should simply say <i>Google</i>.<br />
                    For now, images must be uploaded to Cloudflare manually.&#160; Image alt text (alternative description) is for the blind.&#160; &#160; Example: An image of a blue square, should simply say <i>blue square</i>.<br />
                    Please make sure your images adhere to the following guidelines:&#160;
                    - Maximum file size: 500 KB &#160; - Maximum dimensions: 800 x 800 pixels (width x height) &#160; - Preferred formats: JPEG for photos, PNG for graphics<br />
                </label>
                <Editor
                    apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>This is the initial content of the editor. Please use Helvetica 18pt for most content.</p>"
                    init={{
                        height: 500,
                        plugins: 'lists advlist link autolink image table  paste code directionality',
                        toolbar: 'undo redo | formatselect paste | bold italic underline | fontfamily fontsize | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link image | table | ltr rtl | code',
                        link_default_target: '_blank',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:18px }',
                    }}
                />
                <label className="label">Evidence Summary</label>
                <label className="instruct_label">Please use Helvetica 18pt for most content.&#160; Links should open in a new window.Image alt text (alternative description) is for the blind.&#160; &#160; Example: An link to Google, should simply say <i>Google</i>.<br />
                    For now, images must be uploaded to Cloudflare manually.&#160; Image alt text (alternative description) is for the blind.&#160; &#160; Example: An image of a blue square, should simply say <i>blue square</i>.<br />
                    Please make sure your images adhere to the following guidelines:&#160;
                    - Maximum file size: 500 KB &#160; - Maximum dimensions: 800 x 800 pixels (width x height) &#160; - Preferred formats: JPEG for photos, PNG for graphics<br />
                </label>
                <Editor
                    apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
                    onInit={(evt, editor) => evidenceSummaryRef.current = editor}
                    initialValue="<p>This is the initial content of the evidence summary editor. Please use Helvetica 18pt for most content.</p>"
                    init={{
                        plugins: 'lists advlist link autolink image table  paste code directionality',
                        toolbar: 'undo redo | formatselect paste | bold italic underline | fontfamily fontsize | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link image | table | ltr rtl | code',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:18px }',
                        link_default_target: '_blank',
                    }}
                />
                <label className="label">Evidence Summary References</label>
                <label className="instruct_label">Please use Helvetica 12pt for most content.&#160; External links should open in a new window. </label>
                <Editor
                    apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
                    onInit={(evt, editor) => evidenceSummaryReferencesRef.current = editor}
                    initialValue="<p>This is the initial content of the evidence summary references editor. Please use Helvetica 12pt for most content.</p>"
                    init={{
                        plugins: 'lists advlist link autolink paste code directionality',
                        toolbar: 'undo redo | formatselect paste | bold italic underline | fontfamily fontsize | alignleft aligncenter alignright alignjustify | outdent indent | numlist | link | ltr rtl | code',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:12px }',
                        link_default_target: '_blank',
                    }}
                />
                <label className="label">Related Video Page</label>
                <label className="instruct_label">Leave this blank for now. The video pages are not yet complete.</label>
                <input
                    style={{
                        width: '70%',
                        padding: '10px',
                        boxSizing: 'border-box',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        marginBottom: '20px'
                    }}
                    type="text"
                    value={relatedVideoPage}
                    onChange={e => setRelatedVideoPage(e.target.value)}
                    placeholder="Link to related video page"
                />
                <hr />
                {
                    questions.map((questionData, questionIndex) => (
                        <div key={questionIndex}>
                            <h4>Question {questionIndex + 1}</h4>

                            <label className="label">Question Text</label>
                            <input
                                type="text"
                                style={{
                                    width: '50%',
                                    padding: '10px',
                                    boxSizing: 'border-box',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc',
                                    fontSize: '16px',
                                    marginBottom: '20px'
                                }}
                                value={questionData.question}
                                onChange={event => updateQuestion(questionIndex, event.target.value, questionData.explanation)}
                            />

                            {questionData.options.map((option, optionIndex) => (
                                <div key={optionIndex}>
                                    <label className="label">Choice {optionIndex + 1}</label>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input
                                            type="text"
                                            style={{
                                                width: '50%',
                                                padding: '10px',
                                                boxSizing: 'border-box',
                                                borderRadius: '4px',
                                                border: '1px solid #ccc',
                                                fontSize: '16px',
                                                marginBottom: '20px'
                                            }}
                                            value={option.option}
                                            onChange={event => updateChoice(questionIndex, optionIndex, event.target.value, option.explanation)}
                                            disabled={option.option === "I don't know."}
                                        />
                                        &#160;&#160;
                                        {option.option !== "I don't know." && (
                                            <input
                                                type="checkbox"
                                                checked={option.isCorrect}
                                                onChange={event => updateIsCorrect(questionIndex, optionIndex, event.target.checked)}
                                            />
                                        )}
                                        {option.option !== "I don't know." && (
                                            <label className="label" style={{ margin: '0 10px' }}>Correct?</label>
                                        )}
                                    </div>
                                    <label className="label">Explanation for Choice {optionIndex + 1}</label>
                                    <input
                                        type="text"
                                        style={{
                                            width: '50%',
                                            padding: '10px',
                                            boxSizing: 'border-box',
                                            borderRadius: '4px',
                                            border: '1px solid #ccc',
                                            fontSize: '16px',
                                            marginBottom: '20px'
                                        }}
                                        value={option.explanation}
                                        onChange={event => updateChoice(questionIndex, optionIndex, option.option, event.target.value)}
                                    />
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => addChoice(questionIndex)}
                                style={{
                                    padding: '10px 20px',
                                    fontSize: '16px',
                                    borderRadius: '4px',
                                    backgroundColor: '#827498',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginTop: '20px',
                                    width: '250px'
                                }}
                            >
                                + Add another choice
                            </button>
                        </div>
                    ))
                }
                <hr />
                <>
                    <label className="label">Categories</label>
                    {selectedParentCategories.map((selectedParentCategory, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <div>
                                <label className="label" style={{ marginRight: '10px' }}>Parent Category</label>
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

                            <label className="label" style={{ marginRight: '10px' }}>Sub Category</label>
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

                    <button
                        type="button"
                        onClick={addParentCategory}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            borderRadius: '4px',
                            backgroundColor: '#827498',
                            color: '#FFFFFF',
                            border: 'none',
                            cursor: 'pointer',
                            marginTop: '20px',
                            width: '250px',
                        }}
                    >
                        + Add another category
                    </button>
                </>

                <label className="label">Search Keywords</label>
                <label className="instruct_label">
                    Text only keywords and phrases for search. Put individual words and phrases in quotes, and separate each by commas.<br />
                    Example: "alcohol", "moderate drinking", "alcohol intake limit", "daily alcohol consumption", "standard drink size", "alcohol by volume", "Dietary Guidelines for Americans", "women alcohol limit", "men alcohol limit"
                </label>
                <textarea
                    style={{
                        width: '70%',
                        padding: '10px',
                        boxSizing: 'border-box',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        marginBottom: '20px',
                        height: '5em',
                    }}
                    value={keywords}
                    onChange={e => setKeywords(e.target.value)}
                    placeholder="Keywords"
                />
                <hr />
                <label className="labelline">Front Page Article</label>
                <input
                    type="checkbox"
                    checked={isFrontPage}
                    onChange={(e) => setIsFrontPage(e.target.checked)}
                />

                <div>
                    <label className="labelline">Thumbnail Link</label>
                    <input
                        style={{
                            width: '25%',
                            height: '40px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '16px',
                        }}
                        type="text"
                        value={thumbnailLink}
                        onChange={(e) => setThumbnailLink(e.target.value)}
                        required
                    />
                    <label className="instruct_labelline">Please make sure thumbnail image is 500px wide x 334px high and in .jpg format.</label>
                </div>

                <div>
                    <label className="labelline">Thumbnail Alt Text</label>
                    <input
                        style={{
                            width: '25%',
                            height: '40px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '16px',
                        }}
                        type="text"
                        value={thumbnailAlt}
                        onChange={(e) => setThumbnailAlt(e.target.value)}
                    />
                </div>
                <hr />

                <label className="label">Publication Status</label>
                <select
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
                    value={publicationStatus}
                    onChange={(e) => setPublicationStatus(e.target.value)}
                >
                    <option value="archived">Archive</option>
                    <option value="draft">Save as Draft</option>
                    <option value="published">Publish</option>
                </select>

                <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        borderRadius: '4px',
                        backgroundColor: '#453793',
                        color: '#FFFFFF',
                        border: 'none',
                        cursor: 'pointer',
                        marginTop: '20px'
                    }}
                    onClick={save}
                >
                    Save Article
                </button>
                <button onClick={handlePreview}>Preview</button>
                <Modal isOpen={isPreviewOpen} onRequestClose={() => setIsPreviewOpen(false)}>
                    <button onClick={() => setIsPreviewOpen(false)}>Close</button>
                    <TopControlsPreview>
                        <StyledButton onClick={() => setIsScienceModalOpen(true)}>
                            <img src={BeakerIcon} alt="Beaker Icon" /> See the Science
                        </StyledButton>
                    </TopControlsPreview>
                    <ArticleContainer>
                        <ContentContainer>
                            <div className='article-container'>
                                <div className='article-content'>
                                    <h2 className="title">{title}</h2>
                                    <p className='publication-date'>
                                        Last Updated {
                                            new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
                                        }
                                    </p>
                                    <div className='authors' style={{ margin: 'auto' }}>
                                        {renderAuthors(selectedAuthor, coauthors)}
                                    </div>
                                    <div className="article-content">
                                        <hr style={{ border: 'none', width: '70%', height: '1px', backgroundColor: 'silver', margin: '5px 0 20px 0', borderTop: '1px dashed #86BFFF' }} />
                                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(editorContent) }} />
                                    </div>

                                    <PalsLogoContainer>
                                        <img src={PALSLogo} alt='PALS logo' className="pals-logo" />
                                        <PalsText>Made in collaboration with the Patient Activated Learning System, a project by Weill Cornell Medical College.</PalsText>
                                    </PalsLogoContainer>
                                    <PreviewAssessment questions={questions} />
                                </div>
                            </div>
                        </ContentContainer>

                    </ArticleContainer>
                </Modal>
                <Modal
                    isOpen={isScienceModalOpen}
                    onRequestClose={() => setIsScienceModalOpen(false)}
                    className="evidence-modal"
                    style={{ overflowY: 'auto', maxHeight: '90%' }}
                >
                    <div className="modal-content">
                        <h2>See the Science</h2>
                        <hr style={{ border: 'none', width: '100%', height: '1px', backgroundColor: 'silver', margin: '5px 5px 20px', borderTop: '1px dashed silver' }} />
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(evidenceSummary) }} />
                        <p> <br /></p>

                        <p style={{ fontWeight: 'bold' }}>
                            <sup>References</sup>
                        </p>
                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(evidenceSummaryReferences) }} />
                        <button onClick={() => setIsScienceModalOpen(false)} className="close-button">&times;</button>
                    </div>
                    <p className="modal-copy">&copy; {new Date().getFullYear()} MedExplain, Inc. All rights reserved.</p>
                </Modal>
                <br />
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                }}>
                    {saveSuccess && (
                        <div style={{
                            color: 'white',
                            backgroundColor: 'green',
                            padding: '10px',
                            fontSize: '20px',
                            borderRadius: '5px',
                            display: 'inline-block',
                            marginTop: '10px'
                        }}>
                            <i className="fas fa-check-circle"></i> Success! Your form has been submitted.
                        </div>
                    )}
                    {duplicateTitle && publicationStatus === 'published' && (
                        <div style={{
                            color: 'black',
                            backgroundColor: 'orange',
                            padding: '10px',
                            fontSize: '20px',
                            borderRadius: '5px',
                            display: 'inline-block',
                            marginTop: '10px'
                        }}>
                            <i className="fas fa-exclamation-triangle"></i> Note! This article replaced an existing article of the same title.
                        </div>
                    )}
                    {duplicateTitle && publicationStatus === 'draft' && (
                        <div style={{
                            color: 'black',
                            backgroundColor: 'yellow',
                            padding: '10px',
                            fontSize: '20px',
                            borderRadius: '5px',
                            display: 'inline-block',
                            marginTop: '10px'
                        }}>
                            <i className="fas fa-exclamation-triangle"></i> Note! Once published, this article would replace an existing article of the same title.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

