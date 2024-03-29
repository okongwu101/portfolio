
'use client'

import { SectionHeadingText } from '@/components/display/textsDisplays';
import emailjs from '@emailjs/browser';
import { Button, TextInput, Textarea } from '@mantine/core';
import { hasLength, isEmail, useForm } from '@mantine/form';
import React from "react";


type FormValues = {
    name: string;
    subject: string;
    email: string;
    message: string;
}

export default function ContactForm() {


    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },

        validate: {
            // name: hasLength({ min: 3, }, 'Name must be at least 3 characters long'),
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: isEmail('Invalid email'),
            subject: hasLength({ min: 5, }, 'Subject must have at least 5 characters long'),
            message: hasLength({ min: 1, }, 'Message is required')
        },
    })



    const onSubmit = async (data: FormValues) => {
        emailjs.send(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, {
            sender_name: data.name,
            sender_email: data.email,
            message: data.message,
            subject: data.subject
        }, `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`)
            .then(() => {
               
                form.reset()
            }, () => {
               
            });
    }

    return (
        <div className="lg:container mx-auto lg:px-52">

            <div className='flex justify-center my-16'>
                <SectionHeadingText text="Contact Me" />
            </div>



            <div className='mx-4'>
                <form noValidate onSubmit={
                    form.onSubmit((values) => {
                      
                        onSubmit(values)
                    })}
                    className='flex flex-col'
                >

                    <TextInput
                        label="Name"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps('name')}
                    />

                    <TextInput
                        label="Email"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps('email')}
                    />

                    <TextInput
                        label="Subject"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps('subject')}
                    />

                    <Textarea
                        label="Message"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps('message')}
                    />

                    <div className='flex flex-row gap-4 mt-6'>
                        <Button
                            fullWidth
                            className='bg-zinc-800'
                            type='reset'
                            onClick={() => {
                                form.reset()

                            }}
                        >
                            Reset
                        </Button>

                        <Button
                            fullWidth
                            className='bg-zinc-800'
                            type='submit'
                        >
                            Send message
                        </Button>

                    </div>






                </form>
            </div>



        </div>
    )
}