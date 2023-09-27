'use client'

import { IconBrandLinkedin, IconBrandGithub, IconBrandX } from "@tabler/icons-react"
import { SmallCard } from "../display/cards"
import NavLink from "../display/navLink"
import Image from "next/image"
import avatar2 from "../../../public/avatar2.png"
import { IconX } from '@tabler/icons-react';
import { Button, Card, Divider } from "@mantine/core"
import Link from "next/link"


const gap = "Let's bridge the Gap !"
export default function SideNav() {
    return (
        <div>
            <div className="mt-4">
                <div className="flex justify-between items-center">

                    <Image
                        src={avatar2}
                        alt="my Avatar"
                        className="w-14 md:w-20 lg:28 h-auto ring-2 ring-offset-4 rounded-md"
                        quality={100}
                        priority={true}
                    />

                    <div>
                        <Card
                            className="rounded-lg shadow-2xl bg-rose-400"
                        >
                            <IconX />
                        </Card>

                    </div>

                </div>
                <div className="font-sans text-sm font-semibold mt-8">
                    {gap}
                </div>
                <div className="mt-4">
                    <Divider />
                </div>
                
            </div>

            <div className="flex flex-col justify-start gap-4 mt-24">
                <NavLink href="/" text="home" />
                <NavLink href="/about-me" text="about-me" />
                <NavLink href="/skills" text="skills" />
                <NavLink href="/apps" text="apps" />
                <NavLink href="/education" text="education" />
                <NavLink href="/blog" text="blog" />
                <Link
                    href="/contact-form"
                >
                    <Button variant="filled"
                        className="bg-teal-900 my-6"
                        size="md"
                    >
                        Contact Me
                    </Button>

                </Link>



            </div>

            <div className=" bottom-0 mt-32">
                <div className="font-sans text-orange-600 font-semibold text-sm mb-2 md:text-base">
                    find me
                </div>

                <div className="flex justify-start gap-4">

                    <SmallCard
                        link="https://www.linkedin.com/in/nnam-tochukwu/"
                    >
                        <IconBrandLinkedin />
                    </SmallCard>
                    <SmallCard link="https://github.com/okongwu101">
                        <IconBrandGithub />
                    </SmallCard>
                    <SmallCard
                        link="https://twitter.com/Nnam042"
                    >
                        <IconBrandX />
                    </SmallCard>
                </div>
            </div>


        </div>
    )
}