export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      image: "/api/placeholder/80/80",
      quote:
        "Linkify transformed how I share my content. My engagement is up 300% since switching!",
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      image: "/api/placeholder/80/80",
      quote:
        "The analytics help me understand my customers better. It's been a game-changer for my business.",
    },
    {
      name: "Alex Rivera",
      role: "Music Artist",
      image: "/api/placeholder/80/80",
      quote:
        "I love how easy it is to share all my music links in one place. My fans find everything they need.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Loved by Creators Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            See what our community has to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover bg-gray-200"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
