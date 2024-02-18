import { LargeCardNoHover } from "@/components/display/cards";
import MedicalSkillsDisplay from "@/components/display/medSkillsDisplay";
import SoftSkillsDisplay from "@/components/display/softSkillsDisplay";
import TechSkillsDisplay from "@/components/display/techSkillsDisplay";
import { SectionHeadingText } from "@/components/display/textsDisplays";
import React from "react";

export default function Skills() {
    return(
        <div className="lg:container mx-4 lg:px-52">
            <SectionHeadingText text="Skills" />
            <div>
                <LargeCardNoHover>
                    <div className="font-sans text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-8 mb-16 tracking-wider">Technical</div>
                    <TechSkillsDisplay />
                </LargeCardNoHover>

                <LargeCardNoHover>
                    <div className="font-sans text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-8 mb-8 tracking-wider">Medical</div>
                    <MedicalSkillsDisplay />
                </LargeCardNoHover>

                <LargeCardNoHover>
                    <div className="font-sans text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-8 mb-8 tracking-wider">Soft</div>
                    <SoftSkillsDisplay />
                </LargeCardNoHover>
            </div>
        </div>
    )
}