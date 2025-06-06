"use client"

import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const SearchInput = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get("topic") || ""
  const [search, setSearch] = useState(query)

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    if (search.trim() === "") {
      params.delete("topic")
    }else {
      params.set("topic", search.trim())
    }
    const newUrl = `?${params.toString()}`
    router.push(newUrl)
    },[search])

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
        <Image
        src="/icons/search.svg"
        alt="Search Icon"
        width={15}
        height={15}
        />
        <input type="text" className="outline-none" placeholder="Searchc ompanions..." value={search} onChange={(e)=> setSearch(e.target.value)} />
    </div>
  )
}

export default SearchInput