'use client';

import { useWebConfigContext } from "@/providers/WebConfigProvider";


type HeadingProps = {
    title: string
}

export default function Heading({ title }: HeadingProps) {
    const config = useWebConfigContext();

	return (
		<section className="w-full flex flex-col items-center justify-center text-center my-5">
			<p className="desktop:text-[1.4rem] text-[1.2rem] uppercase">{title}</p>
			<p className="desktop:text-[2.5rem] text-[2.25rem] mb-1 uppercase">
				<span className="text-red-400 font-marcellus">MON </span>
				<span className="font-marcellus">BEAUTY</span>
			</p>
			<p>{config.slogan}</p>
		</section>
	);
}
