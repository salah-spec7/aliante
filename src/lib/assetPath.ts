// Helper function for asset paths
export const getAssetPath = (path: string) => {
  // In production, assets are at root level
  // In development, assets are at /aliante/ level
  return process.env.NODE_ENV === 'production' ? path : `/aliante${path}`;
};
