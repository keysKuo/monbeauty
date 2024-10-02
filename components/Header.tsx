import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";
import { navlinks } from "@/constants";
import { HiOutlineSearch  } from "react-icons/hi";

export default function Header() {
	return (
		<header className="w-full bg-fourth">
            <div className="navbar mx-auto text-zinc-700 h-24 p-0 ">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						{navlinks.map((nav) => {
							return (
								<li>
									<Link href={nav.url}>{nav.label}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<a className="lg:flex hidden rounded-full text-xl">
					<Image
						className="rounded-full"
						width={70}
						src={logo}
						alt="logo"
					/>
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{navlinks.map((nav) => {
						return (
							<li className="mx-2 uppercase">
								<Link href={nav.url}>{nav.label}</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="navbar-end">
				<a className="mx-4"><HiOutlineSearch size={24}/></a>
			</div>
		</div>
        </header>
	);
}
