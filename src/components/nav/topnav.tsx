'use client'

import { Avatar, Button, Burger, Drawer } from "@mantine/core"
import NavLink from "../display/navLink"
import avatar2 from '../../../public/avatar2.png'
import Image from 'next/image'
import Link from "next/link"
import { useDisclosure } from '@mantine/hooks';
import styles from '../../styles/styles.module.css'
import SideNav from "./sidenav"




export default function TopNav() {
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';
    return (

        <div className={`relative mb-40 z-50`}>
            <div className={`flex flex-row justify-between h-20 md:h-24 lg:h-32 lg:pl-16 px-8 lg:pr-12 m-w-screen items-center fixed top-0 left-0 right-0  ${styles.background}`}>

                <Image
                    src={avatar2}
                    alt="my Avatar"
                    className="w-14 md:w-20 lg:28 h-auto ring-2 ring-offset-4 rounded-md"
                    quality={100}
                    priority={true}
                />

                <div className="flex-row justify-evenly gap-12 items-center hidden lg:flex ">


                    <NavLink href="#home" text="home" />
                    <NavLink href="#about-me" text="about-me" />
                    <NavLink href="#skills" text="skills" />
                    <NavLink href="#apps" text="apps" />
                    <NavLink href="#education" text="education" />
                    <NavLink href="" text="blog" />
                    <Link
                        href="/contact-form"
                    >
                        <Button variant="filled"
                            className="bg-teal-900"
                            size="xl"
                        >
                            Contact Me
                        </Button>
                      
                    </Link>
                </div>

                <div className="lg:hidden">
                    <Burger opened={opened} onClick={toggle} aria-label={label} />
                </div>


            </div>
            <div className="">
                <Drawer
                    opened={opened}
                    onClose={toggle}
                    onClick={toggle}
                    withCloseButton={false}
                    classNames={{ 
                        body: "min-h-screen",
                        // root: "bg-orange-800",
                        // inner: "bg-pink-900"
                    }}
                    styles={{
                        body: { backgroundColor: '#ECF0F3' }
                    }}
                    size="xs"
                >
                    <SideNav />
                </Drawer>
            </div>
        </div>


    )
}