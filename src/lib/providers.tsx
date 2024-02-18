'use client'

import { MantineProvider } from "@mantine/core"
import { ReactNode } from "react"
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import 'tailwindcss/tailwind.css'
import '@mantine/notifications/styles.css';
import React from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <MantineProvider >
            <Notifications />
            {children}
        </MantineProvider>
    )
}