import WheelComponent from "@/components/Wheel";
import Image from "next/image";

export default function Home() {
  return (
    
      <div className="grid grid-cols-1 justify-items-center p-8">
        <div className="grid grid-cols-1 justify-items-center">
          <Image className="rounded-2xl" src="/images/logo_PYME_Movilnet.jpg" alt="Logo PYME Movilnet" width={200} height={100}/>
          <h1 className="text-3xl">Ruleta de la Suerte Movilnet</h1>
        </div>
        <div className="block">
          <WheelComponent/>
        </div>
        
      </div>


  );
}
