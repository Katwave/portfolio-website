const blog_search_regx = {
    search: [/learn web development/i,
         /css grid/i, 
         /fear of Rejection/i,
        ],
    s_result: [
      {
        title: "Where to learn web development?",
        description: "Places and resources available to learn web development",
        createdAt: "03 0ctober 2020",
        url: "/blog/Where-to-learn-web-development?",
      },
      {
        title: "Learn CSS GRID Layout",
        description: "Learn how to make your websites responsive with CSS GRID",
        createdAt: "03 0ctober 2020",
        url: "/blog/Learn-CSS-GRID-Layout",
      },
      {
        title: "Overcome fear of Rejection",
        description: "Learn how to overcome your fear of rejection",
        createdAt: "03 0ctober 2020",
        url: "/blog/Overcome-fear-of-Rejection",
      },
    ],
    no_result_found: [
      {
        title: "No Results Found!",
        description: "",
        createdAt: "",
      },
    ],
  };

  module.exports = blog_search_regx;