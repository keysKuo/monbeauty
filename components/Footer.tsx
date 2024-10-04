import React from "react";
import GoogleMap from "./GoogleMap";
import Link from "next/link";

export default function Footer() {
    return (
        <section>
            <div className="w-full h-[300px] bg-zinc-700 flex items-center justify-center">
                <div className="w-[65%] mx-auto py-10 relative">
                    <h1 className="text-[2rem] uppercase text-white py-2">Vì sao nên chọn Mon Beauty</h1>
                    <li className="text-white py-2 text-lg">Cam kết bảo hành miễn phí trong mọi trường hợp</li>
                    <li className="text-white py-2 text-lg">Không gian sang trọng, yên tĩnh,sạch sẽ</li>
                    <li className="text-white py-2 text-lg">Cập nhật mẫu nail và công nghệ mới</li>

                    <Link
                        href="https://zalo.me/0909402710"
                        target="_blank"
                        className="xl:flex hidden text-center py-2 px-10 text-[1.6rem] text-white border-4 border-white absolute right-14 top-[40%] hover:bg-zinc-800">
                        Liên hệ đặt lịch
                    </Link>
                </div>


            </div>
            <div className="w-full bg-base-200">
                <footer className="footer xl:w-[65%] w-full mx-auto lg:max-h-[400px] bg-base-200 text-base-content py-10 xl:px-0 px-10 text-center">
                    <nav>
                        {/* <Image className="w-36 rounded-full mb-5" src={logo} alt="logo"/> */}
                        <div className="max-w-[20vw]">
                            <span className="font-marcellus text-red-400 uppercase text-[2.7rem]">
                                MON
                            </span>
                            <span className="font-marcellus text-[2rem] uppercase leading-10">
                                {" "}
                                Beauty salon
                            </span>
                            <br />
                            <p className="my-3 text-justify leading-6">
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
                        <a className="link link-hover">9:00 - 21:00</a>
                    </nav>

                    <nav>
                        {/* <Image className="w-48" src={logo} alt="map" /> */}
                        <GoogleMap />
                    </nav>
                </footer>
            </div>

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
