import { useState } from 'react';
import { MapPin, Car, Bike, Bus, Van, ArrowRight} from 'lucide-react';
import Button from './Button';

const Hero = () => {
  const [vehicleType, setVehicleType] = useState('car');

  const vehicles = [
    { id: 'bike', icon: Bike, label: 'Bike' },
    { id: 'car', icon: Car, label: 'Car' },
    { id: 'bus', icon: Bus, label: 'Bus' },
    { id: 'van', icon: Van, label: 'Van' },
  ];

  return (
    <section id="hero" className="py-20 lg:py-32 bg-linear-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Ride Smarter{" "}
                <span className="text-emerald-500">
                  Across Africa
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Fast, secure, and reliable transportation with bikes, cars, and vans—all in one app.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" href="#booking">
                Book a Ride
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="outline" size="lg" href="#download">
                Get Notified
              </Button>
            </div>
          </div>

          {/* Phone Mockup with Booking Card */}
          <div className="relative">
            <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl max-w-sm mx-auto">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Phone Header */}
                <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">R</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Routta</span>
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                </div>

                {/* Booking Card */}
                <div className="p-6 space-y-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
                    <input
                      type="text"
                      placeholder="Pickup location"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Destination"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none"
                    />
                  </div>

                  {/* Vehicle Selection */}
                  <div className="grid grid-cols-4 gap-2">
                    {vehicles.map((vehicle) => {
                      const Icon = vehicle.icon;
                      return (
                        <button
                          key={vehicle.id}
                          onClick={() => setVehicleType(vehicle.id)}
                          className={`p-3 rounded-xl border-2 transition-all ${
                            vehicleType === vehicle.id
                              ? 'border-emerald-500 bg-emerald-50'
                              : 'border-gray-200'
                          }`}
                        >
                          <Icon className={`mx-auto ${vehicleType === vehicle.id ? 'text-emerald-600' : 'text-gray-400'}`} size={20} />
                          <p className={`text-xs mt-1 ${vehicleType === vehicle.id ? 'text-emerald-600 font-medium' : 'text-gray-500'}`}>
                            {vehicle.label}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  <button className="w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold text-sm hover:bg-emerald-600 transition-colors">
                    Continue
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    Complete booking in the app
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
