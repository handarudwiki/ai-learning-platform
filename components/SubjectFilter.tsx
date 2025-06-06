"use client"

import { subjects } from "@/constants"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const SubjectFilter = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get("subject") || ""

    const [subject, setSubject] = useState(query)

    console.log("SubjectFilter", subject)

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString())

        let newUrl = ""
        if (subject == "all"){
            params.delete("subject")
        }else {
            params.set("subject", subject)
        } 
        newUrl = `?${params.toString()}`
        router.push(newUrl)
    },[subject])

       
  return (
    <Select onValueChange={setSubject} value={subject}>
        <SelectTrigger className="input capitalize">
            <SelectValue placeholder="Subject" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                    {subject}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
  )
}

export default SubjectFilter