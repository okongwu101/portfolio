'use client'

import { Card } from '@mantine/core';
import { IconArrowBigUpLine } from '@tabler/icons-react';
import Link from 'next/link';
import { useViewportSize } from '@mantine/hooks';

export default function GoUp() {
    const { height, width } = useViewportSize()

   
    return (
        <div className='z-50 fixed bottom-4 right-4'>
            <Link
            href="#home"
            >
                <Card
                    className='rounded-lg bg-rose-300 shadow-2xl cursor-pointer hover:scale-110 ease-in-out duration-500'
                >
                    <IconArrowBigUpLine
                        size={width < 768 ? 20 : 40}
                        color='#14532d'
                    />
                </Card>
            </Link>
            
            
        </div>
    )
}