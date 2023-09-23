

import { LargeCardNoHover } from "../display/cards"
import TechSkillsDisplay from "../display/techSkillsDisplay"
import { SectionHeadingText } from "../display/textsDisplays"
import MedicalSkillsDisplay from "../display/medSkillsDisplay"
import SoftSkillsDisplay from "../display/softSkillsDisplay"


export default function SkillSection() {
    return (
        <div>
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