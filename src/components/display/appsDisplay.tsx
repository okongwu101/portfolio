'use client'

import { Button, Card, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGithub } from "@tabler/icons-react";
import { ReactNode, useState } from "react";
import MyTooltip from "./myTooltip";
import React from "react";


type appSectionCardProps = {
    appName: string;
    // children: ReactNode;
    demoLink: string;
    gitLink: string;
    description: ReactNode;
    modalTitle: string;
    techData: { name: string; link: string; id: string }[];

}
export default function AppsDisplay(props: appSectionCardProps) {

    // hook used to control the opening and closing of modal
    const [opened, { open, close }] = useDisclosure(false);

    // modal title state
    const [modalTitle, setModalTitle] = useState<string>("")

    // modal description state
    const [modalDescription, setModalDescription] = useState<ReactNode>()


    // onClick redirect to git repo of the app
    const gitRedirect = () => {
        window.open(props.gitLink)
    }

    // onClick redirect to app demo
    const demoRedirect = () => {
        window.open(props.demoLink)
    }

    return (
        <div>


            <Card className={`rounded-md shadow-2xl drop-shadow-2xl my-8 mt-16 md:mt-24 lg:mt-32 bg-gradient-to-r from-gray-100 to-blue-100`}>
                <div className="flex flex-col gap-4">

                    <div className="flex flex-row justify-center">

                        <div className="font-sans text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-8 mb-4 tracking-wider">
                            {props.appName}
                        </div>
                    </div>

                    <div className="flex flex-row justify-between">
                        <div>
                            <Button
                                className="bg-zinc-800 font-sans text-base rounded-md"
                                onClick={() => {
                                    setModalTitle(props.modalTitle)
                                    setModalDescription(props.description)
                                    open()
                                }}
                            >
                                Description
                            </Button>
                        </div>
                        <div>

                            <MyTooltip label="Git repo">
                                <Button
                                    className="bg-teal-800 hover:bg-green-800 rounded-md"
                                    onClick={gitRedirect}
                                >
                                    <IconBrandGithub />
                                </Button>
                            </MyTooltip>




                        </div>
                    </div>

                    <div className="border border-neutral-200 rounded-md p-2 my-4">
                        <div className="font-sans text-base font-medium underline underline-offset-4 mb-2">Techs</div>
                        <div className="flex flex-row flex-wrap gap-2">

                            {
                                props.techData.map((t) => (
                                    <div key={t.id}>


                                        <div
                                            className="bg-green-800 text-white font-mono text-xs rounded-md cursor-pointer border px-2 py-3 tracking-wider hover:bg-orange-600"

                                            onClick={() => window.open(t.link)}

                                        >
                                            {t.name}
                                        </div>


                                    </div>
                                ))
                            }

                        </div>
                    </div>



                    <Button
                        className="bg-zinc-800 font-sans text-base tracking-wider rounded-md"
                        onClick={demoRedirect}
                    >
                        Demo
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
                        {modalTitle}
                    </div>
                    
                    {/* <ContentText text={modalDescription} /> */}
                    { modalDescription }

                </div>
            </Modal>


        </div>
    )
}