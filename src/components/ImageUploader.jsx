import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiX } from 'react-icons/fi';

const ImageUploader = ({ onImageSelect }) => {
  const [preview, setPreview] = useState('');
  const [error, setError] = useState('');
  
  const onDrop = useCallback((acceptedFiles) => {
    setError('');
    
    const selectedFile = acceptedFiles[0];
    
    if (!selectedFile) return;
    
    if (!selectedFile.type.includes('image/jpeg') && !selectedFile.type.includes('image/png')) {
      setError('Please upload a valid image file (JPG or PNG)');
      return;
    }
    
    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);
    
    onImageSelect(selectedFile, previewUrl);
  }, [onImageSelect]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    maxFiles: 1
  });
  
  const clearImage = () => {
    setPreview('');
    onImageSelect(null, '');
  };
  
  return (
    <div className="mb-6">
      <div 
        {...getRootProps()} 
        className={`dropzone ${isDragActive ? 'dropzone-active' : 'border-gray-300 hover:border-primary-400'}`}
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
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  clearImage();
                }}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
              >
                <FiX className="text-gray-700" />
              </button>
            </div>
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
        <div className="mt-2 text-red-600 text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;