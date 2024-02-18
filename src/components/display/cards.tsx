'use client'

import { Card } from "@mantine/core";
import { ReactNode } from "react";
import React from "react";

type MyCardProps = {
    children: ReactNode;
    link: string;
}

export const SmallCard = (props: MyCardProps) => {

    // onClick open the link in a new window
    const handleRedirect = () => {
        window.open(props.link)
    }

    return (
        <div>
            <Card
                className="rounded-md bg-gradient-to-r from-gray-100 to-blue-100 shadow-2xl cursor-pointer hover:-translate-y-2 ease-in-out duration-500 p-5 hover:from-rose-200 hover:to-rose-200"
                onClick={handleRedirect}
            >
                {props.children}
            </Card>


        </div>

    )
}





export const LargeCard = ({children}: {children: ReactNode}) => {
    return (
        <div>
            <Card
                className="rounded-md bg-gradient-to-r from-gray-100 to-blue-100 shadow-2xl cursor-pointer hover:-translate-y-2 ease-in-out duration-500 hover:from-rose-200 hover:to-rose-200 my-8"
                
            >
                {children}
            </Card>
            
        </div>
    )
}

export const LargeCardNoAnimation = ({children}: {children: ReactNode}) => {
    return(
        <div>
            <Card
                className="rounded-md bg-gradient-to-r from-gray-100 to-blue-100 shadow-2xl hover:from-rose-200 hover:to-rose-200 my-8 mt-16 md:mt-24 lg:mt-32 md:px-14 lg:px-24 2xl:px-32"

            >
                {children}
            </Card>
        </div>
    )
}


export const LargeCardNoHover = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Card
                className="rounded-md bg-gradient-to-r from-gray-100 to-blue-100 shadow-2xl my-8 mt-16 md:mt-24 lg:mt-32 md:px-14 lg:px-24 2xl:px-32"

            >
                {children}
            </Card>
        </div>
    )
}