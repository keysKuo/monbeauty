
type HeadingProps = {
    title: string
}

export default function Heading({ title }: HeadingProps) {
	return (
		<section className="w-full flex flex-col items-center justify-center text-center my-5">
			<p className="text-[1.4rem] uppercase">{title}</p>
			<p className="text-[2.5rem] mb-1 uppercase">
				<span className="text-red-400 font-marcellus">MON </span>
				<span className="font-marcellus">BEAUTY</span>
			</p>
			<p>Choose your life - Choose your style</p>
		</section>
	);
}
