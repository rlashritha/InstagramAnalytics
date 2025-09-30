import React from "react";
import { Influencer } from "../data/influencers";

interface Props {
  influencer: Influencer;
}

const statusColors: Record<string, string> = {
  trending: "bg-pink-500",
  available: "bg-green-500",
  upcoming: "bg-blue-500",
  ended: "bg-gray-400",
};

const InfluencerCard: React.FC<Props> = ({ influencer }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center relative">
      {/* Status Badge */}
      <div
        className={`px-2 py-1 rounded-full text-white text-xs absolute top-2 right-2 ${statusColors[influencer.status]}`}
      >
        {influencer.status}
      </div>

      {/* Profile Image */}
      <img
        src={influencer.profileImage} // <-- corrected
        alt={influencer.name}
        className="w-24 h-24 rounded-full border-2 border-gray-200 mb-2"
      />

      {/* Name and username */}
      <h3 className="font-semibold">{influencer.name}</h3>
      <p className="text-gray-500 text-sm">@{influencer.username}</p>
      <p className="text-gray-400 text-sm">
        {influencer.category} • {influencer.location}
      </p>

      {/* Stats */}
      <div className="flex justify-between w-full mt-2 text-gray-600 text-sm">
        <div className="flex flex-col items-center">
          <span>{influencer.followers}</span>
          <span>Followers</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{influencer.posts}</span>
          <span>Posts</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{influencer.engagementRate}</span> {/* <-- corrected */}
          <span>Engagement</span>
        </div>
      </div>

      {/* Button */}
      <button className="mt-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full w-full">
        View Profile
      </button>
    </div>
  );
};

export default InfluencerCard;
