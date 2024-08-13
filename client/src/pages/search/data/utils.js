//export function formatSearchData(list) {
//  return list.map(item => {
//    if (item.categories.includes("MedLit")) {
//      return { title: item?.medlit_title ?? item?.post_title, content: item?.medlit_content ?? item?.content, categories: item.categories, permalink: item.permalink }
//    } else {
//        return { title: item.post_title, publication_date: item.publication_date, content: item.content, categories: item.categories, permalink: item.permalink }
//    }
//  })
//}

//export function getLink(str) {
//  const link = str.split('.')[0]

//  if (link) return link;

//  return str;
//}
export function formatSearchData(list) {
    return list.map(item => {
        if (item.categories.includes("MedLit")) {
            return {
                title: item?.medlit_title ?? item?.post_title,
                content: item?.medlit_content ?? item?.content,
                categories: item.categories,
                permalink: item.permalink
            };
        } else {
            return {
                title: item.post_title,
                publication_date: item.publication_date,
                content: item.content,
                categories: item.categories,
                permalink: item.permalink
            };
        }
    });
}

export function getLink(str) {
    const link = str.split('.')[0];
    if (link) return link;
    return str;
}
