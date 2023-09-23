'use client'

import { TextInput, Textarea } from "@mantine/core"
import { ReactNode, RefCallback } from "react";
import { Controller } from "react-hook-form"


type TextInputProps = {
    label: ReactNode;
}
export const MyTextInput = (props: TextInputProps) => {
 
    return (
        <div>
            
            <TextInput
                label={props.label}
                required
                withAsterisk
                size="lg"        
                // error
                classNames={{
                    wrapper: "",
                    input: "",
                    label: "",
                    root: "",
                    required: "",
                    description: "",
                    error: "",
                }}
            />
        </div>
    )
}

type TextAreaProps = {
    label: ReactNode;
}
export const MyTextArea = (props: TextAreaProps) => {
    return (
        <div>

            <Textarea
                autosize
                minRows={5}
                label={props.label}
                required
                // error
                withAsterisk
                classNames={{
                    wrapper: "",
                    input: "",
                    label: "",
                    root: "",
                    required: "",
                    description: "",
                    error: "",
                }}
            />

        </div>
    )
}