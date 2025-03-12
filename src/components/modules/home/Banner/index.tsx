import { Button } from "@/components/ui/button";
import Image from "next/image";
import {Galindo} from "next/font/google";
const poppins = Galindo({ weight: "400", subsets: ["latin"] });
const BannerSection = () => {
  return (
    <div
      className="container  mx-auto h-[500px] bg-[#FADA06] border-2
       border-white rounded-3xl mt-10"
    >
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="pl-12">
          <h1 className={`text-2xl   font-bold leading-normal ${poppins.className}`}>
            HEALTHY AND DELICIOUS MEALS  <br />DELEVERD STRAIGHT TO YOUR DOOR
          </h1>
          <p className="my-3">
            Save big this Black Friday with unbeatable deals on tech, home
            essentials, fashion, and more! Limited stock.
          </p>

          <Button className="rounded-full mr-2">Buy Now</Button>
          <Button className="rounded-full" variant="outline">
            All Products
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Image width={500} height={400} src="https://feedy.jwsuperthemes.com/wp-content/uploads/2023/09/truefoodkitchen-main-dish.png" alt="food image" />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;