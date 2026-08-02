import { Heart, Users, Shield, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Making Transportation Easier",
      description: "We're simplifying mobility across Africa with technology that works for everyone.",
    },
    {
      icon: Users,
      title: "Connecting Communities",
      description: "Bridging the gap between riders and drivers to create better transportation networks.",
    },
    {
      icon: Shield,
      title: "Supporting Local Drivers",
      description: "Empowering local drivers with tools to grow their businesses and earn more.",
    },
    {
      icon: Zap,
      title: "Building Safe Technology",
      description: "Prioritizing safety and reliability in every feature we develop.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600 uppercase mb-4">
              About Routta
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Routta is on a mission to make transportation across Africa easier, faster, safer, more reliable, more affordable, and more accessible. We believe everyone deserves access to quality transportation that connects them to opportunities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By connecting riders with trusted drivers using bikes, cars, and vans, we're creating a transportation ecosystem that serves the unique needs of African cities and communities.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop" 
              alt="African city transportation" 
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 transition-all duration-300"
              >
                <div className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-600 mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
