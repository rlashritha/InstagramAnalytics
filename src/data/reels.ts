// src/data/reels.ts

export type Reel = {
  id: number;
  thumbnail: string;
  caption: string;
  views: number;
  likes: number;
  comments: number;
  tags: string[];
};

export const reels: Reel[] = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1656103743123-b9990915d523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbGlmZXN0eWxlJTIwcGhvdG98ZW58MXx8fHwxNzU5MjM0OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Get ready with me for date night ✨",
    views: 45200,
    likes: 3241,
    comments: 189,
    tags: ["grwm", "fashion", "date"]
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1756115484694-009466dbaa67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NTkxNzY0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "5-minute morning workout routine 💪",
    views: 38900,
    likes: 2876,
    comments: 234,
    tags: ["fitness", "workout", "morning"]
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1600555379885-08a02224726d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcmVzdGF1cmFudCUyMG1lYWx8ZW58MXx8fHwxNzU5MTU3NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Perfect avocado toast recipe 🥑",
    views: 52100,
    likes: 4567,
    comments: 312,
    tags: ["food", "recipe", "healthy"]
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1688955665338-fb430ff8436d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBza2luY2FyZSUyMG1ha2V1cHxlbnwxfHx8fDE3NTkxNDU2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "My nighttime skincare routine ✨",
    views: 29800,
    likes: 2134,
    comments: 156,
    tags: ["skincare", "beauty", "routine"]
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1720850539227-a84a044be66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNlbGVicmF0aW9uJTIwbmlnaHR8ZW58MXx8fHwxNzU5MjM0OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Behind the scenes of last night's party 🎉",
    views: 61300,
    likes: 5432,
    comments: 398,
    tags: ["party", "bts", "celebration"]
  }
];
