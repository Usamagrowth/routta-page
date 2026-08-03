import { Rocket, Shield, MapPin, Users } from 'lucide-react';

const Trust = () => {
  const trustItems = [
    {
      icon: Rocket,
      title: "Launching Soon",
      description: "Be among the first to experience the future of African mobility",
    },
    {
      icon: Users,
      title: "Join Early Access",
      description: "Sign up for exclusive launch updates and early access benefits",
    },
    {
      icon: MapPin,
      title: "Built for Africa",
      description: "Designed specifically for African cities and transportation needs",
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Your safety and privacy are at the core of everything we build",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-linear-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Trust Routta
          </h2>
          <p className="text-lg text-gray-600">
            We're building a platform you can rely on
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trust;
