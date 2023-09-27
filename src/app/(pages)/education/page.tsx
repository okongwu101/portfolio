'use client'

import { SectionHeadingText } from "@/components/display/textsDisplays"
import { educationData, educationDataType } from "@/lib/dataSources/educationData"
import { Card, Button, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";


export default function Education() {


    // hook used to control the opening and closing of modal
    const [opened, { open, close }] = useDisclosure(false);

    // state to control content of the modal
    const [transcriptContent, setTranscriptContent] = useState<string[]>([])
    const [transcriptTitle, setTranscriptTitle] = useState("")

    return(
        <div className="lg:container mx-auto lg:px-52">
            <SectionHeadingText text="Education" />
            <div className="grid md:grid-cols-4 gap-x-8 gap-y-8 my-16">
                {
                    educationData.map((e: educationDataType, index) => (
                        <div key={index} className="col-span-2">
                            <Card className={`rounded-md shadow-2xl drop-shadow-2xl  bg-gradient-to-r from-gray-100 to-blue-100`}>
                                <div className="flex flex-col gap-y-16">
                                    <div className="grid grid-cols-12 items-center">
                                        <div className="font-sans text-lg md:text-xl font-semibold col-span-8">
                                            {e.qualification}
                                        </div>
                                        <div className="font-mono cols-span-4 text-xs font-medium">
                                            {e.acronym}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-12 items-center">
                                        <div className="font-sans col-span-8 text-base md:text-lg font-medium">
                                            {e.school}
                                        </div>
                                        <div className="font-mono col-span-4 text-xs font-medium">
                                            {e.year}
                                        </div>
                                    </div>


                                    <Button
                                        className="bg-zinc-800 font-sans text-base tracking-wider rounded-md"
                                        onClick={() => {
                                            setTranscriptContent(e.transcript)
                                            setTranscriptTitle(e.transcriptTitle)
                                            open()
                                        }}
                                    >
                                        Transcript
                                    </Button>



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