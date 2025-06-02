"use client";

import { cn } from "@/lib/utils"
import { CompanionComponentProps, SavedMessage } from "@/types"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import Image from "next/image"
import { useRef, useState } from "react";
import soundwaves from "@/constants/soundwaves.json"

const CompanionComponent = ({companionId, subject, topic, name, userName, userImage, style,color, voice}:CompanionComponentProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [messages, setMessages] =  useState<SavedMessage[]>([])
  const isMuted = true
    return (
    <section className="flex flex-col h-[70-vh]">
        <section className="flex gap-8 max-sm:flex-col">
            <div className="companion-section">
                <div className="companion-avatar" style={{ backgroundColor: color }}>
                    <div className={cn('absolute transition-opacity duration-1000 opacity-opacity-1001')}>
                        <Image src={`/icons/${subject}.svg`} alt="icons subject" width={150} height={150} className="max-sm:w-fit"/>
                    </div>
                    <div className={cn("absolute transition-opacity duration-100 opacity-100")}>
                        <Lottie
                        animationData={soundwaves}
                        lottieRef={lottieRef}
                        className="companion-lottie"
                        />
                    </div>
                </div>
                <p className="font-bold text-2xl">{name}</p>
            </div>
            <div className="user-section">
                <div className="user-avatar">
                    <Image
                    src={userImage}
                    alt="user image"
                    width={130}
                    height={130}
                    />
                    <p className="font-bold text-2xl">{userName}</p>
                </div>
                <button className="btn-mic">
                    <Image
                    src={isMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'}
                    alt="mic"
                    width={36}
                    height={36}
                    />
                    <p className="max-sm:hidden">
                        {isMuted ? "Turn on microphone" : "Turn off microphone"}
                    </p>
                </button>
                <button className={cn("rounded-lg py-2 cursor-pointer transition-colors w-full text-white bg-red-700")}>
                    Start Session
                </button>
            </div>
        </section>
        <section className="transcript">
            <div className="transcript-message no-scrollbar">
                <p>Message</p>
            </div>
        </section>
    </section>
  )
}

export default CompanionComponent