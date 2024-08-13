export const hitsData = [
  {
    post_id: 6982,
    post_title: "Yarn: From Zero to 700,000 User Searches per Month",
    post_date: 1510219443,
    post_date_formatted: "Nov 9th 2017",
    author_name: "Haroen Viaene",
    author_image_url:
      "https://secure.gravatar.com/avatar/48ff3c037bd28b8fccabe52751e9700f?s=40&d=mm&r=g",
    permalink: "https://blog.algolia.com/yarn-search-javascript-packages/",
    categories: ["Technology"],
    image:
      "https://blog.algolia.com/wp-content/uploads/2017/11/2017-11_Yarn-Algolia-360x200.png",
    time_to_read: 11,
    content:
      '… dependencies and file browsing.\nHere\'s what it looks like:\n\nnpm detail page on the left, Yarn detail page on the right (click to enlarge)\nWe believe (and we had a lot of feedback about it) that all those additions are providing an enhanced experience that helps users when finding and comparing JavaScript packages.\n\nTIL yarn has a responsive package details pagehttps://t.co/w2QkQoDP9P pic.twitter.com/wBnQ9biD85\n&mdash; John-David Dalton (@jdalton) March 30, 2017\n\nThis is an iterative process, and suggestions and feedback are always welcome.\nTechnical implementation and challenges\nThe first step to providing a search for JavaScript packages is to replicate and monitor changes from the npm registry into an Algolia index.\nThe code for this replication is all open source and available at algolia/npm-search. The most important API being used here is the npm replication API.\nThe npm registry is exposed as a CouchDB database, which has a replication protocol that can be used to either set up your own npm registry, or in our case a service (the Algolia index) that has the same data as the npm registry.\nReplicating the npm registry\nReplication in CouchDB is a very simple but powerful system that assigns an "update sequence" (a number) to any changes made on a database. Then, to replicate a database and stay in sync, you only need to go from the update sequence 0 (zero) to the last update sequence, while also saving the last update sequence you replicated on your end. For example, right now, the last update sequence known on the npm registry is 5647452 (more than five million changes).\nEarly on we saw that going from 0 to 5647452 was very slow (multiple hours) and we wanted it to be faster. So, we made a replication system consisting of three phases:\nThe bootstrap. Instead of going over all update sequences, we save the current last sequence, then we list all JavaScript packages and replicate them by bulk to Algolia\n\nThe catch-up. Starting from our last known update sequence,',
    record_index: 2,
    objectID: "media-sample-data-99",
    _snippetResult: {
      post_id: {
        value: "6982",
        matchLevel: "none",
      },
      post_title: {
        value: "Yarn: From Zero to 700,000 User Searches per Month",
        matchLevel: "none",
      },
      post_date: {
        value: "1510219443",
        matchLevel: "none",
      },
      post_date_formatted: {
        value: "Nov 9th 2017",
        matchLevel: "none",
      },
      author_name: {
        value: "Haroen Viaene",
        matchLevel: "none",
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/48ff3c037bd28b8fccabe52751e9700f?s=40&d=mm&r=g",
        matchLevel: "none",
      },
      permalink: {
        value: "https://blog.algolia.com/yarn-search-javascript-packages/",
        matchLevel: "none",
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/2017-11_Yarn-Algolia-360x200.png",
        matchLevel: "none",
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
      },
      content: {
        value:
          "… dependencies and file browsing.\nHere's what it looks like:\n\nnpm detail page on the left, Yarn detail page …",
        matchLevel: "none",
      },
      record_index: {
        value: "2",
        matchLevel: "none",
      },
    },
    _highlightResult: {
      post_id: {
        value: "6982",
        matchLevel: "none",
        matchedWords: [],
      },
      post_title: {
        value: "Yarn: From Zero to 700,000 User Searches per Month",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date: {
        value: "1510219443",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date_formatted: {
        value: "Nov 9th 2017",
        matchLevel: "none",
        matchedWords: [],
      },
      author_name: {
        value: "Haroen Viaene",
        matchLevel: "none",
        matchedWords: [],
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/48ff3c037bd28b8fccabe52751e9700f?s=40&d=mm&r=g",
        matchLevel: "none",
        matchedWords: [],
      },
      permalink: {
        value: "https://blog.algolia.com/yarn-search-javascript-packages/",
        matchLevel: "none",
        matchedWords: [],
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
          matchedWords: [],
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/2017-11_Yarn-Algolia-360x200.png",
        matchLevel: "none",
        matchedWords: [],
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
        matchedWords: [],
      },
      content: {
        value:
          '… dependencies and file browsing.\nHere\'s what it looks like:\n\nnpm detail page on the left, Yarn detail page on the right (click to enlarge)\nWe believe (and we had a lot of feedback about it) that all those additions are providing an enhanced experience that helps users when finding and comparing JavaScript packages.\n\nTIL yarn has a responsive package details pagehttps://t.co/w2QkQoDP9P pic.twitter.com/wBnQ9biD85\n&mdash; John-David Dalton (@jdalton) March 30, 2017\n\nThis is an iterative process, and suggestions and feedback are always welcome.\nTechnical implementation and challenges\nThe first step to providing a search for JavaScript packages is to replicate and monitor changes from the npm registry into an Algolia index.\nThe code for this replication is all open source and available at algolia/npm-search. The most important API being used here is the npm replication API.\nThe npm registry is exposed as a CouchDB database, which has a replication protocol that can be used to either set up your own npm registry, or in our case a service (the Algolia index) that has the same data as the npm registry.\nReplicating the npm registry\nReplication in CouchDB is a very simple but powerful system that assigns an "update sequence" (a number) to any changes made on a database. Then, to replicate a database and stay in sync, you only need to go from the update sequence 0 (zero) to the last update sequence, while also saving the last update sequence you replicated on your end. For example, right now, the last update sequence known on the npm registry is 5647452 (more than five million changes).\nEarly on we saw that going from 0 to 5647452 was very slow (multiple hours) and we wanted it to be faster. So, we made a replication system consisting of three phases:\nThe bootstrap. Instead of going over all update sequences, we save the current last sequence, then we list all JavaScript packages and replicate them by bulk to Algolia\n\nThe catch-up. Starting from our last known update sequence,',
        matchLevel: "none",
        matchedWords: [],
      },
      record_index: {
        value: "2",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 399,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
  {
    post_id: 6982,
    post_title: "Yarn: From Zero to 700,000 User Searches per Month",
    post_date: 1510219443,
    post_date_formatted: "Nov 9th 2017",
    author_name: "Haroen Viaene",
    author_image_url:
      "https://secure.gravatar.com/avatar/48ff3c037bd28b8fccabe52751e9700f?s=40&d=mm&r=g",
    permalink: "https://blog.algolia.com/yarn-search-javascript-packages/",
    categories: ["Technology"],
    image:
      "https://blog.algolia.com/wp-content/uploads/2017/11/2017-11_Yarn-Algolia-360x200.png",
    time_to_read: 11,
    content:
      "… solution. Ten days later it got merged, and instant-search for JavaScript packages was available on the Yarn website.\nIn early 2017, we met with the Yarn team for a one day in-person brainstorming in London. The goal was to think about evolutions of the search experience along with defining a package details page. Algolia proposed design views of what search could be and from that we drafted a master plan.\nFeatures behind a great package search\nIt shows results instantly ⚡️\n^ This is not sped up. It is THAT fast (try it!). Yes, it still wows even us every time.\nInstead of showing a dropdown of results, we chose to replace the page completely with the search results. This requires more data to be available immediately, but gives more context on the decisions you make while searching for a fitting package. Having the search page be the main entry point will make sure that you don't need to know exactly what you want before \"committing\" to a search.\nIt displays a lot of metadata\nAfter using npm search many times, we knew what was missing and what was superfluous from the search results and package detail pages. We brainstormed a bit and iteratively added a lot of useful metadata.\nHere's a comparison between the two search results pages (npm on the left, Yarn on the right):\n\nnpm search results on the left, Yarn search results on the right (click to enlarge)\nIn the search results of Yarn we decided to directly display, for example, the number of downloads for every packages, the license, direct links to GitHub, and the owning organization.\nThis metadata helps the user to not have to open many package detail pages before getting the information they want.\nIt has completely rethought package detail pages\nFor the package detail page, we took a similar approach. We started with the same base metadata as npm shows, but also took the opportunity to add a lot more. We decided to show changelogs (when available), GitHub stargazers, commit activity, deprecation messages,",
    record_index: 1,
    objectID: "media-sample-data-98",
    _snippetResult: {
      post_id: {
        value: "6982",
        matchLevel: "none",
      },
      post_title: {
        value: "Yarn: From Zero to 700,000 User Searches per Month",
        matchLevel: "none",
      },
      post_date: {
        value: "1510219443",
        matchLevel: "none",
      },
      post_date_formatted: {
        value: "Nov 9th 2017",
        matchLevel: "none",
      },
      author_name: {
        value: "Haroen Viaene",
        matchLevel: "none",
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/48ff3c037bd28b8fccabe52751e9700f?s=40&d=mm&r=g",
        matchLevel: "none",
      },
      permalink: {
        value: "https://blog.algolia.com/yarn-search-javascript-packages/",
        matchLevel: "none",
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/2017-11_Yarn-Algolia-360x200.png",
        matchLevel: "none",
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
      },
      content: {
        value:
          "… solution. Ten days later it got merged, and instant-search for JavaScript packages was available on the Yarn website …",
        matchLevel: "none",
      },
      record_index: {
        value: "1",
        matchLevel: "none",
      },
    },
    _highlightResult: {
      post_id: {
        value: "6982",
        matchLevel: "none",
        matchedWords: [],
      },
      post_title: {
        value: "Yarn: From Zero to 700,000 User Searches per Month",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date: {
        value: "1510219443",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date_formatted: {
        value: "Nov 9th 2017",
        matchLevel: "none",
        matchedWords: [],
      },
      author_name: {
        value: "Haroen Viaene",
        matchLevel: "none",
        matchedWords: [],
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/48ff3c037bd28b8fccabe52751e9700f?s=40&d=mm&r=g",
        matchLevel: "none",
        matchedWords: [],
      },
      permalink: {
        value: "https://blog.algolia.com/yarn-search-javascript-packages/",
        matchLevel: "none",
        matchedWords: [],
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
          matchedWords: [],
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/2017-11_Yarn-Algolia-360x200.png",
        matchLevel: "none",
        matchedWords: [],
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
        matchedWords: [],
      },
      content: {
        value:
          "… solution. Ten days later it got merged, and instant-search for JavaScript packages was available on the Yarn website.\nIn early 2017, we met with the Yarn team for a one day in-person brainstorming in London. The goal was to think about evolutions of the search experience along with defining a package details page. Algolia proposed design views of what search could be and from that we drafted a master plan.\nFeatures behind a great package search\nIt shows results instantly ⚡️\n^ This is not sped up. It is THAT fast (try it!). Yes, it still wows even us every time.\nInstead of showing a dropdown of results, we chose to replace the page completely with the search results. This requires more data to be available immediately, but gives more context on the decisions you make while searching for a fitting package. Having the search page be the main entry point will make sure that you don't need to know exactly what you want before \"committing\" to a search.\nIt displays a lot of metadata\nAfter using npm search many times, we knew what was missing and what was superfluous from the search results and package detail pages. We brainstormed a bit and iteratively added a lot of useful metadata.\nHere's a comparison between the two search results pages (npm on the left, Yarn on the right):\n\nnpm search results on the left, Yarn search results on the right (click to enlarge)\nIn the search results of Yarn we decided to directly display, for example, the number of downloads for every packages, the license, direct links to GitHub, and the owning organization.\nThis metadata helps the user to not have to open many package detail pages before getting the information they want.\nIt has completely rethought package detail pages\nFor the package detail page, we took a similar approach. We started with the same base metadata as npm shows, but also took the opportunity to add a lot more. We decided to show changelogs (when available), GitHub stargazers, commit activity, deprecation messages,",
        matchLevel: "none",
        matchedWords: [],
      },
      record_index: {
        value: "1",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 398,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
  {
    post_id: 6982,
    post_title: "Yarn: From Zero to 700,000 User Searches per Month",
    post_date: 1510219443,
    post_date_formatted: "Nov 9th 2017",
    author_name: "Haroen Viaene",
    author_image_url:
      "https://secure.gravatar.com/avatar/48ff3c037bd28b8fccabe52751e9700f?s=40&d=mm&r=g",
    permalink: "https://blog.algolia.com/yarn-search-javascript-packages/",
    categories: ["Technology"],
    image:
      "https://blog.algolia.com/wp-content/uploads/2017/11/2017-11_Yarn-Algolia-360x200.png",
    time_to_read: 11,
    content:
      'Since December 2016, as part of our yearly community gift effort, Algolia has powered the JavaScript packages search of the Yarn website. This blog post explains how we collaborated with the Yarn team, what the challenges were building such a search interface, and how much this search is used today.\nYarn is a JavaScript package manager similar to npm. In the beginning, there was no way to search for JavaScript packages on the Yarn website. Since we were heavy users of Yarn, in December 2016 we built a proof-of-concept search UI, and it was released on their website one month later (Try it here!). As of today, every month there are about 700,000 searches (that\'s 2.3M API calls) being done on the Yarn JavaScript packages index on Algolia.\nnumber of user searches per month on the Yarn website\nFrom a Slack discussion to PR and Merge. All in one month.\nSearch on the Yarn website started with the documentation. We wanted people to easily find information on how to use Yarn. As with 300 other programming community websites, we went for Algolia\'s DocSearch and this was merged in yarnpkg/website#105. Then another Yarn contributor (@thejameskyle) asked in yarnpkg/website#194 if there should be package searching abilities, much like npm had.\nThis is where Algolia came into play. We are a search engine, Yarn wants search and we are heavy users of Yarn, so we figured: let\'s do this!\nThis is how it started on December 5th in our #2016-community-gift Slack channel:\n\n"Hey what could we build for the JavaScript community that would help them in their daily workflow?"\n"It\'s not that easy to find relevant JavaScript packages when you need one"\n"I like Yarn a lot..."\n"Let\'s build Yarn search!"\n\nWe wanted the community to feel empowered by a great new way to search for JavaScript packages. This was also an opportunity for us to work on something cool while benefiting the company. Three weeks later, on December 22th 2016, via yarnpkg/website#322, we proposed our first package search',
    record_index: 0,
    objectID: "media-sample-data-97",
    _snippetResult: {
      post_id: {
        value: "6982",
        matchLevel: "none",
      },
      post_title: {
        value: "Yarn: From Zero to 700,000 User Searches per Month",
        matchLevel: "none",
      },
      post_date: {
        value: "1510219443",
        matchLevel: "none",
      },
      post_date_formatted: {
        value: "Nov 9th 2017",
        matchLevel: "none",
      },
      author_name: {
        value: "Haroen Viaene",
        matchLevel: "none",
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/48ff3c037bd28b8fccabe52751e9700f?s=40&d=mm&r=g",
        matchLevel: "none",
      },
      permalink: {
        value: "https://blog.algolia.com/yarn-search-javascript-packages/",
        matchLevel: "none",
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/2017-11_Yarn-Algolia-360x200.png",
        matchLevel: "none",
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
      },
      content: {
        value:
          "Since December 2016, as part of our yearly community gift effort, Algolia has powered the JavaScript packages search of the …",
        matchLevel: "none",
      },
      record_index: {
        value: "0",
        matchLevel: "none",
      },
    },
    _highlightResult: {
      post_id: {
        value: "6982",
        matchLevel: "none",
        matchedWords: [],
      },
      post_title: {
        value: "Yarn: From Zero to 700,000 User Searches per Month",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date: {
        value: "1510219443",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date_formatted: {
        value: "Nov 9th 2017",
        matchLevel: "none",
        matchedWords: [],
      },
      author_name: {
        value: "Haroen Viaene",
        matchLevel: "none",
        matchedWords: [],
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/48ff3c037bd28b8fccabe52751e9700f?s=40&d=mm&r=g",
        matchLevel: "none",
        matchedWords: [],
      },
      permalink: {
        value: "https://blog.algolia.com/yarn-search-javascript-packages/",
        matchLevel: "none",
        matchedWords: [],
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
          matchedWords: [],
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/2017-11_Yarn-Algolia-360x200.png",
        matchLevel: "none",
        matchedWords: [],
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
        matchedWords: [],
      },
      content: {
        value:
          'Since December 2016, as part of our yearly community gift effort, Algolia has powered the JavaScript packages search of the Yarn website. This blog post explains how we collaborated with the Yarn team, what the challenges were building such a search interface, and how much this search is used today.\nYarn is a JavaScript package manager similar to npm. In the beginning, there was no way to search for JavaScript packages on the Yarn website. Since we were heavy users of Yarn, in December 2016 we built a proof-of-concept search UI, and it was released on their website one month later (Try it here!). As of today, every month there are about 700,000 searches (that\'s 2.3M API calls) being done on the Yarn JavaScript packages index on Algolia.\nnumber of user searches per month on the Yarn website\nFrom a Slack discussion to PR and Merge. All in one month.\nSearch on the Yarn website started with the documentation. We wanted people to easily find information on how to use Yarn. As with 300 other programming community websites, we went for Algolia\'s DocSearch and this was merged in yarnpkg/website#105. Then another Yarn contributor (@thejameskyle) asked in yarnpkg/website#194 if there should be package searching abilities, much like npm had.\nThis is where Algolia came into play. We are a search engine, Yarn wants search and we are heavy users of Yarn, so we figured: let\'s do this!\nThis is how it started on December 5th in our #2016-community-gift Slack channel:\n\n"Hey what could we build for the JavaScript community that would help them in their daily workflow?"\n"It\'s not that easy to find relevant JavaScript packages when you need one"\n"I like Yarn a lot..."\n"Let\'s build Yarn search!"\n\nWe wanted the community to feel empowered by a great new way to search for JavaScript packages. This was also an opportunity for us to work on something cool while benefiting the company. Three weeks later, on December 22th 2016, via yarnpkg/website#322, we proposed our first package search',
        matchLevel: "none",
        matchedWords: [],
      },
      record_index: {
        value: "0",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 397,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
  {
    post_id: 7020,
    post_title:
      "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
    post_date: 1510738771,
    post_date_formatted: "Nov 15th 2017",
    author_name: "Josh Dzielak",
    author_image_url:
      "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
    permalink:
      "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
    categories: ["Technology"],
    image:
      "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
    time_to_read: 11,
    content:
      "… also reduce maintenance and total cost of ownership by cutting down on custom code. Component libraries in particular mean that the engineer building the UI doesn’t need to be a JavaScript expert; in most cases a basic working knowledge of JavaScript will do.\nConclusion\nIn a consumer-grade search implementation, the user experience is critical. Consumers are picky and, if unsatisfied by a site or mobile app’s search, are likely to abandon it in search of an alternative.\nBecause we rely on developers to build the amazing search user experience that we desire, we have to account for their experience as well. A tired, frustrated development team can’t compete with a team that is happy and productive. A developer mired in the details of applying security patches or debugging deeply-nested JavaScript promises may not have the time—or the energy—to make their product’s ambitious design spec a reality.\nWith an open source and more open-ended tool like Elasticsearch, the degree to which a developer gets mired or inspired is largely a function of their search-building experience and expertise. With Algolia, many of the most complex moving parts of the search-building journey—including infrastructure, performance and scalability—are handled automatically underneath the API, freeing up the developer to focus on building a great user experience and ultimately a great product.\nRead other parts of the Comparing Algolia and Elasticsearch for Consumer-Grade Search series:\nPart 1 - End-to-end Latency\nPart 2 - Relevance Isn't Luck\nPart 3 - Developer Experience and UX",
    record_index: 6,
    objectID: "media-sample-data-96",
    _snippetResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
      },
      content: {
        value:
          "… also reduce maintenance and total cost of ownership by cutting down on custom code. Component libraries in particular mean …",
        matchLevel: "none",
      },
      record_index: {
        value: "6",
        matchLevel: "none",
      },
    },
    _highlightResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
        matchedWords: [],
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
        matchedWords: [],
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
        matchedWords: [],
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
        matchedWords: [],
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
        matchedWords: [],
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
          matchedWords: [],
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
        matchedWords: [],
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
        matchedWords: [],
      },
      content: {
        value:
          "… also reduce maintenance and total cost of ownership by cutting down on custom code. Component libraries in particular mean that the engineer building the UI doesn’t need to be a JavaScript expert; in most cases a basic working knowledge of JavaScript will do.\nConclusion\nIn a consumer-grade search implementation, the user experience is critical. Consumers are picky and, if unsatisfied by a site or mobile app’s search, are likely to abandon it in search of an alternative.\nBecause we rely on developers to build the amazing search user experience that we desire, we have to account for their experience as well. A tired, frustrated development team can’t compete with a team that is happy and productive. A developer mired in the details of applying security patches or debugging deeply-nested JavaScript promises may not have the time—or the energy—to make their product’s ambitious design spec a reality.\nWith an open source and more open-ended tool like Elasticsearch, the degree to which a developer gets mired or inspired is largely a function of their search-building experience and expertise. With Algolia, many of the most complex moving parts of the search-building journey—including infrastructure, performance and scalability—are handled automatically underneath the API, freeing up the developer to focus on building a great user experience and ultimately a great product.\nRead other parts of the Comparing Algolia and Elasticsearch for Consumer-Grade Search series:\nPart 1 - End-to-end Latency\nPart 2 - Relevance Isn't Luck\nPart 3 - Developer Experience and UX",
        matchLevel: "none",
        matchedWords: [],
      },
      record_index: {
        value: "6",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 396,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
  {
    post_id: 7020,
    post_title:
      "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
    post_date: 1510738771,
    post_date_formatted: "Nov 15th 2017",
    author_name: "Josh Dzielak",
    author_image_url:
      "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
    permalink:
      "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
    categories: ["Technology"],
    image:
      "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
    time_to_read: 11,
    content:
      "… API clients can fallback to a second DNS provider in order to work around DDoS attacks, like the 30-50+ Gbps attack on NS1 in May 2016.\nSo while API clients may seem simple at first glance, the details can have a big impact on both performance and reliability — and therefore the quality of the user experience. If developers don’t have to reinvent the wheel just to pass data back and forth between clients and servers, their experience (and productivity) will be vastly improved.\nReusable UI building blocks\nThough the API client is fundamental, it’s still only a small piece of the overall frontend story. User-initiated keystrokes and clicks must be handled, results must be displayed and made selectable. That could be via an autocomplete menu or a more advanced page with controls for faceting, filtering and pagination. In either case, this can add up to a lot of custom HTML, JavaScript and CSS.\nIn the Elasticsearch ecosystem, community developers have created projects like SearchKit and ElasticUI to help create these interfaces.\nIn the Algolia ecosystem, an officially-supported family of libraries called InstantSearch was created to encapsulate the various consumer-grade UI/UX search best practices and make them easy to implement. Each InstantSearch library is composed of a set of UI widgets that can be added one by one to a search page. Here are examples of common widgets:\n\nSearch box\nHits (for displaying results)\nSort by selector\nRange slider\nRefinement list (for faceting)\n\nThe framework-agnostic JavaScript InstantSearch library, simply called InstantSearch.js, contains a total of 18 ready-made widgets. It also exposes factories for creating others. Each widget is connected to any change in the state of the search and re-renders automatically. Other members of the InstantSearch family work similarly. Here’s a quick look at each one.\n\nFull-featured API clients and component libraries provide a good DX for building the UX— the “U” in our SUPIR search. They",
    record_index: 5,
    objectID: "media-sample-data-95",
    _snippetResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
      },
      content: {
        value:
          "… API clients can fallback to a second DNS provider in order to work around DDoS attacks, like the 30 …",
        matchLevel: "none",
      },
      record_index: {
        value: "5",
        matchLevel: "none",
      },
    },
    _highlightResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
        matchedWords: [],
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
        matchedWords: [],
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
        matchedWords: [],
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
        matchedWords: [],
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
        matchedWords: [],
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
          matchedWords: [],
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
        matchedWords: [],
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
        matchedWords: [],
      },
      content: {
        value:
          "… API clients can fallback to a second DNS provider in order to work around DDoS attacks, like the 30-50+ Gbps attack on NS1 in May 2016.\nSo while API clients may seem simple at first glance, the details can have a big impact on both performance and reliability — and therefore the quality of the user experience. If developers don’t have to reinvent the wheel just to pass data back and forth between clients and servers, their experience (and productivity) will be vastly improved.\nReusable UI building blocks\nThough the API client is fundamental, it’s still only a small piece of the overall frontend story. User-initiated keystrokes and clicks must be handled, results must be displayed and made selectable. That could be via an autocomplete menu or a more advanced page with controls for faceting, filtering and pagination. In either case, this can add up to a lot of custom HTML, JavaScript and CSS.\nIn the Elasticsearch ecosystem, community developers have created projects like SearchKit and ElasticUI to help create these interfaces.\nIn the Algolia ecosystem, an officially-supported family of libraries called InstantSearch was created to encapsulate the various consumer-grade UI/UX search best practices and make them easy to implement. Each InstantSearch library is composed of a set of UI widgets that can be added one by one to a search page. Here are examples of common widgets:\n\nSearch box\nHits (for displaying results)\nSort by selector\nRange slider\nRefinement list (for faceting)\n\nThe framework-agnostic JavaScript InstantSearch library, simply called InstantSearch.js, contains a total of 18 ready-made widgets. It also exposes factories for creating others. Each widget is connected to any change in the state of the search and re-renders automatically. Other members of the InstantSearch family work similarly. Here’s a quick look at each one.\n\nFull-featured API clients and component libraries provide a good DX for building the UX— the “U” in our SUPIR search. They",
        matchLevel: "none",
        matchedWords: [],
      },
      record_index: {
        value: "5",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 395,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
  {
    post_id: 7020,
    post_title:
      "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
    post_date: 1510738771,
    post_date_formatted: "Nov 15th 2017",
    author_name: "Josh Dzielak",
    author_image_url:
      "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
    permalink:
      "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
    categories: ["Technology"],
    image:
      "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
    time_to_read: 11,
    content:
      "… of each record.\nWhen using Elasticsearch, this level of fine-grained security is often implemented by an application server, rather than exposing Elasticsearch to frontend clients directly. You can think of the parallel to your primary application database like Postgresql or MongoDB—these databases are accessed directly by your servers, not your users’ clients. The advantage of this is flexibility—you can implement any authorization scheme you like—but the disadvantage comes in having to build and maintain it, thereby adding an additional step to the developer journey. A second disadvantage comes in terms of performance, as every search query will need to be processed by an application server that sits in front of your Elasticsearch instance, and it is likely that the application server will perform one or more calls to your relational database in order to authorize the HTTP request. Many precious milliseconds are consumed therein.\nWhen Elasticsearch is accessed this way, the developer does not use a frontend Elasticsearch API client at all, but connects to an existing backend which proxies the request to an Elasticsearch instance.\nAlgolia is designed to be called directly from the client, with authentication and authorization being handled by passing API keys. Algolia secured API keys can encode a lot more information than just an authorizing token, including index and search parameter restrictions, ipv4 source restrictions, rate limits and expiry information. This gives developers flexibility when it comes to security, without slowing them down.\nThe direct connection between frontend API client and Algolia host is also fast. The entire search request is fulfilled by an Algolia module running inside of NGINX—no expensive application servers or database calls required. Lastly, the connection is reliable. API clients are aware of all 3 Algolia hosts in a cluster, as well as any global DSN replicas, and can work around any downed hosts. Additionally, Algolia",
    record_index: 4,
    objectID: "media-sample-data-94",
    _snippetResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
      },
      content: {
        value:
          "… of each record.\nWhen using Elasticsearch, this level of fine-grained security is often implemented by an application server …",
        matchLevel: "none",
      },
      record_index: {
        value: "4",
        matchLevel: "none",
      },
    },
    _highlightResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
        matchedWords: [],
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
        matchedWords: [],
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
        matchedWords: [],
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
        matchedWords: [],
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
        matchedWords: [],
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
          matchedWords: [],
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
        matchedWords: [],
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
        matchedWords: [],
      },
      content: {
        value:
          "… of each record.\nWhen using Elasticsearch, this level of fine-grained security is often implemented by an application server, rather than exposing Elasticsearch to frontend clients directly. You can think of the parallel to your primary application database like Postgresql or MongoDB—these databases are accessed directly by your servers, not your users’ clients. The advantage of this is flexibility—you can implement any authorization scheme you like—but the disadvantage comes in having to build and maintain it, thereby adding an additional step to the developer journey. A second disadvantage comes in terms of performance, as every search query will need to be processed by an application server that sits in front of your Elasticsearch instance, and it is likely that the application server will perform one or more calls to your relational database in order to authorize the HTTP request. Many precious milliseconds are consumed therein.\nWhen Elasticsearch is accessed this way, the developer does not use a frontend Elasticsearch API client at all, but connects to an existing backend which proxies the request to an Elasticsearch instance.\nAlgolia is designed to be called directly from the client, with authentication and authorization being handled by passing API keys. Algolia secured API keys can encode a lot more information than just an authorizing token, including index and search parameter restrictions, ipv4 source restrictions, rate limits and expiry information. This gives developers flexibility when it comes to security, without slowing them down.\nThe direct connection between frontend API client and Algolia host is also fast. The entire search request is fulfilled by an Algolia module running inside of NGINX—no expensive application servers or database calls required. Lastly, the connection is reliable. API clients are aware of all 3 Algolia hosts in a cluster, as well as any global DSN replicas, and can work around any downed hosts. Additionally, Algolia",
        matchLevel: "none",
        matchedWords: [],
      },
      record_index: {
        value: "4",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 394,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
  {
    post_id: 7020,
    post_title:
      "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
    post_date: 1510738771,
    post_date_formatted: "Nov 15th 2017",
    author_name: "Josh Dzielak",
    author_image_url:
      "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
    permalink:
      "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
    categories: ["Technology"],
    image:
      "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
    time_to_read: 11,
    content:
      "… search should feel like it’s a step ahead of us and practically guessing what we want. It should also provide instant feedback so we can correct our mistakes or refine our search, and it should work wherever we happen to be computing from. A satisfying search UX will:\n\nUpdate results immediately as the user types, putting them in control of the experience\nHandle spelling mistakes, omissions and concatenations\nMake an obvious connection between search terms and results\nWork on all web and mobile platforms\n\nIn many cases, these additional search UX patterns will be used to enhance the experience:\n\nHierarchical faceting and filtering\nBrowsing with or without keywords, including pagination\nSearching multiple different data types simultaneously\n\n&nbsp;\nA powerful product search with instant results\n&nbsp;\nOnce the initial requirements and design for the UI/UX have been decided on, the next step for the developer is to start building it. Ideally, they won’t have to start from scratch.\nFrontend API clients\nBoth Algolia and Elasticsearch have a REST API that makes it possible to interact with them over HTTP—therefore directly via web browsers and mobile devices. API clients contain the logic to send requests over HTTP, parse responses, and handle network and security concerns. They’re an essential building block for user interfaces and user interface libraries built on top of them. They’re also one of the first places where the developer looks for guidance before they start coding.\nAlgolia and Elasticsearch both have a JavaScript API client that works in the browser and node.js. Algolia also has official native API clients for iOS and Android.\n\nAPI clients, security and performance\nAPI clients must also implement security, including authentication and authorization logic. In search, this goes beyond just passing auth credentials. Just because a user can search an index doesn’t necessarily mean they’re allowed to retrieve all records, or see all of the fields",
    record_index: 3,
    objectID: "media-sample-data-93",
    _snippetResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
      },
      content: {
        value:
          "… search should feel like it’s a step ahead of us and practically guessing what we want. It should …",
        matchLevel: "none",
      },
      record_index: {
        value: "3",
        matchLevel: "none",
      },
    },
    _highlightResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
        matchedWords: [],
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
        matchedWords: [],
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
        matchedWords: [],
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
        matchedWords: [],
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
        matchedWords: [],
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
          matchedWords: [],
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
        matchedWords: [],
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
        matchedWords: [],
      },
      content: {
        value:
          "… search should feel like it’s a step ahead of us and practically guessing what we want. It should also provide instant feedback so we can correct our mistakes or refine our search, and it should work wherever we happen to be computing from. A satisfying search UX will:\n\nUpdate results immediately as the user types, putting them in control of the experience\nHandle spelling mistakes, omissions and concatenations\nMake an obvious connection between search terms and results\nWork on all web and mobile platforms\n\nIn many cases, these additional search UX patterns will be used to enhance the experience:\n\nHierarchical faceting and filtering\nBrowsing with or without keywords, including pagination\nSearching multiple different data types simultaneously\n\n&nbsp;\nA powerful product search with instant results\n&nbsp;\nOnce the initial requirements and design for the UI/UX have been decided on, the next step for the developer is to start building it. Ideally, they won’t have to start from scratch.\nFrontend API clients\nBoth Algolia and Elasticsearch have a REST API that makes it possible to interact with them over HTTP—therefore directly via web browsers and mobile devices. API clients contain the logic to send requests over HTTP, parse responses, and handle network and security concerns. They’re an essential building block for user interfaces and user interface libraries built on top of them. They’re also one of the first places where the developer looks for guidance before they start coding.\nAlgolia and Elasticsearch both have a JavaScript API client that works in the browser and node.js. Algolia also has official native API clients for iOS and Android.\n\nAPI clients, security and performance\nAPI clients must also implement security, including authentication and authorization logic. In search, this goes beyond just passing auth credentials. Just because a user can search an index doesn’t necessarily mean they’re allowed to retrieve all records, or see all of the fields",
        matchLevel: "none",
        matchedWords: [],
      },
      record_index: {
        value: "3",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 393,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
  {
    post_id: 7020,
    post_title:
      "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
    post_date: 1510738771,
    post_date_formatted: "Nov 15th 2017",
    author_name: "Josh Dzielak",
    author_image_url:
      "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
    permalink:
      "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
    categories: ["Technology"],
    image:
      "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
    time_to_read: 11,
    content:
      "… relational or NoSQL database-backed applications is the tighter level of coupling required between each layer of the stack. In traditional CRUD-based apps, the implementation details of the database’s storage engine have little bearing on the types of user experiences that can be built on top of it. This is not true in search—the feasibility of a particular user experience can come down to specific implementation details like whether the search engine uses Tries or not.\nThe iterative nature and tight level of coupling in search can be the source of numerous headaches for developers. Improving one SUPIR aspect can break several others, a frustrating event that feels more like retracing steps than moving forward. Some examples:\n\nA relevance improvement for one query makes all queries slower\nA relevance improvement for one query worsens relevance for others\nAt scale, heavy indexing loads begin to degrade search performance\nDegraded search performance requires implementing UX workarounds\n\nAs we head to the next sections and start to address the individual aspects of SUPIR, we’ll take care to point out what developers using Algolia or Elasticsearch need to do to avoid these pitfalls. First up, we’ll look at the “U” in SUPIR—user experience.\nCryptic error messages cause developers distress\n&nbsp;\nUser Experience\nIn search, it’s important to begin with the end in mind. What should happen when the user starts typing in that shiny new search box? The user interface (UI) and user experience (UX) will heavily affect the design of the other four SUPIR aspects, so it’s important to sketch it out early.\nDesign and best practices\nThere are many different types of search UX, ranging from a simple keyword-based autosuggest up to a full-page search-as-you-type experience with several ways to facet and filter. Today’s search experiences also often include powerful browsing and navigation capabilities.\nTo be on par with what we expect from Google or Amazon, the",
    record_index: 2,
    objectID: "media-sample-data-92",
    _snippetResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
      },
      content: {
        value:
          "… relational or NoSQL database-backed applications is the tighter level of coupling required between each layer of the stack …",
        matchLevel: "none",
      },
      record_index: {
        value: "2",
        matchLevel: "none",
      },
    },
    _highlightResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
        matchedWords: [],
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
        matchedWords: [],
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
        matchedWords: [],
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
        matchedWords: [],
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
        matchedWords: [],
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
          matchedWords: [],
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
        matchedWords: [],
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
        matchedWords: [],
      },
      content: {
        value:
          "… relational or NoSQL database-backed applications is the tighter level of coupling required between each layer of the stack. In traditional CRUD-based apps, the implementation details of the database’s storage engine have little bearing on the types of user experiences that can be built on top of it. This is not true in search—the feasibility of a particular user experience can come down to specific implementation details like whether the search engine uses Tries or not.\nThe iterative nature and tight level of coupling in search can be the source of numerous headaches for developers. Improving one SUPIR aspect can break several others, a frustrating event that feels more like retracing steps than moving forward. Some examples:\n\nA relevance improvement for one query makes all queries slower\nA relevance improvement for one query worsens relevance for others\nAt scale, heavy indexing loads begin to degrade search performance\nDegraded search performance requires implementing UX workarounds\n\nAs we head to the next sections and start to address the individual aspects of SUPIR, we’ll take care to point out what developers using Algolia or Elasticsearch need to do to avoid these pitfalls. First up, we’ll look at the “U” in SUPIR—user experience.\nCryptic error messages cause developers distress\n&nbsp;\nUser Experience\nIn search, it’s important to begin with the end in mind. What should happen when the user starts typing in that shiny new search box? The user interface (UI) and user experience (UX) will heavily affect the design of the other four SUPIR aspects, so it’s important to sketch it out early.\nDesign and best practices\nThere are many different types of search UX, ranging from a simple keyword-based autosuggest up to a full-page search-as-you-type experience with several ways to facet and filter. Today’s search experiences also often include powerful browsing and navigation capabilities.\nTo be on par with what we expect from Google or Amazon, the",
        matchLevel: "none",
        matchedWords: [],
      },
      record_index: {
        value: "2",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 392,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
  {
    post_id: 7020,
    post_title:
      "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
    post_date: 1510738771,
    post_date_formatted: "Nov 15th 2017",
    author_name: "Josh Dzielak",
    author_image_url:
      "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
    permalink:
      "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
    categories: ["Technology"],
    image:
      "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
    time_to_read: 11,
    content:
      "… Search series—End-to-end Latency—we saw that search performance requirements are more demanding than for other types of applications. In Part 2—Relevance Isn’t Luck—we dove deep and looked at how search engines accomplish the task of serving results that accurately match user intent, even when intent is scarce, flawed or unexpected.\nHere in Part 3, we’ll look at the high-level journey that developers take to build search, using an API like Algolia or an open source tool like Elasticsearch. We’ll also focus in one of the parts of the journey that’s important to consider early on—the crafting of the user experience.\nFive aspects of a “SUPIR” search\nNo matter what search technology a developer is using, there are five aspects that the developer must consider on the way from design to production. These are:\n\nScalability\nUser Experience\nPerformance\nIndexing\nRelevance\n\nRemember them easily as a typo-tolerant acronym - SUPIR.\nOrdering the steps this way makes a convenient acronym, but it is generally not the order that the developer proceeds in. Nor is the order linear. For example, indexing data is required before testing out any relevance or user experience, and is therefore a key step during an early prototyping phase. But indexing will also be revisited later, when additional signals become available for relevance or when scaling puts stricter demands on record size.\nWhat makes search DX different\nJust as the world that your users live in changes frequently, so must their search. Like performance tuning, relevance tuning is never “done”, it can only be “done for now”.\nThis is the first differentiator between building search and building other types of applications. Developers don’t visit each SUPIR aspect just once but on a progressive and recurring basis, roughing out and sharpening each one during design and build, and later maintaining and improving them as an ensemble in production.\nThe second differentiator between search and other",
    record_index: 1,
    objectID: "media-sample-data-91",
    _snippetResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
      },
      content: {
        value:
          "… Search series—End-to-end Latency—we saw that search performance requirements are more demanding than for other types …",
        matchLevel: "none",
      },
      record_index: {
        value: "1",
        matchLevel: "none",
      },
    },
    _highlightResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
        matchedWords: [],
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
        matchedWords: [],
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
        matchedWords: [],
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
        matchedWords: [],
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
        matchedWords: [],
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
          matchedWords: [],
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
        matchedWords: [],
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
        matchedWords: [],
      },
      content: {
        value:
          "… Search series—End-to-end Latency—we saw that search performance requirements are more demanding than for other types of applications. In Part 2—Relevance Isn’t Luck—we dove deep and looked at how search engines accomplish the task of serving results that accurately match user intent, even when intent is scarce, flawed or unexpected.\nHere in Part 3, we’ll look at the high-level journey that developers take to build search, using an API like Algolia or an open source tool like Elasticsearch. We’ll also focus in one of the parts of the journey that’s important to consider early on—the crafting of the user experience.\nFive aspects of a “SUPIR” search\nNo matter what search technology a developer is using, there are five aspects that the developer must consider on the way from design to production. These are:\n\nScalability\nUser Experience\nPerformance\nIndexing\nRelevance\n\nRemember them easily as a typo-tolerant acronym - SUPIR.\nOrdering the steps this way makes a convenient acronym, but it is generally not the order that the developer proceeds in. Nor is the order linear. For example, indexing data is required before testing out any relevance or user experience, and is therefore a key step during an early prototyping phase. But indexing will also be revisited later, when additional signals become available for relevance or when scaling puts stricter demands on record size.\nWhat makes search DX different\nJust as the world that your users live in changes frequently, so must their search. Like performance tuning, relevance tuning is never “done”, it can only be “done for now”.\nThis is the first differentiator between building search and building other types of applications. Developers don’t visit each SUPIR aspect just once but on a progressive and recurring basis, roughing out and sharpening each one during design and build, and later maintaining and improving them as an ensemble in production.\nThe second differentiator between search and other",
        matchLevel: "none",
        matchedWords: [],
      },
      record_index: {
        value: "1",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 391,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
  {
    post_id: 7020,
    post_title:
      "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
    post_date: 1510738771,
    post_date_formatted: "Nov 15th 2017",
    author_name: "Josh Dzielak",
    author_image_url:
      "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
    permalink:
      "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
    categories: ["Technology"],
    image:
      "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
    time_to_read: 11,
    content:
      "According to its 2017 State of the Octoverse report, Github now hosts more than 25 million active public repositories. Many of these projects are tools made by developers for developers, and being able to search through the masses and find exactly the right tool for the right problem has become a valuable skill of its own.\nCIOs, engineering directors and project managers don't only rely on developers for tool choice because of their technical expertise. They also understand that developer happiness equates to developer productivity—which with engineering salaries and talent shortages at a historic high—translates directly into higher quality products and lower total-cost-of-ownership for internal applications.\nDeveloper experience, it turns out, is good for business.\nTools with great developer experience are marked by intuitive design, up-to-date documentation, clear error messages, rock-solid stability and access to friendly support. Underpinning all of that, the tool must solve the problem the developer needs it to.\nDevelopers love fast test suites and code that’s easy to follow\nDeveloper Experience in search\nBoth Algolia and Elasticsearch have risen in popularity because they provide a better developer experience than the search platforms of the past.\nThough a critical feature of many applications, search remains a challenging problem for developers to solve. Moreover, building search as fast and relevant as Google and Amazon—companies that set the consumer’s expectation of what search should be—is a great deal harder than building the press-enter-and-wait search of the bygone Web 1.0 era.\nTo compete, engineering teams need to go faster than ever before, identifying and adopting tools that shorten the developer journey and enhance the developer experience at each stop along the way.\nIf developer journey is the “where”, developer experience is the “how smoothly”\n&nbsp;\nIn Part 1 of the Comparing Algolia and Elasticsearch for Consumer-Grade",
    record_index: 0,
    objectID: "media-sample-data-90",
    _snippetResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
      },
      content: {
        value:
          "According to its 2017 State of the Octoverse report, Github now hosts more than 25 million active public repositories. Many …",
        matchLevel: "none",
      },
      record_index: {
        value: "0",
        matchLevel: "none",
      },
    },
    _highlightResult: {
      post_id: {
        value: "7020",
        matchLevel: "none",
        matchedWords: [],
      },
      post_title: {
        value:
          "Comparing Algolia and Elasticsearch for Consumer-Grade Search Part 3: Developer Experience and UX",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date: {
        value: "1510738771",
        matchLevel: "none",
        matchedWords: [],
      },
      post_date_formatted: {
        value: "Nov 15th 2017",
        matchLevel: "none",
        matchedWords: [],
      },
      author_name: {
        value: "Josh Dzielak",
        matchLevel: "none",
        matchedWords: [],
      },
      author_image_url: {
        value:
          "https://secure.gravatar.com/avatar/52fce504cc701577cb6ca94528b977e6?s=40&d=mm&r=g",
        matchLevel: "none",
        matchedWords: [],
      },
      permalink: {
        value:
          "https://blog.algolia.com/algolia-vs-elasticsearch-developer-experience-ux/",
        matchLevel: "none",
        matchedWords: [],
      },
      categories: [
        {
          value: "Technology",
          matchLevel: "none",
          matchedWords: [],
        },
      ],
      image: {
        value:
          "https://blog.algolia.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-09-at-10.38.15-360x200.png",
        matchLevel: "none",
        matchedWords: [],
      },
      time_to_read: {
        value: "11",
        matchLevel: "none",
        matchedWords: [],
      },
      content: {
        value:
          "According to its 2017 State of the Octoverse report, Github now hosts more than 25 million active public repositories. Many of these projects are tools made by developers for developers, and being able to search through the masses and find exactly the right tool for the right problem has become a valuable skill of its own.\nCIOs, engineering directors and project managers don't only rely on developers for tool choice because of their technical expertise. They also understand that developer happiness equates to developer productivity—which with engineering salaries and talent shortages at a historic high—translates directly into higher quality products and lower total-cost-of-ownership for internal applications.\nDeveloper experience, it turns out, is good for business.\nTools with great developer experience are marked by intuitive design, up-to-date documentation, clear error messages, rock-solid stability and access to friendly support. Underpinning all of that, the tool must solve the problem the developer needs it to.\nDevelopers love fast test suites and code that’s easy to follow\nDeveloper Experience in search\nBoth Algolia and Elasticsearch have risen in popularity because they provide a better developer experience than the search platforms of the past.\nThough a critical feature of many applications, search remains a challenging problem for developers to solve. Moreover, building search as fast and relevant as Google and Amazon—companies that set the consumer’s expectation of what search should be—is a great deal harder than building the press-enter-and-wait search of the bygone Web 1.0 era.\nTo compete, engineering teams need to go faster than ever before, identifying and adopting tools that shorten the developer journey and enhance the developer experience at each stop along the way.\nIf developer journey is the “where”, developer experience is the “how smoothly”\n&nbsp;\nIn Part 1 of the Comparing Algolia and Elasticsearch for Consumer-Grade",
        matchLevel: "none",
        matchedWords: [],
      },
      record_index: {
        value: "0",
        matchLevel: "none",
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 390,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
];
