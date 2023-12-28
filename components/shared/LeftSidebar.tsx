'use client'
import React from 'react'
import Image from 'next/image'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetClose,
	SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'

const LeftSidebar = () => {
	const pathname = usePathname()
	// console.log(sidebarLinks)
	return (
		<section className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[226px]">
			<div className="flex flex-1 flex-col gap-6 ">
				{sidebarLinks.map((item) => {
					const isActive =
						(pathname.includes(item.route) &&
							item.route.length > 1) ||
						pathname === item.route
					// const isActive = true

					// TODO

					return (
						// <SheetClose asChild key={item.imgURL}>
						<div key={item.imgURL}>
							<Link
								href={item.route}
								className={`${
									isActive
										? 'primary-gradient rounded-lg text-light-900'
										: 'text-dark300_light900'
								} flex items-center justify-start gap-4 bg-transparent p-4`}
							>
								<Image
									src={item.imgURL}
									alt={item.label}
									width={20}
									height={20}
									className={`${
										isActive ? '' : 'invert-colors'
									}`}
								/>
								<p
									className={`${
										isActive ? 'base-bold' : 'base-medium'
									} max-lg:hidden`}
								>
									{item.label}
								</p>
							</Link>
						</div>

						// </SheetClose>
					)
				})}
			</div>
			<SignedOut>
				<div className="flex flex-col gap-3">
					<Link href="/sign-in">
						<Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
							<Image
								src="/assets/icons/account.svg"
								alt="login"
								width={20}
								height={20}
								className="invert-colors lg:hidden"
							/>
							
							<span className="primary-text-gradient max-lg:hidden">
								Login
							</span>
						</Button>
					</Link>

					<Link href="/sign-up">
						<Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
							<Image
								src="/assets/icons/sign-up.svg"
								alt="Sign Up"
								width={20}
								height={20}
								className="invert-colors lg:hidden"
							/>
							<span className="primary-text-gradient max-lg:hidden">
								Sign Up
							</span>
						</Button>
					</Link>
				</div>
			</SignedOut>
		</section>
	)
}

export default LeftSidebar