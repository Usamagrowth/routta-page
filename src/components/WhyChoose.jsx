import { Clock, ShieldCheck, MapPin, CreditCard, Share2, Phone, DollarSign, Navigation, Star, Smartphone, Heart } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    { icon: Clock, title: "Fast Pickup", description: "Quick response times to get you moving" },
    { icon: ShieldCheck, title: "Verified Drivers", description: "All drivers undergo thorough verification" },
    { icon: MapPin, title: "Live Trip Tracking", description: "Track your ride in real-time" },
    { icon: CreditCard, title: "Multiple Payment Options", description: "Pay with cash, card, or mobile money" },
    { icon: Share2, title: "Trip Sharing", description: "Share your trip details with loved ones" },
    { icon: Phone, title: "Emergency Assistance", description: "24/7 support for your safety" },
    { icon: DollarSign, title: "Transparent Pricing", description: "Know your fare before you ride" },
    { icon: Navigation, title: "Reliable Navigation", description: "Optimized routes for faster travel" },
    { icon: Star, title: "Driver Ratings", description: "Rate your drivers to maintain quality" },
    { icon: Smartphone, title: "Clean Interface", description: "Easy-to-use app for everyone" },
    { icon: Heart, title: "Designed for Africa", description: "Built for African cities and needs" },
    { icon: DollarSign, title: "Affordable Rides", description: "Competitive pricing for everyone" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600 uppercase mb-4">
            Why Choose Routta
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Built for You
          </h2>
          <p className="text-lg text-gray-600">
            Features designed to make every ride better
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-600 mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
