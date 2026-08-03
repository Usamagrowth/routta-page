import { Bike, Car, Bus, Van } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bike,
      title: "Bike Rides",
      description: "Fast transportation through traffic. Perfect for quick trips and navigating congested areas.",
      image: "/bike.jpg",
    },
    {
      icon: Car,
      title: "Car Rides",
      description: "Comfortable everyday travel with professional drivers. Ideal for commuting and city travel.",
      image: "/car.jpg",
    },
    {
      icon: Bus,
      title: "Bus Rides",
      description: "Affordable group transportation for longer distances. Great for commuting and city-to-city travel.",
      image: "bus.jpg",
    },
    {
      icon: Van,
      title: "Van Rides",
      description: "Perfect for groups, airport transfers, and larger luggage. Spacious and convenient.",
      image: "van.jpg",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600 uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Choose Your Ride
          </h2>
          <p className="text-lg text-gray-600">
            From bikes to vans, we have the perfect vehicle for every journey
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl bg-white border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex rounded-xl bg-white/90 p-3 text-emerald-600">
                      <Icon size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
