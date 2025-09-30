import React from "react";

const InsightsHeader: React.FC = () => {
  return (
    <div className="w-full rounded-2xl p-6 bg-gradient-to-r from-purple-500 via-pink-600 to-orange-500 text-white shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold">
        Instagram Analytics Dashboard
      </h1>
      <p className="text-sm md:text-base opacity-90">
        Comprehensive insights and performance metrics
      </p>
    </div>
  );
};

export default InsightsHeader;
