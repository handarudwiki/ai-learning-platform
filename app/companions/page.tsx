
import CompanionCard from "@/components/CompanionCard"
import SearchInput from "@/components/SearchInput"
import SubjectFilter from "@/components/SubjectFilter"
import { companions } from "@/constants"

const page = () => {
  return (
    <main>
        <section className="flex justify-between gap-4 max-sm:flex-col">
            <h1>Companion Library</h1>
            <div className="flex gap-4">
                <SearchInput/>
                <SubjectFilter/>
            </div>
        </section>
        <section className="companions-grid">
            {companions.map((companion) => 
                <CompanionCard key={companion.id} {...companion}/>
            )}
        </section>
    </main>
  )
}

export default page