import React from 'react';
import { ShieldCheck, MapPin, Phone, Lock, Eye, UserCheck, Share2 } from 'lucide-react';

const Safety = () => {
  const safetyFeatures = [
    {
      icon: UserCheck,
      title: "Identity Verification",
      description: "All drivers undergo comprehensive identity verification before joining the platform.",
    },
    {
      icon: Share2,
      title: "Trip Sharing",
      description: "Share your live trip location with trusted contacts for added peace of mind.",
    },
    {
      icon: Phone,
      title: "Emergency Contact Support",
      description: "Quick access to emergency support and assistance whenever you need it.",
    },
    {
      icon: Eye,
      title: "Ride History",
      description: "Access your complete ride history for transparency and accountability.",
    },
    {
      icon: ShieldCheck,
      title: "Driver Verification",
      description: "Multi-step verification process including background checks and vehicle inspection.",
    },
    {
      icon: MapPin,
      title: "GPS Route Tracking",
      description: "Real-time GPS tracking ensures you always know your route and location.",
    },
    {
      icon: Lock,
      title: "Privacy-Focused Design",
      description: "Your personal information is protected with advanced security measures.",
    },
  ];

  return (
    <section id="safety" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600 uppercase mb-4">
            Your Safety Matters
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Safety First, Always
          </h2>
          <p className="text-lg text-gray-600">
            Multiple layers of protection to ensure every journey is secure
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-emerald-300 transition-all duration-300"
              >
                <div className="inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Safety;
