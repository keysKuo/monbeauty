import Image from "next/image";
import React from "react";
import logo from "@/public/logo.jpg";
import GoogleMap from "./GoogleMap";

export default function Footer() {
	return (
		<section>
			<footer className="footer lg:max-h-[400px] bg-base-200 text-base-content p-10 text-center">
				<nav>
					{/* <Image className="w-36 rounded-full mb-5" src={logo} alt="logo"/> */}
					<div className="lg:w-[30vw]">
						<span className="font-marcellus text-red-400 uppercase text-[2.7rem]">
							MON
						</span>
						<span className="font-marcellus text-[2rem] uppercase">
							{" "}
							Beauty salon
						</span>
						<br />
						<p className="my-3">
							Cảm ơn quý khách vì đã quan tâm đến website của
							chúng tôi. Nếu quý khách yêu quý, hãy đến và like,
							share cũng như follow cho các nền tảng mạng xã hội
							của{" "}
							<span className="font-marcellus text-red-400">
								MON
							</span>
							. Rất hân hạnh vì được phục vụ cho quý khách...
						</p>
					</div>
				</nav>
				<nav>
					<h6 className="footer-title">Dịch vụ</h6>
					<a className="link link-hover">Làm nail</a>
					<a className="link link-hover">Gồi đầu</a>
					<a className="link link-hover">Chà gót chân</a>
					<a className="link link-hover">Chăm sóc da</a>
				</nav>
				<nav>
					<h6 className="footer-title">Giờ hoạt động</h6>
					<a className="link link-hover">Thứ 2 - Chủ nhật</a>
					<a className="link link-hover">8:00 - 21:00</a>
				</nav>

				<nav>
					{/* <Image className="w-48" src={logo} alt="map" /> */}
                    <GoogleMap />
				</nav>
			</footer>
			<footer className="footer footer-center bg-base-300 text-base-content p-4">
				<aside>
					<p>
						Copyright © {new Date().getFullYear()} - All right
						reserved by SUD Technology Ltd
					</p>
				</aside>
			</footer>
		</section>
	);
}
