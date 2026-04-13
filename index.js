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
    likes: 21,
    liked: false,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
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
    likes: 152,
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
    likes: 187,
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
    likes: 243,
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
    likes: 310,
    liked: false,
  },
];

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

    return shuffled.slice(0, count).map(text => ({
        user: generateRandomUsername(),
        text: text,
        time: Date.now() - Math.floor(Math.random() * 1000000),
        liked: false
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
    console.error("Feed element not found. Make sure you have <div id='feed'></div> in your HTML.");
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
    const positive = ["love", "great", "amazing", "beautiful", "awesome", "perfect", "best", "wonderful", "fantastic", "art", "energy", "vibes"];
    const negative = ["hate", "bad", "terrible", "awful", "worst", "boring", "ugly", "chaos", "unhinged", "deceased"];

    const lowerText = text.toLowerCase();
    let score = 0;

    positive.forEach(word => { if (lowerText.includes(word)) score++; });
    negative.forEach(word => { if (lowerText.includes(word)) score--; });

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
                style="padding: 8px 20px; border-radius: 8px; border: none; font-weight: 600; font-size: 14px; cursor: pointer; background: ${showOnlyNew ? 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)' : '#EFEFEF'}; color: ${showOnlyNew ? 'white' : '#262626'};"
            >
                ${showOnlyNew ? "✨ Showing New" : "✨ New to You"}
            </button>
        </div>
    `;
     const postsToShow = showOnlyNew ? posts.filter(p => !p.liked) : posts;

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
        const sentiment = analyzeSentiment(comments.map(c => c.text).join(" "));

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

                
