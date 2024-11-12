import React, { Fragment } from "react";
import Heading from "./Heading";
import Image from "next/image";
import nailImg1 from "@/public/service9.jpg";
import nailImg2 from "@/public/service11.jpg";
import nailImg3 from "@/public/service7.jpg";
import nailImg4 from "@/public/service10.jpg";
import nailImg5 from "@/public/service6.jpg";
import nailImg6 from "@/public/service1.jpg";
import Banner from "./Banner";
import { API_URL } from "@/constants";

export default async function Products() {
    const banners = await fetch(API_URL + '/api/banners?sort[0]=order:asc&filters[display][$eq]=true&populate[photo][fields][0]=url', { cache: 'no-store' })
        .then(response => response.json())
        .then(result => result.data)

    return (
        <section className="w-full">
            <Fragment>
                <Heading title="Nổi bật" />
                <div className="w-full bg-secondary mb-20">
                    <Banner images={banners || ""} />
                </div>

                <Heading title={"Sản phẩm"} />

                <div className="flex flex-row gap-3 my-10">
                    <div className="w-[33%] flex flex-col gap-3">
                        <Image
                            className="shadow-md rounded-md"
                            src={nailImg1}
                            alt="=="
                        />
                        <Image
                            className="shadow-md rounded-md"
                            src={nailImg2}
                            alt="=="
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 my-4">
                        <Image
                            className="shadow-md rounded-md"
                            src={nailImg3}
                            alt="=="
                        />
                        <Image
                            className="shadow-md rounded-md"
                            src={nailImg4}
                            alt="=="
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 mt-[-10px]">
                        <Image
                            className="shadow-md rounded-md"
                            src={nailImg5}
                            alt="=="
                        />
                        <Image
                            className="shadow-md rounded-md"
                            src={nailImg6}
                            alt="=="
                        />
                    </div>
                </div>
            </Fragment>
        </section>
    );
}
