'use client'

import { MantineProvider } from "@mantine/core"
import { ReactNode } from "react"
import '@mantine/core/styles.css';
import 'tailwindcss/tailwind.css'

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <MantineProvider >
            {children}
        </MantineProvider>
    )
}