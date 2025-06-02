import CompanionList from "@/components/CompanionList"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { companions } from "@/constants"
import Image from "next/image"

const page = () => {
    const user = {
    imageUrl : "/avatars/avatar-1.png",
    firstName : "John",
    lastName : "Doe",
    emailAdress : "handaru@gmail.com",
}
  return (
    <main className="min-lg:w3/4">
        <section className="flex justify-between gap-4 max-sm:flex-col items-center">
            <div className="flex items-center gap-4">
                <Image
                src={user.imageUrl}
                alt="User Image"
                width={110}
                height={110}
                />
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">{user.firstName} {user.lastName}</h1>
                    <p className="text-sm text-muted-foreground">{user.emailAdress}</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="border border-black rounded-lg p-3 gap-2 flex flex-col h-fit">
                    <div className="flex gap-2 items-center">
                        <Image
                        src="/icons/check.svg"
                        alt="checkmark"
                        width={22}
                        height={22}
                        />
                        <span className="text-lg font-bold">Companions</span>
                    </div>
                    <div>Lessons Completed</div>
                </div>
            </div>
        </section>
        <Accordion type="multiple">
            <AccordionItem value="bookmarks">
                <AccordionTrigger className="text-2xl font-bold">
                    Bookmarked Companions 12
                </AccordionTrigger>
                <AccordionContent>
                    <CompanionList title="Bookmarked Companion" companions={companions}/>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="recent">
                <AccordionTrigger className="text-2xl font-bold">
                    Recent Sessions
                </AccordionTrigger>
                <AccordionContent>
                    <CompanionList title="Recent Sessions" companions={companions}/>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="companions">
                <AccordionTrigger className="text-2xl font-bold">
                    My Companions 12
                </AccordionTrigger> 
                <AccordionContent>
                    <CompanionList title="My Companions" companions={companions}/>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </main>
  )
}

export default page