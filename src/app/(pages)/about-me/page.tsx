'use client'

import { LargeCardNoAnimation } from "@/components/display/cards"
import { SectionHeadingText, ContentText } from "@/components/display/textsDisplays"
import { useViewportSize } from "@mantine/hooks"
import { IconArrowBadgeRight, IconArrowBadgeLeft } from "@tabler/icons-react"
import React from "react";

const aboutMeText = "With over a decade in public health and advanced education in Health Informatics, I've gained profound insights into the health challenges communities face and the transformative potential of web technology. Drawing from this dual expertise, I ventured into web development. My mission? To seamlessly integrate proven medical practices with cutting-edge digital solutions to drive tangile improvements in health access and community health outcomes."

export default function AboutMe() {

    // the height and width of current viewport size
    const { width } = useViewportSize()


    return(
        <div className="lg:container mx-4 lg:px-52">

            <SectionHeadingText text="About Me" />


            <LargeCardNoAnimation>
                <div className="mb-4">
                    <IconArrowBadgeRight
                        color="#f43f5e"
                        size={width < 768 ? 30 : 80}
                    />
                </div>

                <ContentText text={`${aboutMeText}`} />


                <div className="mt-4 flex justify-end">
                    <IconArrowBadgeLeft
                        color="#f43f5e"
                        size={width < 768 ? 30 : 80}
                    />
                </div>
            </LargeCardNoAnimation>




        </div>
    )
}