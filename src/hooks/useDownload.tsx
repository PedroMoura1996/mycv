import { useState } from 'react';

export const useDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadFile = async (url: string, filename: string) => {

    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
      
    } catch (error) {
      console.error('Download failed:', error);
      throw error; // Re-throw to allow caller to handle the error
    } finally {
      setIsDownloading(false);
    }
  };

  return { downloadFile, isDownloading };
};