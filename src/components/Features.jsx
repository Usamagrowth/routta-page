import { MapPin, ShieldCheck, Wallet, BarChart3, Zap, Headphones } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Ride Coordination",
      description: "Connect riders and drivers instantly with live tracking, transparent ETAs, and smart matching for every trip.",
    },
    {
      icon: ShieldCheck,
      title: "Built-in Trust & Safety",
      description: "Protect every journey with verified onboarding, trip monitoring, and responsive support when issues arise.",
    },
    {
      icon: Wallet,
      title: "Seamless Payments",
      description: "Offer secure wallet-based transactions, quick payments, and reliable trip summaries without friction.",
    },
    {
      icon: BarChart3,
      title: "Operational Visibility",
      description: "Give admins and business teams tools to manage trips, pricing, disputes, promotions, and reporting from one place.",
    },
    {
      icon: Zap,
      title: "Smart Dispatch",
      description: "AI-powered trip assignment that optimizes routes, reduces wait times, and maximizes driver efficiency.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service with real-time issue resolution and dedicated account management.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600 uppercase mb-4">
            Platform Capabilities
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Everything You Need to Scale
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive tools designed to support every aspect of your mobility business
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
