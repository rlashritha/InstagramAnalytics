// src/data/likesCommentsChart.ts

export type TrendPoint = {
  post: string;
  likes: number;
  comments: number;
};

export const chartData: TrendPoint[] = [
  { post: "1", likes: 1250, comments: 89 },
  { post: "2", likes: 2100, comments: 156 },
  { post: "3", likes: 1890, comments: 134 },
  { post: "4", likes: 2750, comments: 201 },
  { post: "5", likes: 1980, comments: 167 },
  { post: "6", likes: 3200, comments: 234 },
  { post: "7", likes: 2890, comments: 189 },
  { post: "8", likes: 2156, comments: 145 },
];
