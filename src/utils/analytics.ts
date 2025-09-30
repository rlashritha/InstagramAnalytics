// src/utils/analytics.ts

export function getAnalytics(data: { likes: number; comments: number }[]) {
  const totalPosts = data.length;
  const totalLikes = data.reduce((sum, post) => sum + post.likes, 0);
  const totalComments = data.reduce((sum, post) => sum + post.comments, 0);
  
  const avgLikes = Math.round(totalLikes / totalPosts);
  const avgComments = Math.round(totalComments / totalPosts);

  // Example engagement rate formula: ((avgLikes + avgComments) / 100)
  const engagementRate = Number(
    (((avgLikes + avgComments) / 100).toFixed(1))
  );

  return { avgLikes, avgComments, engagementRate };
}
