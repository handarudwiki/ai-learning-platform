import CompanionCard from '@/components/CompanionCard'
import { companions } from '@/constants'
import { Companion } from '../types'
import React from 'react'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'

const page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        {companions.map((companion:Companion) => {
          return <CompanionCard key={companion.id} {...companion}/>
        })}
      </section>
      <section className="home-section">
        <CompanionList 
          title="Recommended for you"
          companions={companions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default page