import { Link } from 'react-router-dom';
import { FaLeaf, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaLeaf className="text-primary-300 text-2xl" />
              <span className="text-xl font-bold text-white font-serif">PlantGuard</span>
            </div>
            <p className="text-primary-100 mb-6 max-w-md">
              Helping farmers and gardeners identify and treat plant diseases using advanced AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/predict" className="text-primary-200 hover:text-white transition-colors">Predict</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-200 hover:text-white transition-colors">About</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-primary-200">
              <li>contact@plantguard.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Green Street, Plant City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-6 text-center text-primary-300">
          <p>&copy; {currentYear} PlantGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;