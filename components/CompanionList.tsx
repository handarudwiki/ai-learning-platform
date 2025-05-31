import { cn } from '@/lib/utils';
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import Link from 'next/link';
import Image from 'next/image';
import { Companion } from '@/types';

interface CompanionListProps {
  title : string;
  companions?: Companion[]
  className?: string;
}

const CompanionList = ({
    title,
    companions ,
    className ,
    }: CompanionListProps) => {
  return (
    <article className={cn('companion-list', className)}>
        <h2 className='font-bold text-3xl'>{title}</h2>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='text-lg w-23'>Lessons</TableHead>
                    <TableHead className='text-lg'>Subjects</TableHead>
                    <TableHead className='text-lg text-right'>Duration</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {companions?.map((companion) => (
                    <TableRow key={companion.id}>
                       <TableCell>
                        <Link href="/companions">
                            <div className="flex items-center gap-2">
                                <div className="size-[72px] items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor: companion.color }}>
                                    <Image
                                    src={`/iconst/${companion.subject}.svg`}
                                    alt={`${companion.subject} Icon`}
                                    width={35}
                                    height={35}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className='font-bold text-2xl'>
                                        {companion.name}
                                    </p>
                                    <p className='text-lg'>{companion.topic}</p>
                                </div>
                            </div>
                        </Link>
                       </TableCell>
                       <TableCell>
                        <div className="subject-badge w-fit max-md:hidden">
                            {companion.subject}
                        </div>
                        <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" style={{ backgroundColor: companion.color }}>
                            <Image
                                src={`/iconst/${companion.subject}.svg`}
                                alt={`${companion.subject} Icon`}
                                width={18}
                                height={18}
                            />
                        </div>
                       </TableCell>
                       <TableCell>
                        <div className="flex items-center gap-2 w-full justify-end">
                            <div className="text-2xl">{companion.duration} {' '} <span className='max-md:hidden'></span></div>
                            <Image
                            src="/icons/clock.svg"
                            alt='Clock Icon'
                            width={14}
                            height={14}
                            className='md:hidden'
                            />
                        </div>
                       </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </article>
  )
}

export default CompanionList