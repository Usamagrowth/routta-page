import React from 'react';
import { Route, Car, Clock, TrendingUp } from 'lucide-react';

const Pricing = () => {
  const factors = [
    {
      icon: Route,
      title: "Distance",
      description: "Base fare calculated per kilometer traveled",
    },
    {
      icon: Clock,
      title: "Time",
      description: "Time-based charges for longer trips or traffic delays",
    },
    {
      icon: Car,
      title: "Vehicle Type",
      description: "Different rates for bikes, cars, and vans",
    },
    {
      icon: TrendingUp,
      title: "Traffic Conditions",
      description: "Dynamic pricing during peak hours",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600 uppercase mb-4">
            Transparent Pricing
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Fair and Clear Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Know what you'll pay before you ride
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 border border-emerald-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">How Pricing Works</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Estimated fares are calculated based on multiple factors to ensure fair pricing for both riders and drivers. You'll always see your estimated fare before confirming your ride.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {factors.map((factor) => {
                const Icon = factor.icon;
                return (
                  <div key={factor.title} className="text-center">
                    <div className="inline-flex rounded-xl bg-white p-4 text-emerald-600 mb-3 shadow-sm">
                      <Icon size={28} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{factor.title}</h4>
                    <p className="text-sm text-gray-600">{factor.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Final fare may vary based on actual route taken and traffic conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
