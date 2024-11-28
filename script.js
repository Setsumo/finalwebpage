// Light/Dark Mode Toggle
const toggleThemeButton = document.createElement("button");
toggleThemeButton.textContent = "Switch to Dark Mode"; // Default button text
toggleThemeButton.style.position = "fixed";
toggleThemeButton.style.top = "10px";
toggleThemeButton.style.right = "10px";
toggleThemeButton.style.padding = "10px";
toggleThemeButton.style.backgroundColor = "#ff4c4c"; // Red button
toggleThemeButton.style.color = "#fff";
toggleThemeButton.style.border = "none";
toggleThemeButton.style.borderRadius = "4px";
toggleThemeButton.style.cursor = "pointer";
document.body.appendChild(toggleThemeButton);

// Ensure the website starts in light mode
let isDarkMode = false; // Light mode is the default
document.body.style.backgroundColor = "#ffffff"; // Set background color for light mode
document.body.style.color = "#000000"; // Set text color for light mode

// Event Listener for Theme Toggle
toggleThemeButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode; // Toggle the mode
    if (isDarkMode) {
        document.body.style.backgroundColor = "#121212"; // Dark mode background
        document.body.style.color = "#ffffff"; // Dark mode text
        toggleThemeButton.textContent = "Switch to Light Mode"; // Update button text
        toggleThemeButton.style.backgroundColor = "#e03e3e"; // Darker red for dark mode
    } else {
        document.body.style.backgroundColor = "#ffffff"; // Light mode background
        document.body.style.color = "#000000"; // Light mode text
        toggleThemeButton.textContent = "Switch to Dark Mode"; // Update button text
        toggleThemeButton.style.backgroundColor = "#ff4c4c"; // Red button for light mode
    }
});

// Random Quote Generator (Homepage)
const quotes = [
    "When I sing, trouble can sit right on my shoulder and I don’t even notice.”~Sarah Vaughan",
    "You’ve got to learn to leave the table when love’s no longer being served.” ~Nina Simone",
    "You don't get another chance, life is no Nintendo game. - Eminem",
    "Music can change the world. - Beethoven",
    "Where words fail, music speaks. - Hans Christian Andersen",
    "I'm not a businessman, I'm a business, man. – Jay-Z",
    "One good thing about music, when it hits you, you feel no pain. - Bob Marley",
    "Without music, life would be a mistake. - Friedrich Nietzsche",
    "Music gives a soul to the universe. - Plato",
];

const quoteSection = document.getElementById("quote-section");
if (quoteSection) {
    const quoteDisplay = document.createElement("p");
    const quoteButton = document.createElement("button");

    quoteDisplay.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    quoteButton.textContent = "Get a New Quote";

    quoteButton.style.marginTop = "10px";
    quoteButton.style.padding = "5px 10px";
    quoteButton.style.backgroundColor = "#ff4c4c"; // Red button
    quoteButton.style.color = "#fff";
    quoteButton.style.border = "none";
    quoteButton.style.borderRadius = "4px";
    quoteButton.style.cursor = "pointer";

    quoteSection.appendChild(quoteDisplay);
    quoteSection.appendChild(quoteButton);

    quoteButton.addEventListener("click", () => {
        quoteDisplay.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    });
}

// Dynamic Top 10 List (Top 10 Page)
const top10Section = document.getElementById("top10");
if (top10Section) {
    // Clear the section to prevent duplicates
    top10Section.innerHTML = ""; // Clears previous content

    const top10Data = [
        { name: "Taylor Swift", song: "Anti-Hero" },
        { name: "Kendrick Lamar", song: "Squabble Up" }, // Updated Artist
        { name: "Bad Bunny", song: "Tití Me Preguntó" },
        { name: "The Weeknd", song: "Blinding Lights" },
        { name: "BTS", song: "Butter" },
        { name: "Billie Eilish", song: "Bad Guy" },
        { name: "Ed Sheeran", song: "Shape of You" },
        { name: "Harry Styles", song: "As It Was" },
        { name: "Ariana Grande", song: "Positions" },
        { name: "Olivia Rodrigo", song: "Good 4 U" },
    ];

    const top10List = document.createElement("ol");
    top10Data.forEach((artist) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<h2 style="color: #ff4c4c;">${artist.name}</h2><p>Most streamed song: ${artist.song}</p>`;
        top10List.appendChild(listItem);
    });
    top10Section.appendChild(top10List);
}



