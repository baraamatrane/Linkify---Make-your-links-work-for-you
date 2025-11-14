export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: (
        // 👤 "Create" icon — user plus symbol
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mx-auto mb-4 text-blue-600"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx={9} cy={7} r={4} />
          <line x1={19} x2={19} y1={8} y2={14} />
          <line x1={22} x2={16} y1={11} y2={11} />
        </svg>
      ),
      title: "Create",
      description: "Sign up and customize your Linkify page in minutes",
    },
    {
      number: "2",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mx-auto mb-4 text-blue-600"
        >
          <path d="M9 17H7A5 5 0 0 1 7 7h2" />
          <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
          <line x1={8} x2={16} y1={12} y2={12} />
        </svg>
      ),
      title: "Add Links",
      description: "Connect all your important content and social profiles",
    },
    {
      number: "3",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 mx-auto mb-4 text-blue-600"
        >
          <circle cx={18} cy={5} r={3} />
          <circle cx={6} cy={12} r={3} />
          <circle cx={18} cy={19} r={3} />
          <line x1={8.59} x2={15.42} y1={13.51} y2={17.49} />
          <line x1={15.41} x2={8.59} y1={6.51} y2={10.49} />
        </svg>
      ),
      title: "Share",
      description: "Share your unique Linkify URL everywhere",
    },
  ];

  return (
    <section className="py-20 bg-[#f9fbff]">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">How It Works</h2>
        <p className="text-gray-600 mb-12">Get started in three simple steps</p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-72 h-72 flex flex-col items-center justify-center hover:shadow-md transition-all">
                <div className="relative mb-4">
                  <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg mx-auto mb-3">
                    {step.number}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
