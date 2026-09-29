export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Tell Us What You Need",
      desc: "Call our travel assistance line and describe your flight booking, change, or travel question."
    },
    {
      num: 2,
      title: "Discuss Your Options",
      desc: "Our team will help you understand available options, fares, and airline policies."
    },
    {
      num: 3,
      title: "Review Rules & Charges",
      desc: "We'll explain applicable rules, fees, and any charges before you make a decision."
    },
    {
      num: 4,
      title: "Decide How to Proceed",
      desc: "You decide whether to proceed with booking, changes, or other actions."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-12">How It Works</h2>
        
        <div className="relative flex flex-col md:flex-row gap-8 justify-between">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#2563eb] -z-10 -translate-y-1/2 opacity-20"></div>
          
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center flex-1 bg-gray-50 p-4">
              <div className="w-16 h-16 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg z-10 border-4 border-gray-50">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-sm text-gray-500 italic max-w-3xl mx-auto">
          Note: Airlines control their own fares, availability, and policies. We provide assistance and information to help you navigate your options.
        </div>
      </div>
    </section>
  );
}
