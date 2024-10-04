import Image from "next/image";
import React from "react";

import intro1 from "@/public/intro1.jpg";
import intro2 from "@/public/intro6.jpg";
import intro3 from "@/public/intro13.jpg";
import logo from "@/public/logo.jpg";


export default function Introduce() {
    return (
        <section className="container mx-auto lg:py-20 py-10">
            <div className="flex lg:flex-row flex-col-reverse gap-3">
                <div className="lg:w-[30%] w-full mr-5 lg:text-start text-center">
                    <h2 className="xl:text-[5rem] text-[3.7rem] mb-[-30px] uppercase font-marcellus">
                        Beauty
                    </h2>
                    <p className="xl:text-[5rem] text-[3.7rem] uppercase font-marcellus">
                        & Nail
                    </p>
                    <span className="text-red-400 xl:text-[1.5rem] text-[1.25rem] uppercase">Mon</span>{" "}
                    <span className="xl:text-[1.5rem] text-[1.25rem] uppercase">
                        Beauty Studio
                    </span>

                    <p className="xl:mt-14 mt-8 xl:text-base text-sm text-zinc-500">
                        Beautiful salon in SaiGon with high quality services and
                        warm atmosphere.
                    </p>

                    <button className="mt-10 px-8 py-4 rounded-md bg-secondary hover:bg-primary text-zinc-700 relative">
                        <span>Book lịch hẹn</span>
                    </button>
                </div>
                <div className="lg:w-[70%] w-full mr-5 flex gap-3">
                    <div className="w-[40%]">
                        <Image
                            className="drop-shadow-md rounded-md shadow-lg hover:scale-[1.03] transition-all duration-300"
                            src={intro1}
                            alt="intro1"
                        />
                    </div>
                    <div className="w-[25%] space-y-2">
                        <Image
                            className="rounded-md shadow-lg drop-shadow-md my-10 hover:scale-[1.03] transition-all duration-300"
                            src={intro2}
                            alt="intro2"
                        />
                    </div>
                    <div className="w-[30%] space-y-3 ">
                        <Image
                            className="rounded-md shadow-lg drop-shadow-md hover:scale-[1.03] transition-all duration-300"
                            src={logo}
                            alt="intro5"
                        />
                        <Image
                            className="rounded-md shadow-lg drop-shadow-md hover:scale-[1.03] transition-all duration-300"
                            src={intro3}
                            alt="intro4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
