'use Client'
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

interface CustomInputProps {
	route: string
	iconPosition: string
	imgSrc: string
	placeholder: string
	otherClass?: string
}

const LocalSearchbar = ({
	route,
	iconPosition,
	imgSrc,
	placeholder,
	otherClass,
}: CustomInputProps) => {
	return (
		<div
			className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClass}`}
		>
			{iconPosition === 'left' && (
				<Image
					src={imgSrc}
					alt="search icon"
					width={24}
					height={24}
					className="cursor-pointer"
				/>
			)}

			<Input
				type="text"
				placeholder={placeholder}
				value=""
				// onChange={()=>{}}
				className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none online-none "
			/>

			{iconPosition === 'right' && (
				<Image
					src={imgSrc}
					alt="search icon"
					width={24}
					height={24}
					className="cursor-pointer"
				/>
			)}
		</div>
	)
}

export default LocalSearchbar
