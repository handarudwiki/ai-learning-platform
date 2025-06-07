import CompanionComponent from "@/components/CompanionComponent";
import { getCompanionById } from "@/lib/actions/companion";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

interface CompanionSessionPageProps {
    params: Promise<{ id: string }>;
}

const page = async ({params}:CompanionSessionPageProps) => {
    const {id} = await params;
    const companion = await getCompanionById(id);
    const user = await currentUser();

    const{name, subject, topic, duration,color} = companion

    if(!user) {
        redirect("/sign-in");
    }
    if(!name){
        redirect("/companions");
    }
  return (
    <main>
        <article className="flex rounded-border justify-between p-6 max-md:flex-col">
            <div className="flex items-center gap-2">
                <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor:color }}>
                    <Image
                    src={`/icons/${subject}.svg`}
                    alt={`${subject} Icon`}
                    width={35}
                    height={35} 
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className="font-bold text-2xl">
                            {name}
                        </div>
                        <div className="subject-badge max-sm:hidden">
                            {subject}
                        </div>
                    </div>
                    <p className="text-lg">{topic}</p>
                </div>
            </div>
            <div className="items-start text-2xl max-md:hidden">
                {duration} minutes
            </div>
        </article>
            <CompanionComponent {...companion} companionId={id} userImage={user.imageUrl} userName={user.username}/>
    </main>
  )
}

export default page