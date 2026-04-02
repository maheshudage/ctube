export function getRecommendedVideos(videos) {
  
  // Step 1: sort by views (highest first)
  const sorted = [...videos].sort((a, b) => b.views - a.views);

  // Step 2: return top videos
  return sorted;

}