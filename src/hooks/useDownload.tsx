import { useState } from 'react';

export const useDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadFile = async (url: string, filename: string) => {
    setIsDownloading(true);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/pdf,application/octet-stream,*/*',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      
      // Ensure the blob has the correct MIME type for PDFs
      const correctedBlob = filename.toLowerCase().endsWith('.pdf') 
        ? new Blob([blob], { type: 'application/pdf' })
        : blob;
      
      const downloadUrl = URL.createObjectURL(correctedBlob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      
      // Clean up with a slight delay to ensure download starts
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(downloadUrl);
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