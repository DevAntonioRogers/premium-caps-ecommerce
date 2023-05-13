import tests from "@/public/test.jpeg";
import testss from "@/public/testsss.png";
import testers from "@/public/TESTERSS.png";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="relative grid md:grid-rows-2 md:grid-cols-4 grid-cols-1 grid-rows-none gap-4 md:max-h-[500px] h-full ">
      <div className="md:row-start-1 md:col-start-1 md:row-end-2 md:col-end-2 md:h-full h-[300px]">
        <Image className="h-full w-full object-cover" src={tests} alt="test" width={0} height={0} />
      </div>

      <div className=" relative md:row-start-1 md:col-start-2 md:row-end-3 md:col-end-4 md:h-full h-[300px]">
        <Image className="h-full w-full object-cover" src={testers} alt="test" width={0} height={0} />
      </div>

      <div className="md:col-start-4 md:row-end-2 md:col-end-5 md:h-full h-[300px]">
        <Image className="h-full w-full object-cover" src={tests} alt="test" width={0} height={0} />
      </div>

      <div className=" hidden md:block md:row-start-2 md:col-start-4 md:row-end-3 md:col-end-5">
        <Image className="h-full w-full object-cover" src={tests} alt="test" width={0} height={0} />
      </div>

      <div className="hidden md:block md:row-start-2 md:col-start-1 md:row-end-3 md:col-end-2">
        <Image className="h-full w-full object-cover" src={tests} alt="test" width={0} height={0} />
      </div>
    </div>
  );
};

export default Carousel;
