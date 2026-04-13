// ---------------- COMMENT POOL ----------------
const commentPool = [
  "you are the birthday 🎂",
  "this is giving main character energy",
  "big 'I understood the assignment' energy",
  "no thoughts, just vibes",
  "this is violently relatable",
  "I'm deceased 💀",
  "she ate and left no crumbs",
  "this is unhinged (in a good way)",
  "lowkey this is art",
  "rent-free in my head now",
  "this is a cultural reset",
  "this is chaos but make it aesthetic",
  "Iron rusts from disuse, stagnant water loses its purity and in cold weather becomes frozen; even so does inaction sap the vigor of the mind.",
  "Nothing is hidden beneath the sun.",
  "Obstacles cannot bend me. Every obstacle yields to effort.",
  "We make our life by the death of others.",
  "Necessity is the mistress and guardian of nature.",
  "One ought not to desire the impossible.",
  "He who neglects to punish evil sanctions the doing thereof.",
  "Darkness is the absence of light. Shadow is the diminution of light.",
  "He who does not value life does not deserve it.",
  "Simplicity is the ultimate sophistication.",
  "Nothing strengthens authority so much as silence.",
  "I fear this is too accurate.",
  "this unlocked a memory I didn't ask for",
  "live from my brain, it's absolute chaos",
  "this feels like a sketch that went off the rails",
  "why did I read this in a fake news voice",
  "this is giving 'Weekend Update energy'",
  "somebody get a producer in here",
  "I can hear the studio audience laughing already",
  "this should not have been this funny",
  "this is giving 'digital cold open' energy",
  "I feel like this needs a cue card",
  "this is one take away from disaster",
  "I know the writers were laughing while making this",
  "this belongs in a highlight reel",
  "this is giving 'we lost control of the sketch' energy",
  "someone please cut to commercial",
];

// ---------------- POSTS ----------------
const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    verified: true,
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 9084767,
    liked: false,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 90967,
    liked: false,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    verified: true,
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 1534552,
    liked: false,
  },
  {
    name: "Pablo Picasso",
    username: "picasso1881",
    verified: true,
    location: "Málaga, Spain",
    avatar: "images/avatar-picasso.png",
    post: "images/post-picasso.jpg",
    comment: "I painted it upside down first… then it made sense.",
    likes: 18907,
    liked: false,
  },
  {
    name: "Leonardo da Vinci",
    username: "davinci1452",
    verified: true,
    location: "Anchiano, Italy",
    avatar: "images/avatar-davinci.png",
    post: "images/post-davinci.png",
    comment: "I sketched 200 ideas today and still wasn't satisfied.",
    likes: 249083,
    liked: false,
  },
  {
    name: "Frida Kahlo",
    username: "fridakahlo1907",
    verified: true,
    location: "Coyoacán, Mexico",
    avatar: "images/avatar-frida.png",
    post: "images/post-frida.png",
    comment: "I paint my reality, even when it hurts a little.",
    likes: 310745,
    liked: false,
  },
];

// ---------------- LOCAL STORAGE (safe) ----------------
let commentsStore = {};
try {
  const stored = localStorage.getItem("commentsStore");
  if (stored) {
    commentsStore = JSON.parse(stored);
  }
} catch (e) {
  console.warn("Corrupted localStorage data, resetting.", e);
  localStorage.removeItem("commentsStore");
}

// ---------------- RANDOM USERNAME ----------------
function generateRandomUsername() {
  const firstNames = [
    "Chris Farley",
    "Beyoncé Knowles",
    "Sabrina Carpenter",
    "Kenan Thompson",
    "Kate McKinnon",
    "Bill Hader",
    "Aidy Bryant",
    "Adam Sandler",
    "Ryan Reynolds",
    "Emma Stone",
    "Scarlett Johansson",
    "John Mulaney",
    "Will Ferrell",
    "Amy Poehler",
    "Jason Sudeikis",
    "Tom Hanks",
    "Meryl Streep",
    "Leonardo DiCaprio",
    "Robert Downey Jr",
    "Jennifer Lawrence",
    "Brad Pitt",
    "Angelina Jolie",
    "Zendaya Coleman",
    "Timothée Chalamet",
    "Margot Robbie",
    "Chinua Achebe",
    "Wole Soyinka",
    "Naguib Mahfouz",
    "Ngugi wa Thiong'o",
    "Fela Kuti",
    "Angelique Kidjo",
    "Youssou N'Dour",
    "Salif Keita",
    "Miriam Makeba",
    "Oumou Sangaré",
    "Nelson Mandela",
    "Kwame Nkrumah",
    "Julius Nyerere",
    "Jomo Kenyatta",
    "Thomas Sankara",
    "Patrice Lumumba",
    "Samora Machel",
    "Haile Selassie",
    "Paul Kagame",
    "Didier Drogba",
    "Samuel Eto'o",
    "Yaya Touré",
    "Sadio Mané",
    "Mohamed Salah",
    "Riyad Mahrez",
    "Victor Osimhen",
    "Michael Essien",
    "Jay-Jay Okocha",
    "Asamoah Gyan",
    "Viola Davis",
    "Idris Elba",
    "Anya Taylor-Joy",
    "Florence Pugh",
    "Henry Cavill",
    "Gal Gadot",
    "Pedro Pascal",
    "Andrew Garfield",
    "Emma Watson",
    "Daniel Kaluuya",
    "Lupita Nyong'o",
    "Chadwick Boseman",
    "Lakeith Stanfield",
    "Zoe Saldaña",
    "Robert Pattinson",
    "Kristen Stewart",
    "Donald Glover",
    "Sydney Sweeney",
    "Jacob Elordi",
    "Billie Eilish",
    "Harry Styles",
    "Bad Bunny",
    "Doja Cat",
    "The Weeknd",
    "Lizzo",
    "Ariana Grande",
    "Kendrick Lamar",
    "Travis Scott",
    "Nicki Minaj",
  ];

  const lastNames = [
    "Clinton",
    "Spade",
    "Obama",
    "Stiller",
    "Carell",
    "Murphy",
    "De Niro",
    "DiCaprio",
    "Pitt",
    "Gosling",
    "Hanks",
    "Clooney",
    "Washington",
    "Downey",
    "Reeves",
    "Mandela",
    "Nkrumah",
    "Nyerere",
    "Kenyatta",
    "Sankara",
    "Lumumba",
    "Machel",
    "Selassie",
    "Kagame",
    "Jonathan",
    "Buhari",
    "Ramaphosa",
    "Sisi",
    "Achebe",
    "Soyinka",
    "Mahfouz",
    "Kuti",
    "Kidjo",
    "Drogba",
    "Touré",
    "Mané",
    "Salah",
    "Hawkins",
    "Fletcher",
    "Bennett",
    "Reynolds",
    "Campbell",
    "Brooks",
    "Ellis",
    "Griffin",
    "Hayes",
    "Foster",
    "Ramirez",
    "Cook",
    "Bailey",
    "Cooper",
    "Richardson",
    "Long",
    "Bell",
    "Wood",
    "Sanders",
    "Price",
    "Ross",
    "Morgan",
    "Bellamy",
    "Hughes",
    "Porter",
    "Gray",
    "Reed",
    "Stone",
  ];

  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomNumber = Math.floor(Math.random() * 90) + 10;

  return `${first.replaceAll(" ", "").toLowerCase()}_${last.toLowerCase()}${randomNumber}`;
}

// ---------------- RANDOM COMMENTS ----------------
function getRandomComments() {
  const shuffled = [...commentPool].sort(() => 0.5 - Math.random());
  const count = Math.floor(Math.random() * 4) + 2;

  return shuffled.slice(0, count).map((text) => ({
    user: generateRandomUsername(),
    text: text,
    time: Date.now() - Math.floor(Math.random() * 1000000),
    liked: false,
  }));
}

// ---------------- INIT COMMENTS ----------------
function initComments() {
  for (let post of posts) {
    if (!commentsStore[post.username]) {
      commentsStore[post.username] = getRandomComments();
    }
  }

  try {
    localStorage.setItem("commentsStore", JSON.stringify(commentsStore));
  } catch (e) {
    console.warn("Could not save to localStorage.", e);
  }
}

initComments();

// ---------------- FEED ----------------
const feed = document.getElementById("feed");

if (!feed) {
  console.error(
    "Feed element not found. Make sure you have <div id='feed'></div> in your HTML.",
  );
}

// ---------------- NEW TO YOU FILTER ----------------
let showOnlyNew = false;

function toggleNewFilter() {
  showOnlyNew = !showOnlyNew;
  renderPosts();

  const filterBtn = document.getElementById("new-filter-btn");
  if (filterBtn) {
    filterBtn.textContent = showOnlyNew ? "✨ Showing New" : "✨ New to You";
    filterBtn.style.background = showOnlyNew
      ? "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)"
      : "#EFEFEF";
    filterBtn.style.color = showOnlyNew ? "white" : "#262626";
  }
}

// ---------------- SENTIMENT ANALYSIS ----------------
function analyzeSentiment(text) {
  const positive = [
    "love",
    "great",
    "amazing",
    "beautiful",
    "awesome",
    "perfect",
    "best",
    "wonderful",
    "fantastic",
    "art",
    "energy",
    "vibes",
  ];
  const negative = [
    "hate",
    "bad",
    "terrible",
    "awful",
    "worst",
    "boring",
    "ugly",
    "chaos",
    "unhinged",
    "deceased",
  ];

  const lowerText = text.toLowerCase();
  let score = 0;

  positive.forEach((word) => {
    if (lowerText.includes(word)) score++;
  });
  negative.forEach((word) => {
    if (lowerText.includes(word)) score--;
  });

  if (score > 0) return { sentiment: "😊 Positive", color: "#00C853" };
  if (score < 0) return { sentiment: "😐 Mixed", color: "#FF6D00" };
  return { sentiment: "😌 Neutral", color: "#757575" };
}

// ---------------- TIME AGO ----------------
function timeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);

  if (seconds < 60) return "just now";
  if (seconds < 3600) return Math.floor(seconds / 60) + " min ago";
  if (seconds < 86400) return Math.floor(seconds / 3600) + " hr ago";
  return Math.floor(seconds / 86400) + " days ago";
}

// ---------------- RENDER POSTS ----------------
function renderPosts() {
  if (!feed) return;

  feed.innerHTML = "";

  // Filter button
  feed.innerHTML = `
        <div style="background: white; padding: 12px 16px; border-bottom: 1px solid #DBDBDB; text-align: center;">
            <button 
                id="new-filter-btn"
                onclick="toggleNewFilter()"
                style="padding: 8px 20px; border-radius: 8px; border: none; font-weight: 600; font-size: 14px; cursor: pointer; background: ${showOnlyNew ? "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)" : "#EFEFEF"}; color: ${showOnlyNew ? "white" : "#262626"};"
            >
                ${showOnlyNew ? "✨ Showing New" : "✨ New to You"}
            </button>
        </div>
    `;

  const postsToShow = showOnlyNew ? posts.filter((p) => !p.liked) : posts;

  if (postsToShow.length === 0 && showOnlyNew) {
    feed.innerHTML += `
            <div style="text-align: center; padding: 40px 20px; color: #8E8E8E;">
                <p style="font-size: 24px; margin-bottom: 8px;">🎉</p>
                <p style="font-size: 16px; font-weight: 600;">You've seen everything!</p>
                <p style="font-size: 14px;">Check back later for new content</p>
            </div>
        `;
    return;
  }

  for (let post of postsToShow) {
    const heartIcon = post.liked
      ? "images/icon-heart-filled.png"
      : "images/icon-heart.png";

    const comments = commentsStore[post.username] || [];
    const sentiment = analyzeSentiment(comments.map((c) => c.text).join(" "));

    const postHTML = `
            <section class="post">
                <div class="post-header">
                    <img src="${post.avatar}" class="avatar">
                    <div>
                        <p class="name">
                            ${post.name}
                            ${post.verified ? '<span class="verified">✔</span>' : ""}
                        </p>
                        <p class="location">${post.location}</p>
                    </div>
                </div>

                <img 
                    src="${post.post}" 
                    class="post-img"
                    onclick="createHeartAnimation(event, '${post.username}')"
                >

                <div class="post-footer">
                    <div class="icons">
                        <img 
                            src="${heartIcon}" 
                            class="icon ${post.liked ? "liked" : ""}"
                            onclick="toggleLike('${post.username}')"
                        >
                        <img 
                            src="images/icon-comment.png" 
                            class="icon"
                            onclick="focusComment('${post.username}')"
                        >
                        <img 
                            src="images/icon-dm.png" 
                            class="icon"
                            onclick="sharePost('${post.username}')"
                        >
                        <span style="margin-left: auto; cursor: pointer; font-size: 20px;" onclick="showAnalytics('${post.username}')" title="View Analytics">📊</span>
                    </div>

                    <p class="likes">${post.likes} likes</p>

                    ${
                      comments.length > 0
                        ? `
                        <p style="font-size: 12px; color: ${sentiment.color}; margin-bottom: 8px;">
                            ${sentiment.sentiment} vibes
                        </p>
                    `
                        : ""
                    }

                    <p class="caption">
                        <strong>${post.username}</strong> ${post.comment}
                    </p>

                    <div class="comment-box">
                        <input 
                            type="text" 
                            placeholder="Add a comment..."
                            id="comment-${post.username}"
                            onkeypress="handleEnter(event, '${post.username}')"
                        >
                        <button onclick="addComment('${post.username}')">Post</button>
                    </div>

                    <div class="comments">
                        ${comments
                          .map(
                            (c, index) => `
                            <p class="comment">
                                <span>
                                    <strong>${c.user}</strong> ${c.text}
                                    <span class="time">• ${timeAgo(c.time)}</span>
                                </span>
                                <span 
                                    class="comment-like"
                                    onclick="toggleCommentLike('${post.username}', ${index})"
                                >
                                    ${c.liked ? "❤️" : "🤍"}
                                </span>
                            </p>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </section>
        `;

    feed.innerHTML += postHTML;
  }
}

// ---------------- LIKE POST ----------------
function toggleLike(username) {
  for (let post of posts) {
    if (post.username === username) {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
    }
  }
  renderPosts();
}

// ---------------- ADD COMMENT ----------------
function addComment(username) {
  const input = document.getElementById(`comment-${username}`);
  if (!input) return;

  const commentText = input.value.trim();
  if (commentText === "") return;

  const comment = {
    user: generateRandomUsername(),
    text: commentText,
    time: Date.now(),
    liked: false,
  };

  if (!commentsStore[username]) {
    commentsStore[username] = [];
  }

  commentsStore[username].push(comment);

  try {
    localStorage.setItem("commentsStore", JSON.stringify(commentsStore));
  } catch (e) {
    console.warn("Could not save comment to localStorage.", e);
  }

  input.value = "";
  renderPosts();
}

// ---------------- COMMENT LIKE ----------------
function toggleCommentLike(username, index) {
  const comments = commentsStore[username];
  if (!comments || !comments[index]) return;

  comments[index].liked = !comments[index].liked;

  try {
    localStorage.setItem("commentsStore", JSON.stringify(commentsStore));
  } catch (e) {
    console.warn("Could not save like to localStorage.", e);
  }

  renderPosts();
}

// ---------------- FOCUS COMMENT ----------------
function focusComment(username) {
  const input = document.getElementById(`comment-${username}`);
  if (input) {
    input.scrollIntoView({ behavior: "smooth", block: "center" });
    input.focus();
  }
}

// ---------------- SHARE POST ----------------
function sharePost(username) {
  const text = `Check out ${username}'s post!`;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Post link copied to clipboard 📋");
    })
    .catch(() => {
      alert("Could not copy to clipboard.");
    });
}

// ---------------- ENTER KEY SUPPORT ----------------
function handleEnter(event, username) {
  if (event.key === "Enter") {
    addComment(username);
  }
}

// ---------------- DOUBLE TAP HEART ANIMATION ----------------
let lastTap = 0;

function createHeartAnimation(event, username) {
  const currentTime = Date.now();
  const tapLength = currentTime - lastTap;

  if (tapLength < 300 && tapLength > 0) {
    // Double tap detected!
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.fontSize = "80px";
    heart.style.left = event.clientX - 40 + "px";
    heart.style.top = event.clientY - 40 + "px";
    heart.style.zIndex = "1000";
    heart.style.pointerEvents = "none";
    heart.style.animation = "heartPop 0.6s ease-out forwards";

    if (!document.getElementById("heart-animation-style")) {
      const style = document.createElement("style");
      style.id = "heart-animation-style";
      style.textContent = `
                @keyframes heartPop {
                    0%   { transform: scale(0); opacity: 1; }
                    50%  { transform: scale(1.2); opacity: 1; }
                    100% { transform: scale(0); opacity: 0; }
                }
            `;
      document.head.appendChild(style);
    }

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 600);

    // Like the post on double tap
    toggleLike(username);
  }

  lastTap = currentTime;
}

// ---------------- POST ANALYTICS ----------------
function showAnalytics(username) {
  const post = posts.find((p) => p.username === username);
  if (!post) return;

  const comments = commentsStore[username] || [];
  const sentiments = comments.map((c) => analyzeSentiment(c.text));

  const positiveCount = sentiments.filter((s) =>
    s.sentiment.includes("Positive"),
  ).length;
  const mixedCount = sentiments.filter((s) =>
    s.sentiment.includes("Mixed"),
  ).length;
  const neutralCount = sentiments.filter((s) =>
    s.sentiment.includes("Neutral"),
  ).length;

  const engagement = ((post.likes + comments.length) / 2).toFixed(1);

  alert(
    `📊 Analytics for ${post.name}'s post\n\n` +
      `❤️ Likes: ${post.likes}\n` +
      `💬 Comments: ${comments.length}\n` +
      `📈 Engagement Score: ${engagement}\n\n` +
      `Sentiment Breakdown:\n` +
      `😊 Positive: ${positiveCount}\n` +
      `😐 Mixed: ${mixedCount}\n` +
      `😌 Neutral: ${neutralCount}`,
  );
}

// ---------------- INITIAL RENDER ----------------
renderPosts();

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
  { name: "vincey1853", avatar: "images/avatar-vangogh.jpg" },
  { name: "gus1819", avatar: "images/avatar-courbet.jpg" },
  { name: "jd1735", avatar: "images/avatar-ducreux.jpg" },
  { name: "picasso1881", avatar: "images/avatar-picasso.png" },
  { name: "davinci1452", avatar: "images/avatar-davinci.png" },
  { name: "fridakahlo1907", avatar: "images/avatar-frida.png" },
];

// Track which stories have been viewed this session
const viewedStories = new Set(
  JSON.parse(sessionStorage.getItem("viewedStories") || "[]"),
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

// Inside renderStories()

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

function showNotification() {
  if (typeof generateRandomUsername !== "function") return;

  const isDark = localStorage.getItem("darkMode") === "true"; // Check current mode
  const randomUser = generateRandomUsername();
  const msgFn =
    notificationMessages[
      Math.floor(Math.random() * notificationMessages.length)
    ];

  const notif = document.createElement("div");
  notif.textContent = msgFn(randomUser);

  notif.style.cssText = `
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    background: ${isDark ? "#262626" : "white"}; /* Dark grey if dark mode */
    color: ${isDark ? "white" : "black"};         /* White text if dark mode */
    padding: 10px 16px;
    border-radius: 10px;
    border: 1px solid ${isDark ? "#363636" : "#DBDBDB"};
    z-index: 9000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  `;

  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

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
