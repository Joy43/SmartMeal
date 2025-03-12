import BannerSection from "@/components/modules/home/Banner";
import HeroSection from "@/components/modules/home/HeroSection";
import MealPlans from "@/components/modules/home/MealPlans";
import MealWorkflow from "@/components/modules/home/MealWorkflow";
import NewsletterSignup from "@/components/modules/home/NewsletterSignup/NewsletterSignup";


const HomePage = () => {
  return (
    <div className="mt-32">
        <BannerSection/>
     <HeroSection/>
     <MealWorkflow/>
     <MealPlans/>
     <NewsletterSignup/>
    </div>
  )
}

export default HomePage;
