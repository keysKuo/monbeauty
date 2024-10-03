import Introduce from "@/components/Introduce";
import Popular from "@/components/Popular";
import Services from "@/components/Services";
import Videos from "@/components/Videos";

export default function Home() {
    return <div className="w-full min-h-[100svh] ">
        <Introduce />
        <Services />
        <Popular />

        <Videos />
    </div>;
}
