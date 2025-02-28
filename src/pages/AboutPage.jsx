import { motion } from 'framer-motion';
import { FaLeaf, FaCode, FaDatabase, FaRobot, FaUsers, FaVirus } from 'react-icons/fa';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Plant Pathologist',
      image: '/images/team-member-1.jpg',
      bio: 'Dr. Johnson specializes in plant disease identification and has contributed her expertise to develop the disease classification system.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'AI Engineer',
      image: '/images/team-member-2.jpg',
      bio: 'Michael leads the development of our machine learning models, focusing on improving detection accuracy and expanding the range of identifiable diseases.'
    }
  ];
  
  const technologies = [
    {
      id: 1,
      name: 'React',
      description: 'Frontend framework for building the user interface',
      icon: <FaCode className="text-primary-500 text-2xl" />
    },
    {
      id: 2,
      name: 'TensorFlow',
      description: 'Machine learning framework for disease detection model',
      icon: <FaRobot className="text-primary-500 text-2xl" />
    },
    {
      id: 3,
      name: 'FastAPI',
      description: 'Backend API for handling image processing and predictions',
      icon: <FaDatabase className="text-primary-500 text-2xl" />
    }
  ];
  
  const commonDiseases = [
    {
      id: 1,
      name: 'Late Blight',
      crops: 'Tomato, Potato',
      description: 'Caused by Phytophthora infestans, it appears as dark, water-soaked spots on leaves that quickly enlarge and turn brown with a green-gray edge.'
    },
    {
      id: 2,
      name: 'Powdery Mildew',
      crops: 'Cucumber, Squash, Roses, Grapes',
      description: 'Appears as white powdery spots on leaves and stems, eventually covering the entire surface and causing yellowing and distortion.'
    },
    {
      id: 3,
      name: 'Black Spot',
      crops: 'Roses, Apple',
      description: 'Circular black spots with fringed margins appear on leaves, which eventually yellow and drop prematurely.'
    },
    {
      id: 4,
      name: 'Bacterial Leaf Spot',
      crops: 'Peppers, Tomatoes, Lettuce',
      description: 'Small, dark, water-soaked spots on leaves that enlarge and turn reddish-brown with a yellow halo.'
    },
    {
      id: 5,
      name: 'Fusarium Wilt',
      crops: 'Tomato, Banana, Cotton',
      description: 'Soil-borne fungus that causes yellowing of leaves, often on one side of the plant, followed by wilting and plant death.'
    },
    {
      id: 6,
      name: 'Rust',
      crops: 'Wheat, Beans, Coffee',
      description: 'Appears as rusty, orange-red to brown pustules on leaves and stems, causing tissue death and defoliation.'
    },
    {
      id: 7,
      name: 'Downy Mildew',
      crops: 'Grapes, Cucumbers, Spinach',
      description: 'Yellow to white spots on leaf surfaces with fuzzy gray-purple growth on the undersides of leaves.'
    },
    {
      id: 8,
      name: 'Anthracnose',
      crops: 'Beans, Cucumbers, Tomatoes',
      description: 'Dark, sunken lesions on leaves, stems, and fruits, often with concentric rings and salmon-colored spore masses.'
    },
    {
      id: 9,
      name: 'Verticillium Wilt',
      crops: 'Eggplant, Tomato, Potato',
      description: 'Soil-borne fungus causing yellowing and wilting of leaves from the bottom up, often with V-shaped lesions.'
    },
    {
      id: 10,
      name: 'Fire Blight',
      crops: 'Apple, Pear, Quince',
      description: 'Bacterial disease causing blackened, withered branches that appear as if scorched by fire, with bacterial ooze in wet conditions.'
    }
  ];
  
  return (
    <div className="py-12 bg-primary-50 min-h-screen">
      <div className="container">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              About PlantGuard
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Learn about our mission to help farmers and gardeners protect their plants through AI-powered disease detection.
            </p>
          </div>
          
          {/* Project Overview */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4 flex items-center">
                <FaLeaf className="text-primary-600 mr-2" />
                Project Overview
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  PlantGuard is an AI-powered plant disease detection application designed to help farmers, gardeners, and agricultural professionals identify plant diseases quickly and accurately. By simply uploading a photo of an affected plant, users receive instant disease identification and treatment recommendations.
                </p>
                <p>
                  Our mission is to reduce crop losses due to plant diseases, which account for approximately 40% of global agricultural losses annually. By providing accessible, accurate disease detection tools, we aim to support sustainable farming practices and food security worldwide.
                </p>
                <p>
                  The project combines expertise in plant pathology with advanced machine learning techniques to create a reliable, user-friendly solution for plant disease management.
                </p>
              </div>
            </div>
          </section>
          
          {/* Technical Implementation */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4 flex items-center">
                <FaCode className="text-primary-600 mr-2" />
                Technical Implementation
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">
                    Machine Learning Model
                  </h3>
                  <p className="text-gray-700">
                    Our disease detection system uses a convolutional neural network (CNN) trained on a dataset of over 50,000 images of healthy and diseased plant leaves across various crop species. The model achieves 95% accuracy in identifying common plant diseases and is continuously improved with new data.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">
                    Technologies Used
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {technologies.map((tech) => (
                      <div key={tech.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          {tech.icon}
                          <h4 className="font-medium ml-2">{tech.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">
                    System Architecture
                  </h3>
                  <p className="text-gray-700">
                    The application follows a client-server architecture where the frontend handles user interactions and image uploads, while the backend processes images, runs the prediction model, and returns results. This separation allows for scalability and easier maintenance.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Top 10 Common Plant Diseases */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4 flex items-center">
                <FaVirus className="text-primary-600 mr-2" />
                Top 10 Common Plant Diseases
              </h2>
              
              <div className="space-y-6">
                {commonDiseases.map((disease) => (
                  <div key={disease.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <h3 className="text-xl font-semibold text-primary-700">{disease.name}</h3>
                    <p className="text-primary-500 text-sm mb-2">Affects: {disease.crops}</p>
                    <p className="text-gray-700">{disease.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* References and Resources */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                References and Resources
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">
                    Research Papers
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <a href="#" className="text-primary-600 hover:underline">
                        "Deep Learning for Plant Disease Detection: A Comprehensive Review"
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:underline">
                        "Convolutional Neural Networks for Visual Recognition of Plant Diseases"
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:underline">
                        "Automated Identification of Plant Diseases Using Mobile Capture Devices"
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">
                    Datasets
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <a href="#" className="text-primary-600 hover:underline">
                        PlantVillage Dataset
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:underline">
                        Plant Pathology 2020 Challenge Dataset
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Future Development */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                Future Development Plans
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  We are continuously working to improve PlantGuard and expand its capabilities. Our future development plans include:
                </p>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>Expanding the range of detectable plant diseases and crop types</li>
                  <li>Developing a mobile application for offline disease detection</li>
                  <li>Implementing a community feature where users can share knowledge and experiences</li>
                  <li>Creating a historical tracking system for monitoring disease progression</li>
                  <li>Integrating with weather data to provide preventive recommendations</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Contact */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                Contact Us
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  We welcome feedback, questions, and collaboration opportunities. Get in touch with our team:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-primary-700 mb-2">Email</h3>
                    <p>contact@plantguard.com</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-primary-700 mb-2">Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <p className="mt-4">
                  For partnership inquiries or technical support, please email us with details about your request, and we'll respond within 48 hours.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;