import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { FiUpload, FiImage, FiAlertCircle } from 'react-icons/fi';
import { FaLeaf, FaSpinner } from 'react-icons/fa';
import { detectDisease } from '../services/api';

const PredictPage = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  
  const onDrop = useCallback((acceptedFiles) => {
    setError('');
    setResult(null);
    
    const selectedFile = acceptedFiles[0];
    
    if (!selectedFile) return;
    
    if (!selectedFile.type.includes('image/jpeg') && !selectedFile.type.includes('image/png')) {
      setError('Please upload a valid image file (JPG or PNG)');
      return;
    }
    
    setFile(selectedFile);
    
    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    maxFiles: 1
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select an image to upload');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Call the API to detect disease
      const response = await detectDisease(file);
      
      // Set the result from the API response
      setResult(response);
    } catch (err) {
      // Avoid logging the full error object to prevent cloning issues
      console.log('Error in component:', err.message || 'Unknown error');
      
      // Fallback to demo data if API fails (for demo purposes only)
      if (process.env.NODE_ENV === 'development') {
        // This is just for demonstration when the API is not available
        const fallbackResult = {
          disease: 'Late Blight (Demo Mode)',
          confidence: 0.95,
          description: 'API Error: Using demo data. Late blight is a devastating disease that affects tomatoes and potatoes. It is caused by the fungus-like organism Phytophthora infestans.',
          treatment: [
            'Remove and destroy infected plant parts',
            'Apply fungicide containing chlorothalonil or copper',
            'Ensure proper spacing between plants for air circulation',
            'Avoid overhead watering to reduce leaf wetness'
          ]
        };
        setResult(fallbackResult);
        setError('API Error: Using demo data for demonstration purposes.');
      } else {
        setError('Error processing your image. Please try again later or contact support if the issue persists.');
      }
    } finally {
      setLoading(false);
    }
  };
  
  const resetForm = () => {
    setFile(null);
    setPreview('');
    setResult(null);
    setError('');
  };
  
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
              Plant Disease Detection
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Upload an image of your plant leaf, and our AI will analyze it to identify any diseases and provide treatment recommendations.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              {!result ? (
                <form onSubmit={handleSubmit}>
                  <div 
                    {...getRootProps()} 
                    className={`dropzone border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${
                      isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'
                    }`}
                  >
                    <input {...getInputProps()} />
                    
                    {preview ? (
                      <div className="space-y-4">
                        <div className="relative w-64 h-64 mx-auto">
                          <img 
                            src={preview} 
                            alt="Preview" 
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <p className="text-primary-600 font-medium">
                          {file.name} ({(file.size / 1024).toFixed(2)} KB)
                        </p>
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            resetForm();
                          }}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Remove image
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          <FiUpload className="text-4xl text-primary-500" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-gray-700">
                            {isDragActive ? 'Drop the image here' : 'Drag & drop your plant image here'}
                          </p>
                          <p className="text-gray-500 mt-2">or click to browse files</p>
                        </div>
                        <p className="text-sm text-gray-500">
                          Supported formats: JPG, PNG
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {error && (
                    <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
                      <FiAlertCircle className="mr-2" />
                      {error}
                    </div>
                  )}
                  
                  <div className="mt-6 flex justify-center">
                    <button 
                      type="submit" 
                      className="btn btn-primary px-8 py-3 flex items-center justify-center"
                      disabled={!file || loading}
                    >
                      {loading ? (
                        <>
                          <FaSpinner className="animate-spin mr-2" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <FiImage className="mr-2" />
                          Analyze Image
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="rounded-lg overflow-hidden border border-gray-200">
                        <img 
                          src={preview} 
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
                            <p className="text-lg font-medium text-red-600">{result.disease}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-500">Confidence</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                              <div 
                                className="bg-primary-600 h-2.5 rounded-full" 
                                style={{ width: `${result.confidence * 100}%` }}
                              ></div>
                            </div>
                            <p className="text-right text-sm mt-1">{(result.confidence * 100).toFixed(1)}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-primary-800 mb-2">
                        Disease Information
                      </h3>
                      <div 
                        className="text-gray-700"
                        dangerouslySetInnerHTML={{ __html: result.description }}
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-primary-800 mb-2">
                        Treatment Recommendations
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {result.treatments && result.treatments.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6 flex justify-between">
                    <button 
                      onClick={resetForm}
                      className="btn btn-secondary"
                    >
                      Analyze Another Image
                    </button>
                    
                    <button 
                      className="btn btn-primary"
                      onClick={() => window.print()}
                    >
                      Save Results
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary-800 mb-4">
                Tips for Better Results
              </h2>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Take clear, well-lit photos of the affected plant parts
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Include both healthy and diseased portions in the same image for comparison
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Capture multiple angles if the symptoms appear on different parts
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Avoid shadows or glare on the plant surface
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  For best results, take close-up photos that clearly show the symptoms
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PredictPage;