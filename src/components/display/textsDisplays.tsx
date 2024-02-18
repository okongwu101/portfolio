import React from "react";


type textProps = {
    text: string
}

export const SectionHeadingText = (props: textProps) => {
    return(
        <div className="font-sans text-4xl md:text-4xl lg:text-5xl font-bold mt-8 md:mt-12">
        {props.text}
        </div>
    )
}

export const ContentText = (props: textProps) => {
    return(
        <div className="font-sans tracking-wider lg:text-xl leading-loose text-justify">
            {props.text}
        </div>
    )
}
