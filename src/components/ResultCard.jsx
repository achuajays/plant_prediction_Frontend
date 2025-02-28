import { motion } from 'framer-motion';
import { FaLeaf, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

const ResultCard = ({ result, imageUrl }) => {
  if (!result) return null;
  
  const { disease, confidence, description, treatments } = result;
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                src={imageUrl} 
                alt="Analyzed plant" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
              <div className="flex items-center mb-4">
                <FaLeaf className="text-primary-600 text-xl mr-2" />
                <h3 className="text-xl font-bold text-primary-800">
                  Analysis Results
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Disease Detected</p>
                  <p className="text-lg font-medium text-red-600">{disease}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Confidence</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div 
                      className="bg-primary-600 h-2.5 rounded-full" 
                      style={{ width: `${confidence * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-sm mt-1">{(confidence * 100).toFixed(1)}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-primary-800 mb-2 flex items-center">
              <FaInfoCircle className="text-primary-600 mr-2" />
              Disease Information
            </h3>
            <div 
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-primary-800 mb-2 flex items-center">
              <FaExclamationTriangle className="text-primary-600 mr-2" />
              Treatment Recommendations
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {treatments && treatments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;