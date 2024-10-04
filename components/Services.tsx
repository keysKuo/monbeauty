// import Image from "next/image";
import Heading from "./Heading";
import Banner from "./Banner";
import Image from 'next/image';

import service1 from '@/public/nail-file.png';
import service2 from '@/public/manicure.png';
import service3 from '@/public/therapy.png';

export default function Services() {
    return (
        <section className="w-full mb-16">
            <Heading title="Nổi bật" />
            <div className="w-full bg-secondary mb-20">
                <Banner />
            </div>

            <Heading title="Dịch vụ" />
            <div className="w-full py-6">
                <div className="flex items-center justify-center gap-3">
                    <div className="w-[33%] px-3 flex flex-col items-center justify-center text-center">
                        <div className="w-[50px] h-[50px] rounded-full border border-zinc-700">
                            <Image src={service1} alt="service1" />
                        </div>
                        <p className="uppercase text-[1.25rem] py-4">DỊCH VỤ CHĂM SÓC MÓNG</p>
                        <p className="text-sm">Đây là dịch vụ phổ biến mà bất cứ tiệm nail nào cũng có trong không gian vui vẻ và ấm cúng.</p>
                    </div>
                    <div className="border-r border-l border-zinc-400 h-[250px] w-[33%] px-3 flex flex-col items-center justify-center text-center">
                        <div className="w-[50px] h-[50px] rounded-full border border-zinc-700">
                            <Image src={service2} alt="service1" />
                        </div>
                        <p className="uppercase text-[1.25rem] py-4">DỊCH VỤ DESIGN MÓNG</p>
                        <p className="text-sm">Hãy đến và trải nghiệm dịch vụ sơn, vẽ móng tay chân tại Mon Beauty để cảm nhận sự khác biệt.</p>
                    </div>
                    <div className="w-[33%] px-3 flex flex-col items-center justify-center text-center">
                        <div className="w-[50px] h-[50px] rounded-full border border-zinc-700">
                            <Image src={service3} alt="service1" />
                        </div>
                        <p className="uppercase text-[1.25rem] py-4">DỊCH VỤ CHĂM SÓC DA</p>
                        <p className="text-sm">Bao gồm các dịch vụ về Massage, Gội đầu, Wax,… trong không gian yên tĩnh, nhẹ nhàng và thoải mái.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
