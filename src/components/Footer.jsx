
const Footer = () => {

     return(
       <footer className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4"> 
              <h3  className="font-semibold mb-4 text-gray-900">Routta</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Making transportation easier, faster, and more accessible across Africa.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">About</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#about" className="hover:text-emerald-600 transition-colors">About Routta</a></li>
                <li><a href="#services" className="hover:text-emerald-600 transition-colors">Services</a></li>
                <li><a href="#safety" className="hover:text-emerald-600 transition-colors">Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Support</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</a></li>
               </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2026 Routta. All rights reserved.</p>
          </div>
        </div>
      </footer>
     )
};

export default Footer;