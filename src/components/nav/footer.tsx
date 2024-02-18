'use client'


import { IconCopyright, IconMail, IconPhoneCall } from '@tabler/icons-react';
import dayjs from 'dayjs'
import React from "react";



export default function Footer() {

    // get the current year for display in footer
    const currentYear = dayjs().year() // gets current year
    

    let yearDisplay: string = ""

    if (currentYear === 2023) {
        yearDisplay = currentYear.toString()
    } else {
        yearDisplay = `2023 - ${currentYear.toString()}`
    }






    return (
        <div className="flex items-center justify-center bg-orange-200 h-64">

            <div className='flex flex-col gap-8 items-center justify-center'>
                <div className='flex flex-col md:flex-row gap-4'>

                    <div className="flex flex-row gap-4 items-center">
                        <IconMail />
                        <div className='font-mono font-medium text-lg lg:text-xl'>phiprof@gmail.com</div>
                    </div>

                    <div className="flex flex-row gap-4 items-center">
                        <IconPhoneCall />
                        <div className='font-mono font-medium text-lg lg:text-xl'>+234-8064197236</div>
                    </div>


                </div>

                <div className="flex flex-row gap-2 items-center font-mono font-medium">
                    <IconCopyright 
                    size={16}
                    fontWeight="bold"
                    />
                    <div className='font-medium'>{yearDisplay}</div>
                    <div className='ml-4 font-sans text-lg lg:text-xl font-medium text-rose-600'>Dr Nnam Tochukwu</div>
                </div>


            </div>

           
          
          
               


                


           
        </div>
    )
}