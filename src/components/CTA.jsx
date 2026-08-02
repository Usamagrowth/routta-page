import { ArrowRight } from 'lucide-react';
import Button from './Button';

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-emerald-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Be Among the First to Experience Routta
            </h2>
            <p className="text-lg text-white/90">
              We're building something special. Join our waitlist to get early access, exclusive launch benefits, and help shape the future of mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Join Waitlist
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-white">🚀</p>
                <p className="text-sm text-white/90 mt-1">Launching Soon</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-white">🎯</p>
                <p className="text-sm text-white/90 mt-1">Early Access</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-white">💎</p>
                <p className="text-sm text-white/90 mt-1">Exclusive Benefits</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-white">🌟</p>
                <p className="text-sm text-white/90 mt-1">Be First</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
