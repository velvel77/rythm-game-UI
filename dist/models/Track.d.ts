export interface Track {
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
export interface Category {
    typeOfMedia: string;
    genre: string;
}
//# sourceMappingURL=Track.d.ts.map