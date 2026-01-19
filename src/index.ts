// --- Interfaces ---

interface Track {
    id: number;
    title: string;
    artist: string;
    durationInSeconds: number;
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
        durationInSeconds: 260,
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
        durationInSeconds: 260,
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
        durationInSeconds: 260,
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
        durationInSeconds: 260,
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
const trackContainer = document.querySelector("#track-container");

//Dialogs

const dialog = document.querySelector("#add-track-dialog") as HTMLDialogElement;
const openBtn = document.querySelector('#open-modal-btn') as HTMLButtonElement;
const closeBtn = document.querySelector("#close-modal-btn") as HTMLButtonElement;

const addForm = document.querySelector("#add-track-form") as HTMLFormElement;
const titleInput = document.querySelector("#title-input") as HTMLInputElement;
const artistInput = document.querySelector("#artist-input") as HTMLInputElement;
const durationInput = document.querySelector("#duration-input") as HTMLInputElement;

function renderTracks() {

    if(trackContainer) {
        trackContainer.replaceChildren();
    }

    const heading = document.createElement("h1");
    heading.classList.add("main-body__heading");
    heading.textContent = "Select your track!";
    trackContainer?.appendChild(heading);

    trackSelection.forEach((track) => {

        //destructuring
        const { title, artist, durationInSeconds } = track;

        const card = document.createElement("article");
        card.classList.add("main-body__card");

        const titleElement = document.createElement("h2");
        card.classList.add("main-body__track-title");
        titleElement.textContent = title;

        const artistElement = document.createElement("span");
        card.classList.add("main-body__track-artist")
        artistElement.textContent = artist;

        const durationElement = document.createElement("span");
        card.classList.add("main-body__track-duration");
        durationElement.textContent = durationInSeconds.toString();

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("main-body__image-wrapper");

        if(track.coverUrl) {
            const image = document.createElement("img");
            image.classList.add("main-body__image");
            image.src = track.coverUrl;
            image.alt = `Lorem Ipsum`;

            imageWrapper.appendChild(image);
        }

        const difficultyWrapper = document.createElement("div");
        difficultyWrapper.classList.add("main-body__track-difficulty");

        for(const difficulty of track.difficulty) {
            difficultyWrapper.append(difficulty);
        }

        const bpm = document.createElement("span");
        card.classList.add("main-body__track-tempo");
        bpm.textContent = track.BPM.toString();

        const typeOfMedia = document.createElement("span");
        card.classList.add("main-body__track-category--media")
        typeOfMedia.textContent = track.category.typeOfMedia;

        const genre = document.createElement("span");
        card.classList.add("main-body__track-category--genre");
        genre.textContent = track.category.genre;

        card.append(
            imageWrapper, 
            title, 
            artist, 
            difficultyWrapper,
            bpm,
            typeOfMedia,
            genre
        );

        if(trackContainer) {
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

            trackContainer.appendChild(card);
        }
    })
}

// --- Logic ---

renderTracks();

// --- Functions ---

function previewTrack(track: Track) {

    if(trackTitleElement) {
        trackTitleElement.textContent = track.title;
    }

    if(trackArtistElement) {
        trackArtistElement.textContent = track.artist;
    }

    if(coverImageElement) {
        if(track.coverUrl) {
            coverImageElement.src = track.coverUrl;
        }
    }

    if(trackBPMElement) {
        trackBPMElement.textContent = track.BPM.toString();
    }

    if(trackMediaElement) {
        trackMediaElement.textContent = track.category.typeOfMedia;
    }

    if(trackGenreElement) {
        trackGenreElement.textContent = track.category.genre;
    }
}

// const currentTrack = trackSelection[0];
// if (!currentTrack) throw new Error("No tracks in trackSelection");

// --- Modals ---

openBtn.addEventListener("click", () => {
    dialog.showModal()
});

closeBtn.addEventListener("click", () => {
    dialog.close()
});