'use client';

import React from "react";
import GoogleMap from "./GoogleMap";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { useWebConfigContext } from "@/providers/WebConfigProvider";

export default function Footer() {
    const config = useWebConfigContext();

    return (
        <section>
            <div className="w-full bg-base-200">
                <footer className="footer desktop:w-[65%] w-full mx-auto laptop:max-h-[400px] bg-base-200 text-base-content py-10 desktop:px-0 px-10 text-center">
                    <nav>
                        {/* <Image className="w-36 rounded-full mb-5" src={logo} alt="logo"/> */}
                        <div className="laptop:max-w-[25vw] w-full">
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
                            <div className="flex flex-col items-start justify-center gap-2 my-6" >
                                <div className="flex items-center gap-2">
                                    <HiLocationMarker size={20} />
                                    <p className="truncate">{config.address}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <HiPhone size={20} />
                                    <p>{config.phone}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <HiEnvelope size={20} />
                                    <p>{config.email}</p>
                                </div>
                            </div>
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
                        <a className="link link-hover">{config.working_hours}</a>
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
                        reserved by SUD Technology
                    </p>
                </aside>
            </footer>
        </section>
    );
}
