// src/data/posts.ts

export type Post = {
  id: number;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1656103743123-b9990915d523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbGlmZXN0eWxlJTIwcGhvdG98ZW58MXx8fHwxNzU5MjM0OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "New summer collection is here! Can't wait to share these gorgeous pieces with you all ✨",
    likes: 3241,
    comments: 189,
    tags: ["fashion", "summer", "style"],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1706208224221-0944db693705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB2YWNhdGlvbiUyMGJlYWNofGVufDF8fHx8MTc1OTIzNDk2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "Paradise found 🌴 This beach is everything I dreamed of and more! Already missing this view",
    likes: 2876,
    comments: 234,
    tags: ["travel", "beach", "vacation"],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600555379885-08a02224726d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcmVzdGF1cmFudCUyMG1lYWx8ZW58MXx8fHwxNzU5MTU3NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "Brunch goals achieved! 🥐 This avocado toast is pure perfection. Recipe coming soon!",
    likes: 1945,
    comments: 156,
    tags: ["food", "brunch", "healthy"],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1756115484694-009466dbaa67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NTkxNzY0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "Morning workout complete! 💪 Nothing beats that post-gym glow. What's your favorite way to stay active?",
    likes: 2134,
    comments: 198,
    tags: ["fitness", "workout", "motivation"],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1688955665338-fb430ff8436d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBza2luY2FyZSUyMG1ha2V1cHxlbnwxfHx8fDE3NTkxNDU2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "Skincare Sunday essentials ✨ These products have been game-changers for my routine!",
    likes: 1789,
    comments: 145,
    tags: ["beauty", "skincare", "selfcare"],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1589986993357-6f9a171e02d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGUlMjBmYXNoaW9ufGVufDF8fHx8MTc1OTIyNjYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "Feeling like a million bucks in this outfit 💫 Sometimes you just need to dress up for yourself",
    likes: 3567,
    comments: 267,
    tags: ["luxury", "fashion", "ootd"],
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1709380146556-0444c4eb61ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjYWZlJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc1OTIzNDk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "Coffee shop vibes ☕ Perfect spot for getting work done and people watching",
    likes: 1456,
    comments: 89,
    tags: ["coffee", "lifestyle", "work"],
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1720850539227-a84a044be66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNlbGVicmF0aW9uJTIwbmlnaHR8ZW58MXx8fHwxNzU5MjM0OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "Saturday night done right! 🎉 Thanks to everyone who came out to celebrate with us",
    likes: 2789,
    comments: 234,
    tags: ["party", "celebration", "friends"],
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1542974237-b6bab7588a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBvdXRkb29yJTIwaGlraW5nfGVufDF8fHx8MTc1OTIxODAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption:
      "Nature therapy session complete 🌲 Nothing beats a good hike to clear the mind",
    likes: 1987,
    comments: 167,
    tags: ["nature", "hiking", "outdoors"],
  },
];
