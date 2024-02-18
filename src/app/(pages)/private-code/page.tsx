import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function PrivateCodePrompt() {
    return(
        <div className="flex flex-col justify-center items-center h-screen gap-28 mx-4">
            <p className="font-sans font-medium text-2xl md:text-4xl text-center">The code is private and only available on request.</p>
            
            <Link
                href="/contact-form"
            >
                <Button variant="filled"
                    className="bg-teal-900"
                    size="xl"
                >
                    Contact Me
                </Button>

            </Link>
        </div>
    )
}