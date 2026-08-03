import Logo from './Logo';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

 return(
 <nav className="sticky top-0 z-50 bg-emerald-100 backdrop-blur-md border-b border-gray-100">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex items-center  justify-between h-20">
             <Logo className="pr-7" size="medium" />
             
             <div className="hidden md:flex items-center gap-8">
               <a href="#hero" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
                 Home
               </a>
               <a href="#services" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
                 Services
               </a>
               <a href="#safety" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
                 Safety
               </a>
               <a href="#about" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
                 About
               </a>
               <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
                 FAQ
               </a>
              </div>

             <div className="hidden md:flex items-center gap-3">
               <Button variant="primary" size="sm" href="#booking">
                 Book a Ride
               </Button>
               <Button variant="outline" size="sm" href="#download">
                 Get Notified
               </Button>
             </div>

             {/* Mobile: Buttons + Menu Button */}
             <div className="md:hidden flex items-center gap-2">
               <Button variant="primary" size="sm" href="#booking" className="text-xs px-3">
                 Book
               </Button>
               <Button variant="outline" size="sm" href="#download" className="text-xs px-3">
                 Notify
               </Button>
               <button 
                 className="p-2"
                 onClick={() => setIsMenuOpen(!isMenuOpen)}
               >
                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
             </div>
           </div>
         </div>

         {/* Mobile Menu */}
         {isMenuOpen && (
           <div className="md:hidden  bg-white z-40 px-12 py-8 space-y-6 overflow-y-auto">
             <a href="#hero" className="block text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
               Home
             </a>
             <a href="#services" className="block text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
               Services
             </a>
             <a href="#safety" className="block text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
               Safety
             </a>
             <a href="#about" className="block text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
               About
             </a>
             <a href="#faq" className="block text-lg font-medium text-gray-600 hover:text-emerald-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
               FAQ
             </a>
          <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
             </div>
           </div>
         )}
       </nav>

)
};
export default Navbar;