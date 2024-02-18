import { IconUmbrella } from "@tabler/icons-react";
import React from "react";

export const symcheckDescription = (
    <div className="text-zinc-700 font-mono font-semibold">
        <div className="text-center">
            Cloud based symptom checker.
        </div>
        <div className="text-justify my-4 text-sm md:text-base leading-loose">
            SymCHeck is cloud based symptom checker for patients. It gives users differential diagnoses (predictions) based on the symptoms the user entered. SymCHeck further checks the accuracy of these predictions and categorizes them. It finally recommends specialties through which the user (patient) can get expert care.
        </div>

        <div className="text-center">
            Click Demo to view <span className="font-serif text-lg">sym<span className="text-rose-600">CH</span>eck</span>.
        </div>

    </div>
);


export const moibrellaDescription = (
    <div className="text-zinc-700 font-mono font-semibold">
        <div className="text-center">
            Personal weather predictor.
        </div>
        <div className="text-justify my-4 text-sm md:text-base leading-loose">
            
            Moibrella is a weather app that automatically gives the user the current weather predictions of their current geolocation. It also provides 3 hourly - 3 day forecast for that same location and/or any other location in the world based on user&apos;s search.
        </div>

        <div className="flex flex-row text-lg items-baseline justify-center gap-2">

            <div>
                Click Demo to view
            </div>

            <div className="flex flex-row items-baseline">
                <span>mo</span>
                <IconUmbrella
                    className='text-emerald-400 w-auto h-8'
                />
                <span>brella</span>
            </div>

        </div>

    </div>
)


export const clifastDescription = (
    <div className="text-zinc-700 font-mono font-semibold">
        <div className="text-center">
            Electronic medical record (EMR).
        </div>
        <div className="text-justify my-4 text-sm md:text-base leading-loose flex flex-col gap-6">
            <p>
                Clifast is a web based EMR that allows health practitioners - doctor, nurses, e.t.c - to easily enter and access patient medical information in a simple and  clinically intuitive manner. It also has patient portal that enable patients to view their records and interact with their care providers as rules allow.
            </p>

            <p>
                NB: Clifast is still under development.
            </p>
       

        
        </div>

        <div className="flex flex-row text-lg items-baseline justify-center gap-2">

            <div>
                Click Demo to view
            </div>

           
            <div className={`font-semibold text-xl md:text-2xl lg:text-4xl w3-wide text-sky-950 font-oxanium`}>
                <span >c</span>
                <span >l</span>
                <span >i</span>
                <span className="text-orange-400">f</span>
                <span >a</span>
                <span >s</span>
                <span >t</span>
            </div>

        </div>

    </div>
)