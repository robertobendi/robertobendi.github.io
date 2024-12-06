import { useState, useEffect } from 'react';

const ViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const BIN_ID = '6752c650ad19ca34f8d69320';
    const API_KEY = '$2a$10$bqXAboQ3qzpaJLsOe20us.jlMw1VLoQ8MjTzYMu.JwL9kXYMu5dIW';
    
    const updateViews = async () => {
      try {
        // First get current count
        const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
          headers: {
            'X-Master-Key': API_KEY
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch views');
        }
        
        const data = await response.json();
        console.log('Current data:', data); // Debug log
        
        // Ensure we have a valid views count
        const currentViews = data.record?.views || 0;
        const newViews = currentViews + 1;
        
        // Update count
        const updateResponse = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY,
          },
          body: JSON.stringify({ views: newViews })
        });
        
        if (!updateResponse.ok) {
          throw new Error('Failed to update views');
        }
        
        setViews(newViews);
      } catch (error) {
        console.error('Failed to update views:', error);
      }
    };

    updateViews();
  }, []);

  return (
    <span className="text-gray-500 text-sm">
      👀 {views.toLocaleString()}
    </span>
  );
};

export default ViewCounter;