import axios from 'axios';

// Base API configuration
const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  }
});

// API for plant disease detection
export const detectDisease = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('file', imageFile);
    
    const response = await api.post('/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    // Parse the disease info from the response
    const predictionParts = response.data.prediction.split('___');
    const crop = predictionParts[0];
    const condition = predictionParts[1];
    
    // Extract disease information from HTML content
    const diseaseInfo = response.data.disease_info;
    
    return {
      disease: condition === 'healthy' ? 'No Disease Detected' : condition.replace(/_/g, ' '),
      confidence: 0.95, // API doesn't provide confidence, using default
      description: diseaseInfo || 'No detailed description available.',
      treatments: condition === 'healthy' 
        ? ['Continue regular maintenance and monitoring.'] 
        : [
            'Remove and destroy infected plant parts',
            'Apply appropriate fungicide or treatment',
            'Ensure proper spacing between plants for air circulation',
            'Maintain proper watering practices'
          ]
    };
  } catch (error) {
    // Avoid using console.error directly with the error object
    // as it may contain non-cloneable properties like Symbols
    console.log('Error detecting disease:', error.message || 'Unknown error');
    throw new Error(error.message || 'Failed to process image');
  }
};

export default api;