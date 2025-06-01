import Image from "next/image"

const SearchInput = () => {
  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
        <Image
        src="/icons/search.svg"
        alt="Search Icon"
        width={15}
        height={15}
        />
        <input type="text" className="outline-none" placeholder="Searchc ompanions..." />
    </div>
  )
}

export default SearchInput