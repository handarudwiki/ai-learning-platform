import CompanionForm from '@/components/CompanionForm';
import React from 'react'

const page = () => {
    const canCreateCompanion = true; // This should be replaced with actual logic to check if the user can create a companion
  return (
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
        {canCreateCompanion ? (
            <article className='w-full gap-4 flex flex-col'>
                <h1>Companion Builder</h1>
                <CompanionForm/>
            </article>
        ) : (
            <p>Cannot</p>
        )}
    </main>
  )
}

export default page