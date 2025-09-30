// src/app/page.tsx
"use client"; // optional but helpful during debugging

import Image from "next/image";
import { mockInfluencers } from "../data/influencers"; // <-- make sure this path & name match your file
import InfluencerCard from "../component/InfluencerCard";
import HomepageHeader from "../component/HomepageHeader";


export default function Home() {
  //console.log("DEBUG mockInfluencers:", mockInfluencers);
  const influencers = Array.isArray(mockInfluencers) ? mockInfluencers : [];

  return (
    <>
      <HomepageHeader />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">Discover Influencers</h1>
        <p className="text-gray-500 mb-6">
          Find the perfect influencers for your brand collaborations
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {influencers.map((inf) => (
            <div key={inf.id} className="relative">
              {/* <Image
                src={inf.profileImage}
                alt={inf.name}
                width={96}
                height={96}
                className="rounded-full border-2 border-gray-200 mb-2"
              /> */}
              <InfluencerCard influencer={inf} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
