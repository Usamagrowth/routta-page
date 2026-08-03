import { Shield, Zap } from 'lucide-react';
import { CiRoute } from "react-icons/ci";
import { FaWallet } from "react-icons/fa6";

const About = () => {
  const values = [
  {
    title: "Safety",
    icon: Shield,
    description:
      "We prioritize the safety of commuters and transporters with verified transport providers and live trip tracking from pickup to destination."
  },
  {
    title: "Affordability",
    icon: FaWallet,
    description:
      "Transparent kilometer-based pricing ensures fair, competitive fares with no hidden costs."
  },
  {
    title: "Flexibility",
    icon: CiRoute,
    description:
      "Choose the transport option that best suits your journey, including motorcycles, cars, buses, and vans."
  },
  {
    title: "Efficiency",
    icon: Zap,
    description:
      "We strive to deliver reliable transportation with quick response times and prompt resolution whenever issues arise."
  }
];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

    {/* Left Content */}
    <div>
      <p className="text-sm font-semibold tracking-[0.3em] uppercase text-emerald-600 mb-4">
        About Routta
      </p>

      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
        Moving Africa Forward
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Routta is a digital mobility platform that connects commuters with
        verified transporters, making it easy to book motorcycles, cars,
        buses, and vans for a wide range of transportation needs.
        Built on trust, safety, transparency, and accountability,
        Routta delivers a secure and reliable experience for both commuters
        and transport providers.
      </p>

      {/* Mission */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Mission
        </h3>

        <p className="text-gray-600 leading-relaxed">
          To offer swift ride-hailing services at affordable rates while
          prioritizing our customers' safety.
        </p>
      </div>

      {/* Vision */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Vision
        </h3>

        <p className="text-gray-600 leading-relaxed">
          To become an exemplar in delivering unmatched ride-hailing
          services across Africa and beyond.
        </p>
      </div>

      {/* USP */}
      <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Why Routta?
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Routta provides a safe, affordable, and flexible mobility
          experience by connecting users with verified transporters
          across motorcycles, cars, buses, and vans. With transparent
          kilometer-based pricing and live trip tracking, we help every
          journey feel safer, fairer, and more reliable.
        </p>
      </div>
    </div>

    {/* Right Image */}
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop"
        alt="Routta transportation"
        className="rounded-3xl shadow-xl object-cover"
      />
    </div>

  </div>

  {/* Core Values */}
  <div className="mb-10 text-center">
    <p className="text-sm font-semibold tracking-[0.3em] uppercase text-emerald-600">
      Our Core Values
    </p>

    <h2 className="mt-3 text-3xl font-bold text-gray-900">
      Built Around What Matters Most
    </h2>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {values.map((value) => {
      const Icon = value.icon;

      return (
        <div
          key={value.title}
          className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-emerald-300 transition-all duration-300"
        >
          <div className="inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-600 mb-4">
            <Icon size={28} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {value.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            {value.description}
          </p>
        </div>
      );
    })}
   </div>
   </div>
  </section>
  );
};

export default About;
