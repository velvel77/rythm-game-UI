// --- Interfaces ---

interface Track {
    id: number;
    title: string;
    artist: string;
    category: Category;
    difficulty: string[];
    BPM: number;
    isPaused: boolean;
    coverUrl?: string;
}

interface Category {
    typeOfMedia: string;
    genre: string;
}

type PreviewStatus = 'playing' | 'paused';

const trackSelection: Track[] = [
    {
        id: 1,
        title: "I Really Want to Stay At Your House",
        artist: "Rosa Walton",
        coverUrl: "https://picsum.photos/300/200",
        category: {
            typeOfMedia: "Anime",
            genre: "EDM",
        },
        difficulty: ["Easy", "Normal"],
        BPM: 128,
        isPaused: false,
    },

    {
        id: 2,
        title: "I Really Want to Stay At Your House",
        artist: "Rosa Walton",
        coverUrl: "https://picsum.photos/300/200",
        category: {
            typeOfMedia: "Anime",
            genre: "EDM",
        },
        difficulty: ["Easy", "Normal"],
        BPM: 128,
        isPaused: false,
    },
    {
        id: 3,
        title: "I Really Want to Stay At Your House",
        artist: "Rosa Walton",
        coverUrl: "https://picsum.photos/300/200",
        category: {
            typeOfMedia: "Anime",
            genre: "EDM",
        },
        difficulty: ["Easy", "Normal"],
        BPM: 128,
        isPaused: false,
    },

    {
        id: 4,
        title: "I Really Want to Stay At Your House",
        artist: "Rosa Walton",
        coverUrl: "https://picsum.photos/300/200",
        category: {
            typeOfMedia: "Anime",
            genre: "EDM",
        },
        difficulty: ["Easy", "Normal"],
        BPM: 128,
        isPaused: false,
    },
];

// --- Variables ---

//Elements
const trackTitleElement = document.getElementById("track-title");
const trackArtistElement = document.getElementById("track-artist");
const coverImageElement = document.getElementById("track-cover") as HTMLImageElement;
const trackMediaElement = document.getElementById("track-category--media");
const trackGenreElement = document.getElementById("track-category--genre");
const trackBPMElement = document.getElementById("track-tempo");

//Lists
const trackListContainer = document.querySelector("#track-list-container");
const trackDifficultyContainer = document.querySelector("#track-difficulty");

//Logik

trackSelection.forEach((track) => {
    const card = document.createElement("article");
    card.classList.add("main-body__card");

    const title = document.createElement("h2");
    title.textContent = track.title;

    const artist = document.createElement("span");
    artist.textContent = track.artist;


    const difficultyWrapper = document.createElement("div");
    difficultyWrapper.classList.add("main-body__track-difficulty");

    for(const difficulty of track.difficulty) {
        difficultyWrapper.append(difficulty);
    }

    card.append(title, artist, difficultyWrapper);

    if(trackListContainer) {
        trackListContainer.appendChild(card);
    }
})

const currentTrack = trackSelection[0];
if (!currentTrack) throw new Error("No tracks in trackSelection");

if(trackTitleElement) {
    trackTitleElement.textContent = currentTrack.title;
}

if(trackArtistElement) {
    trackArtistElement.textContent = currentTrack.artist;
}

if(coverImageElement) {
    if(currentTrack.coverUrl) {
        coverImageElement.src = currentTrack.coverUrl;
    }
}

if(trackBPMElement) {
    trackBPMElement.textContent = currentTrack.BPM.toString();
}

if(trackMediaElement) {
    trackMediaElement.textContent = currentTrack.category.typeOfMedia;
}

if(trackGenreElement) {
    trackGenreElement.textContent = currentTrack.category.genre;
}