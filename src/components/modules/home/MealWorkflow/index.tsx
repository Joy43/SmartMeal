'use client';



const steps = [
  {
    icon: "🍽️",
    title: "CHOOSE YOUR MEALS",
    description: "30+ menu of all-natural dishes.",
  },
  {
    icon: "🏍️",
    title: "WE COOK & DELIVER",
    description: "Cooked by chefs and sent fresh.",
  },
  {
    icon: "📺",
    title: "YOU HEAT EM' UP",
    description: "30+ menu of all-natural dishes.",
  },
  {
    icon: "🍽️",
    title: "EAT & REPEAT",
    description: "Skip a week or cancel at any time.",
  },
];

export default function MealWorkflow() {
  return (
    <section className="py-12 bg-[#f6faef] text-center">
      <h2 className="text-4xl font-bold">
        <span className="text-red-500 italic text-5xl">Process </span>
        HOW IT WORKS
      </h2>
      <p className="text-gray-600 mt-2 max-w-lg mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium molestie.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-lg border hover:shadow-2xl transition-all"
          >
            <span className="text-5xl">{step.icon}</span>
            <h3 className="text-lg font-bold mt-4">{step.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}