'use client'

import Joi from 'joi';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import emailjs from '@emailjs/browser';
import { TextInput, Box, Button } from '@mantine/core';
import { MyTextArea, MyTextInput } from '@/components/reUsables/formInputs';
import { SectionHeadingText } from '@/components/display/textsDisplays';



const hello = "try new deployment"



// const schema = Joi.object({
//     name: Joi.string().min(3).message("Name shoud have at least 3 letters"),
//     email: Joi.string()
//         .email({ tlds: { allow: false } })
//         .message('Invalid email'),
//     subject: Joi.string().min(5)
//         .message("Subject must have at least 5 characters"),
//     message: Joi.string().min(10)
//         .message("Subject must have at least 5 characters"),
// })


type FormValues = {
    // firstName: string
    // lastName: string
    // email: string
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

    // const { handleSubmit, control } = useForm({
    //     defaultValues: {
    //         username: "",
    //         email: "",
    //         subject: "",
    //         message: ""
    //     }
    // })










    // const templateParams = {
    //     name: 'James',
    //     notes: 'Check this out!'
    // };

    // const templateParams = {
    //     sender_name: 'James',
    //     sender_email: 'Check this out!',
    //     message: "",
    //     subject: ""
    // };

    // const onSubmit = async (data: FormValues) => {
        // emailjs.send(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, templateParams, `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`)
        //     .then((response) => {
        //         console.log('SUCCESS!', response.status, response.text);
        //     }, (err) => {
        //         console.log('FAILED...', err);
        //     });

    //     console.log('these are values', data)
    // }

    return (
        <div className="lg:container mx-auto lg:px-52">

            <div className='flex justify-center my-16'>
                <SectionHeadingText text="Contact Me" />
            </div>

            <div className='mx-4'>
                <Box component='form' onSubmit={form.onSubmit(() => { })}
                    className='flex flex-col gap-8'
                >


                    {/* <MyTextInput
                        label="Name"
                        {...form.getInputProps('name')}
                    /> */}

                    <TextInput
                        label="Your job"
                        placeholder="Your job"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps('name')}

                        />



                    <MyTextInput
                        label="Email"
                        {...form.getInputProps('email')}
                    />



                    <MyTextInput
                        label="Subject"
                        {...form.getInputProps('subject')}


                    />



                    <MyTextArea
                        label="Message"
                        {...form.getInputProps('message')}


                    />


                    <Button
                        fullWidth
                        className='bg-zinc-800'
                        type='submit'
                    >
                        Send message
                    </Button>




                </Box>
            </div>



        </div>
    )
}