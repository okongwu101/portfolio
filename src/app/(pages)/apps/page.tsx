import { symcheckDescription, moibrellaDescription } from "@/components/display/appDescriptions";
import AppsDisplay from "@/components/display/appsDisplay";
import { SectionHeadingText } from "@/components/display/textsDisplays";
import { moibrellaTechData } from "@/lib/dataSources/moibrellaData";
import { symcheckTechData } from "@/lib/dataSources/symcheckData";

export default function Apps() {
    return(
        <div className="lg:container mx-auto lg:px-52">
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