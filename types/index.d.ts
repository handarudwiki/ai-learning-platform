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

interface CreateCompanion {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
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

export interface CompanionComponentProps {
    companionId: string;
    subject: string;
    topic : string;
    name: string;
    color : string
    userName: string;
    userImage : string;
    voice : string;
    style : string;
}

export interface SavedMessage{
    role : "user" | "system" | "assistant"
    content : string
}