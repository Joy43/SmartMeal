import BannerSection from "@/components/modules/home/Banner";
import HeroSection from "@/components/modules/home/HeroSection";
import MealWorkflow from "@/components/modules/home/MealWorkflow";


const HomePage = () => {
  return (
    <div className="mt-32">
        <BannerSection/>
     <HeroSection/>
     <MealWorkflow/>
     
    </div>
  )
}

export default HomePage;
