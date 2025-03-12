import Image from "next/image";
const NewsletterSignup = () => {

  return (
    <section className="bg-green-600 py-12 px-6 flex flex-col items-center text-center">
      <h2 className="text-white text-4xl font-semibold italic">Subscribe</h2>
      <h3 className="text-white text-2xl font-bold mt-2">
        SIGN UP FOR OUR NEWSLETTER
      </h3>
      <p className="text-white mt-3">
        Be the first to know about the latest product news & get exclusive offers.
      </p>

      <form
        
        className="mt-6 flex flex-col sm:flex-row items-center gap-3"
      >
        <div className="relative bg-white rounded-2xl">
          <input
            type="email"
         
            placeholder="Enter your email..."
            required
            className="w-80 sm:w-96 p-3 rounded-full border-none outline-none text-gray-800"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            ⬤
          </span>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition"
        >
          Subscribe
        </button>
      </form>

      <Image src="https://feedy.jwsuperthemes.com/wp-content/uploads/2023/09/footer_slalas.png" width={300} height={300} alt="SmartMeal">

      </Image>
    </section>
  );
};

export default NewsletterSignup;
