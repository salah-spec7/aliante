// Helper function for asset paths
export const getAssetPath = (path: string) => {
  // In production, assets are at root level
  // In development, assets are at /aliante/ level
  if (process.env.NODE_ENV === 'production') {
    return path;
  }
  return `/aliante${path}`;
};

// Export a hook for React components
export const useAssetPath = () => {
  return getAssetPath;
};
