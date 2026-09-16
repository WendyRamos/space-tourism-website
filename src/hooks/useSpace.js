import spaceData from '../services/data.json';

export const useSpace = (category) => {
  
  const content = spaceData[category] || [];
  const loading = false;

  return { content, loading };
};