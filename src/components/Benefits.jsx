import { Smartphone, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "For Riders",
      description: "Experience effortless booking with transparent pricing, real-time tracking, and reliable service.",
      items: [
        "Book trips in under 60 seconds",
        "Track rides in real-time",
        "Cashless payments with digital wallet",
        "Share trip status with contacts",
      ],
      icon: Smartphone,
    },
    {
      title: "For Drivers",
      description: "Maximize earnings with flexible scheduling, instant payments, and comprehensive support tools.",
      items: [
        "Set your own schedule",
        "Instant payout options",
        "In-app navigation assistance",
        "Performance insights & tips",
      ],
      icon: Users,
    },
    {
      title: "For Businesses",
      description: "Scale operations with powerful analytics, fleet management, and white-label solutions.",
      items: [
        "Comprehensive dashboard analytics",
        "Fleet management tools",
        "Custom branding options",
        "API integrations",
      ],
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600 uppercase mb-4">
            Tailored Solutions
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Built for Everyone
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're a rider, driver, or business owner, Routta has you covered
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const images = [
              "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
              "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop"
            ];
            return (
              <div
                key={benefit.title}
                className="overflow-hidden rounded-3xl bg-gray-50 border border-gray-200 hover:border-emerald-300 transition-all duration-300"
              >
                <img 
                  src={images[index]} 
                  alt={benefit.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 mb-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                  <ul className="space-y-3">
                    {benefit.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
