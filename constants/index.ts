import type { Companion, SavedMessage } from "@/types";

export const companions :Companion[] = [
    {
        id: "1",
        name: "Maths",
        subject: "maths",
        topic: "Algebra",
        duration: 60,
        color: "blue"
        ,bookmarked: false
    }
    ,{
        id: "2",
        name: "Science",
        subject: "science",
        topic: "Physics",
        duration: 45,
        color: "green",
        bookmarked: true
    },{
        id: "3",
        name: "History",
        subject: "history",
        topic: "World War II",
        duration: 30,
        color: "red",
        bookmarked: false
    }
]

export const subjects = [
    "maths",
    "science",
    "history",
    "language",
    "coding",
    "geography",
    "economics",
    "finance",
    "business",
    "art"
]

export const messages:SavedMessage[] = [
    {
        role : "assistant",
        content : "Message from assistant"
    },
    {
        role: "system",
        content: "Message"
    }
]

export const subjectsColors = {
  science: "#E5D0FF",
  maths: "#FFDA6E",
  language: "#BDE7FF",
  coding: "#FFC8E4",
  history: "#FFECC8",
  economics: "#C8FFDF",
};