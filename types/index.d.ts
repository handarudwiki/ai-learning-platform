export enum Subject {
    maths = "maths",
    language = "language",
    science = "science",
    history = "history",
    coding = "coding",
    geography = "geography",
    economics = "economics",
    finance = "finance",
    business = "business",
    art = "art",
}

export type Companion = {
    id: string;
    name: string;
    subject : string;
    topic : string;
    duration : number; 
    color: string;
    bookmarked: boolean;
}