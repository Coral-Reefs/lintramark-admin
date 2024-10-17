import Image from "next/image";
import { MapProvider } from "../providers/map-provider.js";
import { MapComponent } from "./components/map.js";
import { Card, CardContent } from "@/components/ui/card.jsx";
import TopNav from "./components/TopNav.js";

export default function Home() {
  return (
    <section className="h-screen">
      <TopNav />
      <div className="flex items-center px-32 justify-center mt-10">
        <MapComponent />
        <div className="ms-20">
          <Card className="text-center p-11 mb-4 bg-[#FF784D] text-white">
            <p>On duty</p>
            <h6 className="text-3xl font-bold">20 pax</h6>
          </Card>
          <div className="flex gap-4">
            <Card className="flex items-center justify-center text-center p-16 bg-[#FF784D] text-white">
              <div>
                <p>Area covered</p>
                <h6 className="text-3xl font-bold">30 hectares</h6>
              </div>
            </Card>
            <Card className="flex items-center justify-center text-center p-16 bg-[#FF784D] text-white">
              <div>
                <p>Attendance</p>
                <h6 className="text-4xl font-bold">98%</h6>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
