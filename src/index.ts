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
        title: "",
        artist: "",
        coverUrl: "https://picsum.photos/300/200",
        category: {
            typeOfMedia: "",
            genre: "",
        },
        difficulty: ["Easy"],
        BPM: 0,
        isPaused: false,
    },

    {
        id: 3,
        title: "",
        artist: "",
        coverUrl: "https://picsum.photos/300/200",
        category: {
            typeOfMedia: "",
            genre: "",
        },
        difficulty: ["Easy"],
        BPM: 0,
        isPaused: false,
    },

    {
        id: 4,
        title: "",
        artist: "",
        coverUrl: "https://picsum.photos/300/200",
        category: {
            typeOfMedia: "",
            genre: "",
        },
        difficulty: ["Easy"],
        BPM: 0,
        isPaused: false,
    }
];

const trackTitleElement = document.getElementById("track-title");
const trackArtistElement = document.getElementById("track-artist");
const coverImageElement = document.getElementById("track-cover") as HTMLImageElement;
// const trackCategoryElement = document.getElementById("track-category");
const trackBPMElement = document.getElementById("track-tempo");

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