// components/InfluencerProfileCard.tsx
import React from "react";

interface InfluencerProfileProps {
  name: string;
  username: string;
  profileImage: string;
  followers: string;
  following: string;
  posts: string;
}

const InfluencerProfileCard: React.FC<InfluencerProfileProps> = ({
  name,
  username,
  profileImage,
  followers,
  following,
  posts,
}) => {
  return (
    <div className="flex items-center bg-white rounded-2xl shadow p-8 min-w-full mt-6">
      <img
        src={profileImage}
        alt={name}
        className="w-48 h-48 rounded-full object-cover border-4 border-gray-200 shadow-lg"
      />
      <div className="ml-10 flex-1">
        <h2 className="text-4xl font-bold">{name}</h2>
        <span className="text-lg text-gray-500 block mt-2">@{username}</span>
        <div className="flex space-x-16 mt-8">
          <div className="text-center">
            <p className="text-3xl font-semibold">{followers}</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold">{following}</p>
            <p className="text-gray-500">Following</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold">{posts}</p>
            <p className="text-gray-500">Posts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfileCard;
