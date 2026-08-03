import { useState } from 'react';
import { MapPin, Car, Bike, Van, ArrowRight } from 'lucide-react';

const BookingPreview = () => {
  const [vehicleType, setVehicleType] = useState('car');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const vehicles = [
    { id: 'bike', icon: Bike, label: 'Bike', description: 'Fast & affordable' },
    { id: 'car', icon: Car, label: 'Car', description: 'Relaxed ride' },
    { id: 'van', icon: Van, label: 'Van', description: 'For groups' },
  ];

  return (
    <section id="booking" className="py-20 lg:py-32 bg-linear-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600 uppercase mb-4">
            Book Your Ride
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Ready to Go?
          </h2>
          <p className="text-lg text-gray-600">
            Enter your details to get started
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
            {/* Pickup */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Enter pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                />
              </div>
            </div>

            {/* Destination */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Enter destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                />
              </div>
            </div>

            {/* Vehicle Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Vehicle Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {vehicles.map((vehicle) => {
                  const Icon = vehicle.icon;
                  return (
                    <button
                      key={vehicle.id}
                      onClick={() => setVehicleType(vehicle.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        vehicleType === vehicle.id
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <Icon className={`mx-auto mb-2 ${vehicleType === vehicle.id ? 'text-emerald-600' : 'text-gray-400'}`} size={24} />
                      <p className={`text-sm font-medium ${vehicleType === vehicle.id ? 'text-emerald-600' : 'text-gray-600'}`}>
                        {vehicle.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{vehicle.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Estimated Fare */}
            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Estimated Fare</span>
                <span className="text-lg font-semibold text-gray-900">Calculate after route</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                * Fare estimates based on distance, vehicle type, and traffic conditions
              </p>
            </div>

            {/* Continue Button */}
            <button className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
              Continue
              <ArrowRight size={20} />
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Complete your booking in the Routta app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPreview;
