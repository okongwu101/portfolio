'use client'

import Link from "next/link";
import React from "react";

type NavLinkProps = {
    text: string;
    href: string;
}

export default function NavLink(props: NavLinkProps) {
    return(
        <div>
            <Link
                href={props.href}
                className="font-sans text-xs hover:text-base font-semibold hover:font-semibold uppercase hover:text-orange-400"
            >
                {props.text}
            </Link>
        </div>
        
    )
}