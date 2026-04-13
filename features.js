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

  storyUsers.forEach((user) => {
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

    ring.style.cssText = `
            width: 56px;
            height: 56px;
            border-radius: 50%;
            padding: 2px;
            background: ${
              viewed
                ? "#DBDBDB"
                : "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)"
            };
            display: flex;
            align-items: center;
            justify-content: center;
        `;

    const img = document.createElement("img");
    img.src = user.avatar;
    img.style.cssText = `
            width: 48px;
            height: 48px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid white;
        `;

    const label = document.createElement("p");

    label.textContent = user.name.slice(0, 10);
    label.style.cssText = `
            font-size: 11px;
            color: ${viewed ? "#8E8E8E" : "#262626"};
            max-width: 60px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
        `;

    ring.appendChild(img);
    item.appendChild(ring);
    item.appendChild(label);

    item.onclick = () => viewStory(user);

    bar.appendChild(item);
  });

  // Insert stories bar right below the header
  const header = document.querySelector("header.hero");
  if (header && header.nextSibling) {
    header.parentNode.insertBefore(bar, header.nextSibling);
  } else {
    document.body.prepend(bar);
  }
}
  
function viewStory(user) {
  // Mark as viewed
  viewedStories.add(user.name);
  sessionStorage.setItem("viewedStories", JSON.stringify([...viewedStories]));

  // Create fullscreen overlay
  const overlay = document.createElement("div");
  overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: black;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

  // Progress bar
  const progress = document.createElement("div");
  progress.style.cssText = `
        position: absolute;
        top: 12px;
        left: 16px;
        right: 16px;
        height: 3px;
        background: rgba(255,255,255,0.3);
        border-radius: 3px;
        overflow: hidden;
    `;
  const progressFill = document.createElement("div");
  progressFill.style.cssText = `
        height: 100%;
        width: 0%;
        background: white;
        border-radius: 3px;
        transition: width 3s linear;
    `;
  progress.appendChild(progressFill);

  // User info row
  const userRow = document.createElement("div");
  userRow.style.cssText = `
        position: absolute;
        top: 28px;
        left: 16px;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
  userRow.innerHTML = `
        <img src="${user.avatar}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid white;">
        <span style="color:white;font-weight:600;font-size:14px;">${user.name}</span>
        <span style="color:rgba(255,255,255,0.7);font-size:12px;">Just now</span>
    `;

  // Post image as "story"
  const img = document.createElement("img");
  const postData = posts.find((p) => p.username === user.name);
  img.src = postData ? postData.post : user.avatar;
  img.style.cssText = `
        max-width: 100%;
        max-height: 100vh;
        object-fit: contain;
    `;

  // Close button
  const closeBtn = document.createElement("span");
  closeBtn.textContent = "✕";
  closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        color: white;
        font-size: 22px;
        cursor: pointer;
        z-index: 10000;
    `;
  closeBtn.onclick = () => {
    overlay.remove();
    renderStories(); // refresh ring colours
  };

  overlay.appendChild(progress);
  overlay.appendChild(userRow);
  overlay.appendChild(img);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  // Animate progress bar and auto-close after 3s
  requestAnimationFrame(() => {
    progressFill.style.width = "100%";
  });
  setTimeout(() => {
    overlay.remove();
    renderStories();
  }, 3000);
}

// Kick off stories bar
renderStories();
 
// ============================================================
//  3. RANDOM NOTIFICATION POPUPS
// ============================================================
const notificationMessages = [
    (user) => `${user} liked your post ❤️`,
    (user) => `${user} started following you`,
    (user) => `${user} commented on your photo 💬`,
    (user) => `${user} mentioned you in a comment`,
    (user) => `${user} sent you a DM 📩`,
    (user) => `${user} liked your comment`,
    (user) => `${user} and 3 others liked your post`,
    (user) => `${user} tagged you in a photo 🏷️`,
];
 
function showNotification() {
  const randomUser = generateRandomUsername();
  const msgFn =
    notificationMessages[
      Math.floor(Math.random() * notificationMessages.length)
    ];
  const message = msgFn(randomUser);

  const notif = document.createElement("div");
  notif.style.cssText = `
        position: fixed;
        top: 70px;
        left: 50%;
        transform: translateX(-50%) translateY(-20px);
        background: white;
        border: 1px solid #DBDBDB;
        border-radius: 12px;
        padding: 12px 16px;
        font-size: 13px;
        color: #262626;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 9000;
        max-width: 320px;
        width: 90%;
        display: flex;
        align-items: center;
        gap: 10px;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        cursor: pointer;
    `;

  notif.innerHTML = `
        <span style="font-size:20px;">🔔</span>
        <span>${message}</span>
    `;

  notif.onclick = () => dismissNotif(notif);

  document.body.appendChild(notif);

  // Animate in
  requestAnimationFrame(() => {
    notif.style.opacity = "1";
    notif.style.transform = "translateX(-50%) translateY(0)";
  });

  // Auto dismiss after 3.5s
  setTimeout(() => dismissNotif(notif), 3500);
}

function dismissNotif(notif) {
  notif.style.opacity = "0";
  notif.style.transform = "translateX(-50%) translateY(-20px)";
  setTimeout(() => notif.remove(), 300);
}

// Show a notification between 5–12 seconds randomly, then keep repeating
function scheduleNextNotification() {
    const delay = Math.floor(Math.random() * 7000) + 5000; // 5–12 seconds
    setTimeout(() => {
        showNotification();
        scheduleNextNotification();
    }, delay);
}
 
scheduleNextNotification();
 
 
// ============================================================
//  4. DARK MODE TOGGLE
// ============================================================
const darkStyles = `
    body                    { background-color: #000 !important; color: #FAFAFA !important; }
    .hero                   { background: #000 !important; border-color: #262626 !important; }
    .post                   { background: #1C1C1C !important; border-color: #262626 !important; }
    .post-header .name      { color: #FAFAFA !important; }
    .likes, .caption        { color: #FAFAFA !important; }
    .comment                { color: #FAFAFA !important; }
    .comment-box            { border-color: #333 !important; }
    .comment-box input      { color: #FAFAFA !important; background: transparent !important; }
    .comment-box input::placeholder { color: #737373 !important; }
    #stories-bar            { background: #000 !important; border-color: #262626 !important; }
    #dark-toggle            { background: #1C1C1C !important; border-color: #444 !important; color: #FAFAFA !important; }
    div[style*="background: white"]  { background: #1C1C1C !important; }
`;

let darkStyleEl = null;
let darkMode = localStorage.getItem("darkMode") === "true";
 
function applyDarkMode() {
    if (darkMode) {
        if (!darkStyleEl) {
            darkStyleEl = document.createElement("style");
            darkStyleEl.id = "dark-mode-styles";
            darkStyleEl.textContent = darkStyles;
            document.head.appendChild(darkStyleEl);
        }
    } else {
        if (darkStyleEl) {
            darkStyleEl.remove();
            darkStyleEl = null;
        }
    }
    const btn = document.getElementById("dark-toggle");
    if (btn) btn.textContent = darkMode ? "☀️" : "🌙";
}
 
function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem("darkMode", darkMode);
    applyDarkMode();
}
 
// Inject the toggle button into the header
function injectDarkModeButton() {
    const container = document.querySelector(".hero .container");
    if (!container) return;
 
    container.style.display = "flex";
    container.style.justifyContent = "space-between";
    container.style.alignItems = "center";
 
    const btn = document.createElement("button");
    btn.id = "dark-toggle";
    btn.textContent = darkMode ? "☀️" : "🌙";
    btn.title = "Toggle dark mode";
    btn.onclick = toggleDarkMode;
    btn.style.cssText = `
        background: #EFEFEF;
        border: 1px solid #DBDBDB;
        border-radius: 8px;
        width: 36px;
        height: 36px;
        font-size: 18px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s ease;
    `;
 
    container.appendChild(btn);
}
 
injectDarkModeButton();
applyDarkMode(); // Apply on load if dark mode was previously saved
