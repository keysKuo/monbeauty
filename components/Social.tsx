import Link from "next/link";
import { LuPhoneCall, LuYoutube } from "react-icons/lu";
import { RiMessengerLine } from "react-icons/ri";
import { SiZalo, SiTiktok } from "react-icons/si";

export default function Social() {
	return (
		<div
			className="fixed-contact flex flex-col items-center justify-center
        bg-[#202020] fixed z-[1000] right-[-4px] top-[80%] translate-y-[-50%]
        transition-all duration-300 rounded-l-[30px] px-2 py-4"
		>
			<Link
				className="phone-ring w-[36px] h-[36px] leading-[36px] rounded-[30px]
          bg-[#202020] relative my-1 flex items-center justify-center text-[#71B190]
          hover:text-[#71B190]"
				href="tel:0909402710"
				target="_blank"
			>
				<LuPhoneCall size="23" />
			</Link>
			<Link
				className="w-[36px] h-[36px] leading-[36px] rounded-[30px]
          bg-[#202020] relative my-1 flex items-center justify-center text-[#ccc]
          hover:text-[#9F33FF] hover:translate-y-[-4px] transition-all duration-300 ease"
				href="https://m.me/101213069498192"
				target="_blank"
			>
				<RiMessengerLine size="25" />
			</Link>
			<Link
				className="w-[36px] h-[36px] leading-[36px] rounded-[30px]
          bg-[#202020] relative my-1 flex items-center justify-center text-[#ccc]
          hover:text-[#5FBDFF] hover:translate-y-[-4px] transition-all duration-300 ease"
				href="#"
				target="_blank"
			>
				<SiZalo size="25" />
			</Link>
			<Link
				className="w-[36px] h-[36px] leading-[36px] rounded-[30px]
          bg-[#202020] relative my-1 flex items-center justify-center text-[#ccc]
          hover:text-[#FF304F] hover:translate-y-[-4px] transition-all duration-300 ease"
				href="#"
				target="_blank"
			>
				<SiTiktok size="20" />
			</Link>
		</div>
	);
}
