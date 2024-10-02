import Image from "next/image";
import Heading from "./Heading";
import Banner from "./Banner";

export default function Services() {
	return (
		<section className="w-full mb-20">
            <Heading title="Dịch vụ" />
			<div className="w-full bg-secondary">
                <Banner />
            </div>
		</section>
	);
}
