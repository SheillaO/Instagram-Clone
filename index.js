/
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        verified: true,
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    },
    
    {
    name: "Pablo Picasso",
    username: "picasso1881",
    verified: true,
    location: "Málaga, Spain",
    avatar: "images/avatar-picasso.png",
    post: "images/post-picasso.jpg",
    comment: "I painted it upside down first… then it made sense.",
    likes: 187,
    liked: false
},
{
    name: "Leonardo da Vinci",
    username: "davinci1452",
    verified: true,
    location: "Anchiano, Italy",
    avatar: "images/avatar-davinci.png",
    post: "images/post-davinci.png",
    comment: "I sketched 200 ideas today and still wasn’t satisfied.",
    likes: 243,
    liked: false
},
{
    name: "Frida Kahlo",
    username: "fridakahlo1907",
    verified: true,
    location: "Coyoacán, Mexico",
    avatar: "images/avatar-frida.png",
    post: "images/post-frida.png",
    comment: "I paint my reality, even when it hurts a little.",
    likes: 310,
    liked: false
}
    
];


// ---------------- LOCAL STORAGE ----------------
// ---------------- LOCAL STORAGE ----------------
let commentsStore = JSON.parse(localStorage.getItem("commentsStore")) || {};


// ---------------- INIT COMMENTS (FRESH + PERSISTED MIX) ----------------
function initComments() {

    const newStore = {};

    for (let post of posts) {

        newStore[post.username] = [
            // fresh random comments every refresh
            ...getRandomComments(),

            // keep user-added comments if they exist
            ...(commentsStore[post.username] || [])
        ];
    }

    commentsStore = newStore;

    localStorage.setItem("commentsStore", JSON.stringify(commentsStore));
}


// run once on load
initComments();


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
"Margot Robbie"
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
        "Reeves"
    ];

    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomNumber = Math.floor(Math.random() * 900)+ 10;

    const cleanFirst = first.split(" ").join("").toLowerCase();
const cleanLast = last.toLowerCase();

return `${cleanFirst}_${cleanLast}${randomNumber}`;
}


// ---------------- RANDOM COMMENTS ----------------
function getRandomComments() {

    const shuffled = [...commentPool].sort(() => 0.5 - Math.random());

    const count = Math.floor(Math.random() * 4) + 2;

    return shuffled.slice(0, count).map(text => ({
        user: generateRandomUsername(),
        text: text,
        time: Date.now() - Math.floor(Math.random() * 1000000),
        liked: false
    }));
}



// ---------------- SAVE INIT ----------------
localStorage.setItem("commentsStore", JSON.stringify(commentsStore));


// ---------------- FEED ----------------
const feed = document.getElementById("feed");


// ---------------- RENDER POSTS ----------------
function renderPosts() {

    feed.innerHTML = "";

    for (let post of posts) {

        const heartIcon = post.liked
            ? "images/icon-heart-filled.png"
            : "images/icon-heart.png";

        const comments = commentsStore[post.username] || [];

        const postHTML = `
            <section class="post">

                <!-- HEADER -->
                <div class="post-header">
                    <img src="${post.avatar}" class="avatar">
                    <div>
                        <p class="name">
                            ${post.name}
                            ${post.verified ? '<span class="verified">✔</span>' : ''}
                        </p>
                        <p class="location">${post.location}</p>
                    </div>
                </div>

                <!-- IMAGE -->
                <img 
                    src="${post.post}" 
                    class="post-img"
                    ondblclick="toggleLike('${post.username}')"
                >

                <!-- FOOTER -->
                <div class="post-footer">

                    <div class="icons">

                        <img 
                            src="${heartIcon}" 
                            class="icon ${post.liked ? 'liked' : ''}"
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

                    </div>

                    <p class="likes">${post.likes} likes</p>

                    <p class="caption">
                        <strong>${post.username}</strong> ${post.comment}
                    </p>

                    <!-- COMMENT INPUT -->
                    <div class="comment-box">
                        <input 
                            type="text" 
                            placeholder="Add a comment..."
                            id="comment-${post.username}"
                            onkeypress="handleEnter(event, '${post.username}')"
                        >
                        <button onclick="addComment('${post.username}')">Post</button>
                    </div>

                    <!-- COMMENTS -->
                    <div class="comments">
                        ${comments.map((c, index) => `
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
                        `).join("")}
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
    const commentText = input.value;

    if (commentText.trim() === "") return;

    const comment = {
        user: generateRandomUsername(),
        text: commentText,
        time: Date.now(),
        liked: false
    };

    if (!commentsStore[username]) {
        commentsStore[username] = [];
    }

    commentsStore[username].push(comment);

    localStorage.setItem("commentsStore", JSON.stringify(commentsStore));

    input.value = "";

    renderPosts();
}


// ---------------- COMMENT LIKE ----------------
function toggleCommentLike(username, index) {

    const comments = commentsStore[username];

    if (!comments || !comments[index]) return;

    comments[index].liked = !comments[index].liked;

    localStorage.setItem("commentsStore", JSON.stringify(commentsStore));

    renderPosts();
}


// ---------------- TIME AGO ----------------
function timeAgo(timestamp) {

    const seconds = Math.floor((Date.now() - timestamp) / 1000);

    if (seconds < 60) return "just now";
    if (seconds < 3600) return Math.floor(seconds / 60) + " min ago";
    if (seconds < 86400) return Math.floor(seconds / 3600) + " hr ago";

    return Math.floor(seconds / 86400) + " days ago";
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

    navigator.clipboard.writeText(text);

    alert("Post copied to clipboard 📋");
}


// ---------------- ENTER KEY SUPPORT ----------------
function handleEnter(event, username) {

    if (event.key === "Enter") {
        addComment(username);
    }
}


// ---------------- INITIAL RENDER ----------------
renderPosts();