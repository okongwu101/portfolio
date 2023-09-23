'use client'

import { Tooltip } from "@mantine/core";
import { ReactNode } from 'react';

type myTooltipProps = {
    label: string;
    children: ReactNode;
}

export default function MyTooltip(props: myTooltipProps) {
    return (
        <Tooltip label={props.label}>
            {props.children}
        </Tooltip>
    )
}