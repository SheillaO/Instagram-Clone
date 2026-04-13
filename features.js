// ================================================================
//  features.js  —  drop-in additions for your Instagram clone
//  Just add <script src="features.js"></script> AFTER index.js
// ================================================================

// ============================================================
//  1. RANDOMIZE POSTS ORDER ON EVERY RELOAD
// ============================================================

(function shufflePostsOnLoad() {
  // Fisher-Yates shuffle — true random every time
  for (let i = posts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [posts[i], posts[j]] = [posts[j], posts[i]];
  }
  // Re-render with the new order
  renderPosts();
})();

// ============================================================
//  2. STORIES BAR
// ============================================================
const storyUsers = [
    { name: "vincey1853",     avatar: "images/avatar-vangogh.jpg"  },
    { name: "gus1819",        avatar: "images/avatar-courbet.jpg"  },
    { name: "jd1735",         avatar: "images/avatar-ducreux.jpg"  },
    { name: "picasso1881",    avatar: "images/avatar-picasso.png"  },
    { name: "davinci1452",    avatar: "images/avatar-davinci.png"  },
    { name: "fridakahlo1907", avatar: "images/avatar-frida.png"    },
];

// Track which stories have been viewed this session
const viewedStories = new Set(
    JSON.parse(sessionStorage.getItem("viewedStories") || "[]")
);
 
function renderStories() {
    // Remove any existing stories bar first
    const existing = document.getElementById("stories-bar");
    if (existing) existing.remove();
 
    const bar = document.createElement("div");
    bar.id = "stories-bar";
    bar.style.cssText = `
        background: white;
        border-bottom: 1px solid #DBDBDB;
        padding: 12px 0;
        display: flex;
        gap: 16px;
        overflow-x: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        padding-left: 16px;
        padding-right: 16px;
    `;
    // Hide scrollbar for webkit
    const scrollStyle = document.createElement("style");
    scrollStyle.textContent = `#stories-bar::-webkit-scrollbar { display: none; }`;
    document.head.appendChild(scrollStyle);
 
    storyUsers.forEach(user => {
        const viewed = viewedStories.has(user.name);
 
        const item = document.createElement("div");
        item.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            cursor: pointer;
            flex-shrink: 0;
        `;
 
        const ring = document.createElement("div");