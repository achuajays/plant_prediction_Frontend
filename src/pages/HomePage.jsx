import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf, FaChartLine, FaSearchPlus, FaCloudSun } from 'react-icons/fa';
import { useRef } from 'react';

const HomePage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect for background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.5]);
  const blurAmount = useTransform(scrollYProgress, [0, 0.5], [2, 5]);
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const stats = [
    { 
      id: 1, 
      value: '40%', 
      label: 'Global crop loss due to plant diseases annually',
      icon: <FaChartLine className="text-primary-500 text-2xl" />
    },
    { 
      id: 2, 
      value: '95%', 
      label: 'Accuracy in disease detection with our AI model',
      icon: <FaSearchPlus className="text-primary-500 text-2xl" />
    },
    { 
      id: 3, 
      value: '60+', 
      label: 'Plant diseases that can be identified',
      icon: <FaLeaf className="text-primary-500 text-2xl" />
    },
    { 
      id: 4, 
      value: '24/7', 
      label: 'Availability for farmers and gardeners worldwide',
      icon: <FaCloudSun className="text-primary-500 text-2xl" />
    }
  ];
  
  const benefits = [
    {
      id: 1,
      title: 'Early Detection',
      description: 'Identify plant diseases before they spread and cause significant damage to your crops.',
      image: 'https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs41598-023-34549-2/MediaObjects/41598_2023_34549_Fig1_HTML.png'
    },
    {
      id: 2,
      title: 'Accurate Diagnosis',
      description: 'Our AI model provides precise identification of plant diseases with detailed information.',
      image: 'https://www.gardeningknowhow.com/wp-content/uploads/2021/05/woman-is-making-an-injection-to-a-tomato-1536x1152.jpg'
    },
    {
      id: 3,
      title: 'Treatment Recommendations',
      description: 'Get expert advice on how to treat identified diseases and prevent future occurrences.',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[80vh] flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-10"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            opacity: overlayOpacity,
            backdropFilter: `blur(${blurAmount}px)`,
            WebkitBackdropFilter: `blur(${blurAmount}px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://wallpapers.com/images/featured/plant-background-mh4y9mexexlv960o.jpg)',
            y: backgroundY
          }}
        ></motion.div>
        
        <div className="container relative z-20 text-white">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Protect Your Plants with AI-Powered Disease Detection
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Upload a photo of your plant and get instant disease identification and treatment recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/predict" 
                className="btn btn-primary text-center"
              >
                Detect Disease Now
              </Link>
              <Link 
                to="/about" 
                className="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 text-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div 
                key={stat.id}
                className="text-center p-6 rounded-lg border border-gray-100 shadow-sm"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary-700 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-primary-50">
        <div className="container">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Why Early Disease Detection Matters
            </h2>
            <p className="text-gray-600 text-lg">
              Plant diseases can devastate crops and gardens if not caught early. Our AI-powered solution helps you identify problems before they spread.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <motion.div 
                key={benefit.id}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: benefit.id * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to protect your plants?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Upload an image of your plant and get instant disease detection and treatment recommendations.
            </p>
            <Link 
              to="/predict" 
              className="btn bg-white text-primary-700 hover:bg-primary-50 text-lg px-8 py-3"
            >
              Try It Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;