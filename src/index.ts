// --- Interfaces ---

interface Track {
    id: number;
    title: string;
    artist: string;
    category: Category;
    difficulty: string[];
    tempoInBPM: number;
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
        category: {
            typeOfMedia: "Anime",
            genre: "EDM",
        },
        difficulty: ["Easy", "Normal"],
        tempoInBPM: 128,
        isPaused: false,
    }
];

const trackTitleElement = document.getElementById("track-title");
const trackArtistElement = document.getElementById("track-artist");
const coverImageElement = document.getElementById("track-cover") as HTMLImageElement;

const currentTrack = trackSelection[0];

if(trackTitleElement) {
    trackTitleElement.textContent = currentTrack.title;
}