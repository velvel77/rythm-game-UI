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

type MuteStatus = 'playing' | 'muted';

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

let status: MuteStatus = "playing";

//Elements
const trackTitleElement = document.getElementById("track-title");
const trackArtistElement = document.getElementById("track-artist");
const coverImageElement = document.getElementById("track-cover") as HTMLImageElement;
const trackMediaElement = document.getElementById("track-category--media");
const trackGenreElement = document.getElementById("track-category--genre");
const trackBPMElement = document.getElementById("track-tempo");

//Lists
const trackListContainer = document.querySelector("#track-list-container");

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
        card.addEventListener("mouseenter", () => {
            const currentActive = document.querySelector(".main-body__card.active");

            //Enable CSS visuals if card is active
            if(currentActive) {
                currentActive.classList.remove("active");
            }

            card.classList.add("active");
            //TODO: Add music on mouseenter
            previewTrack(track);
        })

        card.addEventListener("mouseleave", () => {
           card.classList.remove("active");
           //TODO: Add removal of music
        })

        trackListContainer.appendChild(card);
    }
})

// --- Functions ---

function previewTrack(track: Track) {

    if(trackTitleElement) {
        trackTitleElement.textContent = track.title;
    }

    if(trackArtistElement) {
        trackArtistElement.textContent = track.artist;
    }

    // if(coverImageElement) {
    //     if(currentTrack.coverUrl) {
    //         coverImageElement.src = currentTrack.coverUrl;
    //     }
    // }

    // if(trackBPMElement) {
    //     trackBPMElement.textContent = currentTrack.BPM.toString();
    // }

    // if(trackMediaElement) {
    //     trackMediaElement.textContent = currentTrack.category.typeOfMedia;
    // }

    // if(trackGenreElement) {
    //     trackGenreElement.textContent = currentTrack.category.genre;
    // }
}

// const currentTrack = trackSelection[0];
// if (!currentTrack) throw new Error("No tracks in trackSelection");