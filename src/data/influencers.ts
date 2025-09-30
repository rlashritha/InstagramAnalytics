// influencer.ts

export type InfluencerStatus = "trending" | "available" | "upcoming" | "ended";

export interface Influencer {
  id: string;
  name: string;
  username: string;
  profileImage: string;
  followers: string;
  posts: string;
  engagementRate: string;
  category: string;
  location: string;
  status: InfluencerStatus;
}

export const mockInfluencers: Influencer[] = [
  {
    id: "1",
    name: "Emma Rodriguez",
    username: "emmastyle",
    profileImage:
      "https://images.unsplash.com/photo-1626709694505-76cbb919f6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaW5mbHVlbmNlciUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5MjM1NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    followers: "2.4M",
    posts: "1,247",
    engagementRate: "4.8%",
    category: "Fashion",
    location: "New York, US",
    status: "trending",
  },
  {
    id: "2",
    name: "Jake Thompson",
    username: "wanderlust_jake",
    profileImage:
      "https://images.unsplash.com/photo-1554400695-5973d75d179e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBibG9nZ2VyJTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5MjM1NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    followers: "890K",
    posts: "2,103",
    engagementRate: "6.2%",
    category: "Travel",
    location: "Los Angeles, US",
    status: "available",
  },
  {
    id: "3",
    name: "Sophie Chen",
    username: "sophielifestyle",
    profileImage:
      "https://images.unsplash.com/photo-1674308994133-6b7e13a30ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBibG9nZ2VyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkyMzU0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    followers: "1.6M",
    posts: "856",
    engagementRate: "5.1%",
    category: "Lifestyle",
    location: "Toronto, CA",
    status: "upcoming",
  },
  {
    id: "4",
    name: "Marcus Johnson",
    username: "fitnessmarcus",
    profileImage:
      "https://images.unsplash.com/photo-1660557989710-1a91e7e89d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaW5mbHVlbmNlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTIzNTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    followers: "3.2M",
    posts: "1,945",
    engagementRate: "7.3%",
    category: "Fitness",
    location: "Miami, US",
    status: "trending",
  },
  {
    id: "5",
    name: "Chef Isabella",
    username: "chef_isabella",
    profileImage:
      "https://images.unsplash.com/photo-1710438602879-7a8b325612ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmxvZ2dlciUyMGNoZWYlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkyMzU0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    followers: "1.9M",
    posts: "2,367",
    engagementRate: "5.8%",
    category: "Food",
    location: "San Francisco, US",
    status: "available",
  },
  {
    id: "6",
    name: "Aria Beauty",
    username: "ariabeauty",
    profileImage:
      "https://images.unsplash.com/photo-1632765891235-d2b594870a99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBpbmZsdWVuY2VyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkyMzU0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    followers: "4.1M",
    posts: "1,583",
    engagementRate: "6.9%",
    category: "Beauty",
    location: "London, UK",
    status: "ended",
  },
  {
    id: "7",
    name: "David Park",
    username: "davidtravels",
    profileImage:
      "https://images.unsplash.com/photo-1554400695-5973d75d179e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBibG9nZ2VyJTIwbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5MjM1NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    followers: "756K",
    posts: "1,892",
    engagementRate: "4.3%",
    category: "Travel",
    location: "Sydney, AU",
    status: "upcoming",
  },
  {
    id: "8",
    name: "Luna Martinez",
    username: "lunafashion",
    profileImage:
      "https://images.unsplash.com/photo-1626709694505-76cbb919f6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwaW5mbHVlbmNlciUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5MjM1NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    followers: "1.3M",
    posts: "967",
    engagementRate: "5.5%",
    category: "Fashion",
    location: "Paris, FR",
    status: "available",
  },
];
 //export { mockInfluencers };