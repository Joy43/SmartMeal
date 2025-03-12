import BannerSection from "@/components/modules/home/Banner";
import HeroSection from "@/components/modules/home/HeroSection";
import MealWorkflow from "@/components/modules/home/MealWorkflow";
import NewsletterSignup from "@/components/modules/home/NewsletterSignup/NewsletterSignup";


const HomePage = () => {
  return (
    <div className="mt-32">
        <BannerSection/>
     <HeroSection/>
     <MealWorkflow/>
     <NewsletterSignup/>
    </div>
  )
}

export default HomePage;
