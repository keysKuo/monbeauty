import Introduce from "@/components/Introduce";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Videos from "@/components/Videos";

export default function Home() {
    return <div className="w-full min-h-[100svh] ">
        <Introduce />

        <Products />

        <Videos />

        <Services />
    </div>;
}
