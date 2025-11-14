function Features() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-500 mb-4"
        >
          <path d="M9 17H7A5 5 0 0 1 7 7h2" />
          <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
          <line x1={8} x2={16} y1={12} y2={12} />
        </svg>
      ),
      title: "All-in-One Link",
      description:
        "Share unlimited links to your content, socials, and products from one beautiful page.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-500 mb-4"
        >
          <line x1={18} x2={18} y1={20} y2={10} />
          <line x1={12} x2={12} y1={20} y2={4} />
          <line x1={6} x2={6} y1={20} y2={14} />
        </svg>
      ),
      title: "Actionable Analytics",
      description:
        "Track clicks, traffic sources, and engagement with powerful real-time analytics.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-500 mb-4"
        >
          <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
          <line x1={1} x2={23} y1={10} y2={10} />
        </svg>
      ),
      title: "Sell & Monetize",
      description:
        "Accept payments, sell products, and collect tips directly through your Linkify page.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-10 w-10 text-blue-500 mb-4"
        >
          <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
          <line x1={3} x2={21} y1={9} y2={9} />
          <line x1={9} x2={9} y1={21} y2={9} />
        </svg>
      ),
      title: "Beautiful Templates",
      description:
        "Choose from professionally designed templates or customize your own unique style.",
    },
  ];

  return (
    <div className="flex flex-col md:p-20 p-12 justify-center items-center">
      <h1 className="md:text-5xl text-4xl font-semibold">
        Everything You Need
      </h1>
      <p className="text-lg text-gray-600 md:max-w-[540px] mt-4 mb-10 text-center">
        Powerful features to help you grow your audience and monetize your
        content
      </p>
      <div className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
