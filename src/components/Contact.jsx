import { useState } from 'react';
import { Mail, MapPin, } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTiktok, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-600 uppercase mb-4">
            Contact Us
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none resize-none"
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold hover:bg-emerald-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:hello@routta.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
                      hello@routta.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Across Africa</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
                   <h3 className="text-2xl font-bold p-2 text-white">Follow Us</h3>
                    <div className="flex space-x-4 p-2">
                      <a href="https://www.facebook.com/share/1Cbbez1EyL/"
                       target="_blank"
                       rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-black transition-colors"
                       >
                       <FaFacebook className='text-emerald-600' size={20} />
                      </a>
                     <a href="https://instagram.com/routta_africa"
                       target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-black transition-colors"
                      >
                      <FaInstagram className='text-emerald-600' size={20} />
                       </a>
                       <a href="https://twitter.com/routta_africa"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-black transition-colors"
                     >
                   <FaXTwitter className='text-emerald-600' size={20} />
                   </a>
                   <a href="https://www.tiktok.com/@routta_africa"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-black transition-colors"
                     >
                   <FaTiktok className='text-emerald-600' size={20} />
                   </a>
                   <a href="https://whatsapp.com/channel/0029VbCe5ed545unxMgdQT2M"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-black transition-colors"
                     >
                   <FaWhatsapp className='text-emerald-600' size={20} />
                   </a>
                  </div>
                  </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
