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