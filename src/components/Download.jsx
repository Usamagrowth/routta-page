import { Smartphone, Apple} from 'lucide-react';
import { FaInstagram, FaXTwitter, FaFacebook } from 'react-icons/fa6';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const Download = () => {
  return (
    <section id="download" className="py-20 lg:py-32 bg-linear-to-r from-emerald-500 to-teal-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              The Future of Mobility Starts Here
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Routta is launching soon. Download the app once it becomes available on Google Play and the App Store. Until then, stay connected for launch updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-xl hover:bg-gray-100 transition-colors">
                <Apple className='text-emerald-600' size={32} />
                <div className="text-left">
                  <p className="text-xs text-gray-600">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-xl hover:bg-gray-100 transition-colors">
                <IoLogoGooglePlaystore className='text-emerald-600' size={32} />
                <div className="text-left">
                  <p className="text-xs text-gray-600">Get it on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </button>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Smartphone size={16} />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 rounded-3xl p-8">
              <div className="text-center">
                <Smartphone className="mx-auto text-white mb-4" size={64} />
                <h3 className="text-2xl font-bold text-white mb-2">Get Notified</h3>
                <p className="text-white/80 mb-6">
                  Sign up to be the first to know when Routta launches
                </p>
                <div className="flex flex-col md:flex-row sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
           <div>
           <h3 className="text-2xl font-bold p-2 text-white">Follow Us</h3>
            <div className="flex space-x-4 p-2">
              <a
                href="https://facebook.com/routta"
               target="_blank"
               rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-black transition-colors"
               >
               <FaFacebook className='text-emerald-600' size={20} />
              </a>
             <a
               href="https://instagram.com/routta_africa"
               target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-black transition-colors"
              >
              <FaInstagram className='text-emerald-600' size={20} />
               </a>
               <a
                 href="https://twitter.com/routta_africa"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-black transition-colors"
             >
           <FaXTwitter className='text-emerald-600' size={20} />
           </a>
          </div>
         </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
