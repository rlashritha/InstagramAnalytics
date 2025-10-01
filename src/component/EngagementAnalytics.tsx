// src/component/EngagementAnalytics.tsx

import { FaHeart, FaCommentDots } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

interface EngagementAnalyticsProps {
  avgLikes: number;
  avgComments: number;
  engagementRate: number; // e.g. 4.2
}

const EngagementAnalytics: React.FC<EngagementAnalyticsProps> = ({
  avgLikes,
  avgComments,
  engagementRate,
}) => {
  return (
    <section className="mt-8 ">
      <h2 className="text-2xl font-semibold mb-6">Engagement Analytics</h2>
      <div className="flex gap-6">
        {/* Avg Likes */}
        <div className="flex-1 bg-pink-50 border rounded-2xl border-pink-100 py-1 px-8 relative min-w-[250px]">
          <span className="text-gray-500 mb-2 block">Avg Likes / Post</span>
          <span className="text-3xl font-bold">{avgLikes.toLocaleString()}</span>
          <FaHeart className="absolute right-8 bottom-6 text-pink-400 text-2xl" />
        </div>
        {/* Avg Comments */}
        <div className="flex-1 bg-blue-50 border rounded-2xl border-blue-100 py-6 px-8 relative min-w-[250px]">
          <span className="text-gray-500 mb-2 block">Avg Comments / Post</span>
          <span className="text-3xl font-bold">{avgComments.toLocaleString()}</span>
          <FaCommentDots className="absolute right-8 bottom-6 text-blue-400 text-2xl" />
        </div>
        {/* Engagement Rate */}
        <div className="flex-1 bg-yellow-50 border rounded-2xl border-yellow-100 py-6 px-8 relative min-w-[250px]">
          <span className="text-gray-500 mb-2 block">Engagement Rate</span>
          <span className="text-3xl font-bold">{engagementRate}%</span>
          <FiTrendingUp className="absolute right-8 bottom-6 text-orange-400 text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default EngagementAnalytics;
