'use client'

import { TechSkillDataTypes, skillsData } from "@/lib/dataSources/techSkillsData";
import { useViewportSize } from "@mantine/hooks";
import React from "react";

/*
    Create a reusable component to display technical skills
    Import the skills from the skills Datasets
    Map and display
*/

export default function TechSkillsDisplay() {


 
    /*
        Control display in devices smaller that tailwind sm viewport
        but with screen wide enough to contain a grid. 
        For example in 7.1" tablet in portrait viewport.
        At same time maintain column display for devices with viewport less 
        400px. E.g. portrait view of most handheld phones.
    */
    const { width } = useViewportSize()

    return (
        <div className="flex flex-col gap-6">
            {
                skillsData.map((s: TechSkillDataTypes, index) => (
                    <div key={s.skillClass}
                        className={`${index % 2 === 0 ? "bg-gray-300" : "bg-neutral-200"} rounded-md ml-6 py-2 px-4 sm:grid grid-cols-10 gap-2 items-center
                        ${width >= 400 && width <= 639 ? "grid grid-cols-10 gap-2" : null}
                        `}
                    >
                        <div
                            className="font-sans text-base md:text-lg font-medium underline underline-offset-4 mb-2 col-span-5"
                        >
                            {s.skillClass} :
                        </div>
                        <div className="col-span-5">
                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4">
                                {s.values.map(v => (
                                    <div key={v.name} >
                                        <div
                                            className=" text-zink-800 font-mono font-semibold text-sm md:text-base cursor-pointer tracking-wider hover:text-white hover:bg-teal-900 py-2 px-2 rounded-md "
                                            onClick={() => window.open(v.link)}
                                        >
                                            {v.name}
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>


                ))
            }
        </div>
    )
}