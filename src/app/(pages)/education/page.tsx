'use client'

import { SectionHeadingText } from "@/components/display/textsDisplays"
import { educationData, educationDataType } from "@/lib/dataSources/educationData"
import { Card, Button, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import React from "react";


export default function Education() {


    // hook used to control the opening and closing of modal
    const [opened, { open, close }] = useDisclosure(false);

    // state to control content of the modal
    const [transcriptContent, setTranscriptContent] = useState<string[]>([])
    const [transcriptTitle, setTranscriptTitle] = useState("")

    return (
        <div className="lg:container mx-4 lg:px-52">
            <SectionHeadingText text="Education" />
            <div className="grid md:grid-cols-4 gap-x-8 gap-y-8 my-16">
                {
                    educationData.map((e: educationDataType, index) => (
                        <div key={index} className="col-span-2">
                            <Card className={`rounded-md shadow-2xl drop-shadow-2xl  bg-gradient-to-r from-gray-100 to-blue-100`}>
                                {/* <div className="flex flex-col gap-y-16"> */}
                                <div className="grid grid-cols-6 items-center gap-y-12">

                                    <div className="col-span-5 font-sans text-lg md:text-xl font-semibold">
                                        {e.qualification}
                                    </div>

                                    <div className="col-span-1 font-mono text-xs font-medium">
                                        {e.acronym}
                                    </div>

                                    <div className="col-span-5 font-sans text-base md:text-lg font-medium">
                                        {e.school}
                                    </div>

                                    <div className="col-span-1 font-mono text-xs font-medium">
                                        {e.year}
                                    </div>

                                    <div className="col-span-6">
                                        <Button
                                            className="bg-zinc-800 font-sans text-base tracking-wider rounded-md w-full"
                                            onClick={() => {
                                                setTranscriptContent(e.transcript)
                                                setTranscriptTitle(e.transcriptTitle)
                                                open()
                                            }}
                                        >
                                            Transcript
                                        </Button>
                                    </div>

                                </div>

                       


                            </Card>

                            <Modal
                                opened={opened}
                                onClose={close}
                                // title={modalTitle}
                                withCloseButton={false}
                                centered
                                classNames={{
                                    title: "justify-center text-lg",
                                    header: "text-center flex"
                                }}
                            >
                                <div>

                                    <div className="text-center font-sans text-lg font-semibold mb-8 underline underline-offset-8">
                                        {transcriptTitle}
                                    </div>


                                    <div>
                                        <ul className="flex flex-col gap-2 font-mono font-medium text-sm md:text-lg">
                                            {
                                                transcriptContent.map((m, index) => (
                                                    <li
                                                        key={index}
                                                        className={`${index % 2 === 0 ? "bg-gray-200" : "bg-neutral-200"} py-2 rounded-md px-2`}
                                                    >
                                                        {m}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>




                                </div>
                            </Modal>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}