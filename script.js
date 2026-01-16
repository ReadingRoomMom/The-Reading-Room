// -------------------------
// 1. Club Names & Links
// -------------------------
const clubs = [
    {
        name: "The Cozy Corner",
        books: ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"],
        notesLink: "https://docs.google.com/document/YOUR_DOC_LINK",
        chatLink: "https://discord.gg/YOUR_CHAT_LINK"
    },
    {
        name: "Leaf & Lore",
        books: ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"],
        notesLink: "https://docs.google.com/document/YOUR_DOC_LINK",
        chatLink: "https://discord.gg/YOUR_CHAT_LINK"
    },
    {
        name: "The Story Nook",
        books: ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"],
        notesLink: "https://docs.google.com/document/YOUR_DOC_LINK",
        chatLink: "https://discord.gg/YOUR_CHAT_LINK"
    },
    {
        name: "The Page & Quill",
        books: ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"],
        notesLink: "https://docs.google.com/document/YOUR_DOC_LINK",
        chatLink: "https://discord.gg/YOUR_CHAT_LINK"
    },
    {
        name: "The Enchanted Parlor",
        books: ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"],
        notesLink: "https://docs.google.com/document/YOUR_DOC_LINK",
        chatLink: "https://discord.gg/YOUR_CHAT_LINK"
    }
];

// -------------------------
// 2. Populate Homepage Club List
// -------------------------
const clubList = document.getElementById("club-list");

if (clubList) { // only run on homepage
    clubs.forEach((club, index) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = `club.html?club=${index}`;
        link.textContent = club.name;
        li.appendChild(link);
        clubList.appendChild(li);
    });
}

// -------------------------
// 3. Populate Club Page
// -------------------------
const clubNameElement = document.getElementById("club-name");

if (clubNameElement) { // only run on club.html
    const urlParams = new URLSearchParams(window.location.search);
    const clubIndex = urlParams.get('club');
    const club = clubs[clubIndex] || clubs[0];

    // Set club name
    clubNameElement.textContent = club.name;
    document.title = `${club.name} - The Reading Room`;

    // Book recommendations
    const bookListElement = document.getElementById("book-list");
    if (bookListElement) {
        club.books.forEach(book => {
            const li = document.createElement("li");
            li.textContent = book;
            bookListElement.appendChild(li);
        });
    }

    // Notes link
    const notesLinkElement = document.getElementById("notes-link");
    if (notesLinkElement) {
        notesLinkElement.href = club.notesLink;
    }

    // Chat link
    const chatLinkElement = document.getElementById("chat-link");
    if (chatLinkElement) {
        chatLinkElement.href = club.chatLink;
    }
}
