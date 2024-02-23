'use client'

import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconTopologyStar2 } from '@tabler/icons-react';
import Image from "next/image";
import avatar1 from "../../../public/avatar1.png";
import { SmallCard } from "../display/cards";
import React from "react";






const name = "Nnam Tochukwu"
const greeting = "Hi, I'm"


export default function LandingPage() {

    return (
      
        <div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-24 items-center justify-center">
                    <div className="font-sans text-3xl md:text-4xl lg:text-6xl">
                        <div className="flex flex-col gap-16">
                            <div className="font-medium">
                                {greeting}
                            </div>
                            <div className="font-bold text-rose-600 ">
                                {name}
                            </div>
                        </div>

                        <div className="font-mono text-xs tracking-wide md:tracking-normal lg:tracking-wider lg:text-sm font-semibold">
                            [ mbbs, fwacp, MSc Health informatics ]
                        </div>

                    </div>
                    <div className=" flex flex-col md:flex-row gap-2 font-sans text-base md:text-xl lg:text-3xl text-emerald-600 font-bold">
                        <div className="flex flex-row gap-2">

                            <span className="md:hidden"><IconTopologyStar2 size={16} /></span>
                            <span>Physician</span>

                        </div>
                        <span className="hidden md:flex">|</span>
                        <div className="flex flex-row gap-2">
                            <span className="md:hidden"><IconTopologyStar2 size={16} /></span>
                            <span>Full stack web developer</span>
                        </div>





                    </div>

                    <div className="font-sans lg:text-lg mx-auto text-justify w-fit">
                        From Public Health Practice to Web Innovation: Bridging the population health gap with Digital Solutions.
                    </div>



                    <div className="flex justify-start gap-4">

                        <SmallCard
                            link="https://www.linkedin.com/in/nnam-tochukwu/"
                        >
                            <IconBrandLinkedin />
                        </SmallCard>
                        <SmallCard link="https://github.com/okongwu101">
                            <IconBrandGithub />
                        </SmallCard>
                        <SmallCard
                            link="https://twitter.com/Nnam042"
                        >
                            <IconBrandX />
                        </SmallCard>
                    </div>
                </div>



                <div className="hidden md:flex items-start justify-center h-screen">

                    <div className="flex items-start justify-center  w-11/12 h-full rounded-3xl shadow-lg bg-gradient-to-r from-indigo-50 bg-red-50">
                        <Image
                            src={avatar1}
                            alt="big avatar"
                            className="h-full w-auto"
                            priority
                            
                            quality={100}
                        />
                    </div>
                   

                </div>
            </div>

        </div>

    )
}