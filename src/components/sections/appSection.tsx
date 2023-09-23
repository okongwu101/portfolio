'use client'


import { ContentText, SectionHeadingText } from "../display/textsDisplays"
import { useViewportSize } from "@mantine/hooks"
import AppsDisplay from "../display/appsDisplay"
import { symcheckTechData } from "@/lib/dataSources/symcheckData"
import { moibrellaDescription, symcheckDescription } from "../display/appDescriptions"
import { moibrellaTechData } from "@/lib/dataSources/moibrellaData"



export default function AppSection() {


    
    return (
        <div>

            <SectionHeadingText text="Apps" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                <AppsDisplay
                    appName="Symcheck"
                    demoLink="https://symcheck.vercel.app/"
                    gitLink="https://github.com/okongwu101/symcheck"
                    description={symcheckDescription}
                    modalTitle="Symcheck"
                    techData={symcheckTechData}
                />


                <AppsDisplay
                    appName="Moibrella"
                    demoLink="https://moibrella.vercel.app/"
                    gitLink="https://github.com/okongwu101/moibrella"
                    description={moibrellaDescription}
                    modalTitle="Moibrella"
                    techData={moibrellaTechData}
                />
           
                

            </div>

        </div>
    )
}