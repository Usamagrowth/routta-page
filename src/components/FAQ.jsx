import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Routta work?",
      answer: "Routta connects you with verified drivers for bikes, cars, and vans. Simply enter your pickup and destination, choose your vehicle type, and get matched with a nearby driver. Complete your booking through our mobile app.",
    },
    {
      question: "Which vehicles are available?",
      answer: "We offer three vehicle types: Bike for quick trips through traffic, Car for comfortable everyday travel, and Van for groups, airport transfers, and larger luggage.",
    },
    {
      question: "Can I schedule rides?",
      answer: "Scheduled rides will be available in the Routta app. You'll be able to book rides in advance for specific times and dates.",
    },
    {
      question: "How is pricing calculated?",
      answer: "Fares are estimated based on distance, time, vehicle type, and traffic conditions. You'll see your estimated fare before confirming your ride. Final fare may vary based on actual route and conditions.",
    },
    {
      question: "How do I become a driver?",
      answer: "Driver registration will be available through the Routta app. Drivers undergo verification including identity checks, vehicle inspection, and background checks before joining the platform.",
    },
    {
      question: "Which cities will Routta launch in?",
      answer: "We're launching in select African cities initially, with plans to expand rapidly. Join our waitlist to be notified when we launch in your area.",
    },
    {
      question: "How can I report an issue?",
      answer: "You can report issues through the Routta app or contact our support team. We have 24/7 support available for safety concerns and ride-related issues.",
    },
    {
      question: "Is Routta safe?",
      answer: "Safety is our top priority. All drivers are verified, trips can be tracked in real-time, and we offer emergency contact support. We also provide trip sharing features and ride history for transparency.",
    },
    {
      question: "When will the app launch?",
      answer: "Routta is launching soon. Download the app once it becomes available on Google Play and the App Store. Sign up for our waitlist to get launch updates.",
    },
    {
      question: "How do I download the app?",
      answer: "The Routta app will be available on Google Play and the App Store once we launch. Visit our download section or sign up for notifications to be alerted when the app is available.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600 uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about Routta
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-emerald-600" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
