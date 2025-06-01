import { subjects } from "@/constants"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const SubjectFilter = () => {
  return (
    <Select>
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