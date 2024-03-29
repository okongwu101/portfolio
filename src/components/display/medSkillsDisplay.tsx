

import { MedSkillDataTypes, MedicalSkillsData } from "@/lib/dataSources/medSkillsData"
import React from "react"




export default function MedicalSkillsDisplay() {
    return (
        <div>
            {
                MedicalSkillsData.map((m: MedSkillDataTypes, index) => (
                    <div key={m.skillClass}
                        className={`${index % 2 === 0 ? "bg-gray-300" : "bg-neutral-200"} rounded-md ml-6 py-2 px-4 my-6
                        
                    
                        `}>
                        <div
                            className="font-sans text-base md:text-lg font-medium underline underline-offset-4 mb-2 col-span-5"
                        >
                            {m.skillClass}
                        </div>
                        <ul>
                            {
                                m.values.map((v, index) => (
                                    <li key={index} className=" text-zink-800 font-mono font-semibold text-sm md:text-base tracking-wider py-2 px-2 rounded-md ml-4 list-outside ">
                                        {v}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}