// src/app/influencer/[username]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { mockInfluencers } from "@/src/data/influencers";
import InsightsHeader from "@/src/component/InsightHeader";
import InfluencerProfileCard from "../InfluencerProfileCard";
import EngagementAnalytics from "@/src/component/EngagementAnalytics";
import { getAnalytics } from "@/src/utils/analytics";
import { posts } from "@/src/data/posts";
import RecentPosts from "@/src/component/RecentPosts";
import { reels } from "@/src/data/reels";
import ReelsCarousel from "@/src/component/ReelsCarousel";
import Demographics from "@/src/component/Demographics";
import { chartData } from "@/src/data/likesCommentsChart";
import LikesCommentsTrendChart from "@/src/component/LikesCommentsTrendChart";



export default function InfluencerProfilePage() {
    // Extract the username route param using useParams from next/navigation
    const params = useParams();
    const username = params?.username as string;

    // Find influencer by username from mock data
    const influencer = mockInfluencers.find((inf) => inf.username === username);

    if (!influencer) return <div>Influencer not found</div>;
    const chartData = [
        { post: "1", likes: 1250, comments: 89 },
        { post: "2", likes: 2100, comments: 156 },
        { post: "3", likes: 1890, comments: 134 },
        { post: "4", likes: 2750, comments: 201 },
        { post: "5", likes: 1980, comments: 167 },
        { post: "6", likes: 3200, comments: 234 },
        { post: "7", likes: 2890, comments: 189 },
        { post: "8", likes: 2156, comments: 145 },
    ];
    const { avgLikes, avgComments, engagementRate } = getAnalytics(chartData)

    return (

        <div className="bg-pink-100 min-h-screen pt-0  ">
            <InsightsHeader />
            <div className="w-full px-4 mb-12">
                <InfluencerProfileCard
                    name={influencer.name}
                    username={influencer.username}
                    profileImage={influencer.profileImage}
                    followers={influencer.followers}
                    following={influencer.engagementRate}
                    posts={influencer.posts}
                />
                {/* Add more sections here, such as analytics, posts, reels, etc. */}
            </div>

            <div className="w-full px-4 mb-12">
            <EngagementAnalytics
                avgLikes={avgLikes}
                avgComments={avgComments}
                engagementRate={engagementRate}
            />
            </div>
            <LikesCommentsTrendChart data={chartData} />
            <RecentPosts posts={posts} />
            <ReelsCarousel reels={reels} />
            <div className="pb-10 mx-2">
            <Demographics />
            </div>
        </div>
    );
}
