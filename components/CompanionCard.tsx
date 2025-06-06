"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface CompanionCardProps {
    id : string;
    name : string;
    topic : string;
    duration : number;
    subject : string;
    color : string;
    bookmarked : boolean;
}

const CompanionCard = ({
    id,
    name,
    topic,
    duration,
    subject,
    color,
    bookmarked
}:CompanionCardProps) => {
    // const pathName = usePathname()
  return (
    <article className='companion-card' style={{backgroundColor: color}}>
        <div className="flex justify-between items-center">
            <div className="subject-badge">{subject}</div>
            <div className="companion-bookmark">
                <Image
                 src={bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"}
                 alt="Bookmark Icon"
                 width={12.5}
                 height={15}
                />
            </div>
        </div>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <div className="text-sm">{topic}</div>
            <div className="flex items-center gap-2">
                <Image
                src="/icons/clock.svg"
                alt="Clock Icon"
                width={13.5}
                height={13.5}
                />
                <span className='text-sm'>{duration} mins</span>
            </div>
            <Link href={`/companions/${id}`} className='w-full'>
                <button className='btn-primary w-full justify-center'>
                    Launch Lesson
                </button>
            </Link>
    </article>
  )
}

export default CompanionCard