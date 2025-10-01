import { Reel } from "@/src/data/reels";
import { FaHeart, FaCommentDots } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

type Props = {
  reels: Reel[];
};

const formatNumber = (num: number) => {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
};

const ReelsCarousel: React.FC<Props> = ({ reels }) => (
  <section className="mt-12 mx-3">
    <h2 className="text-2xl font-semibold mb-6">Latest Reels</h2>
    <div className="pb-8">
      <div className="flex gap-8 overflow-x-auto pb-3">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="
              bg-white rounded-2xl shadow-sm min-w-[275px] max-w-xs flex-shrink-0 overflow-hidden flex flex-col
              transition-transform transition-shadow duration-300
              hover:scale-105 hover:shadow-xl
              group
            "
          >
            <div className="relative w-full h-64">
              <img
                src={reel.thumbnail}
                alt="thumbnail"
                className="w-full h-full object-cover transition-filter duration-300 group-hover:brightness-90"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black bg-opacity-40 rounded-full p-3">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="18,12 36,24 18,36" />
                  </svg>
                </span>
              </span>
            </div>
            <div className="flex-1 flex flex-col p-4 transition-colors duration-300 group-hover:text-pink-600">
              <p className="mb-4">{reel.caption}</p>
              <div className="flex items-center text-base mb-3 gap-6">
                <span className="flex items-center">
                  <MdVisibility className="mr-1" />
                  {formatNumber(reel.views)}
                </span>
                <span className="flex items-center">
                  <FaHeart className="mr-1 text-pink-400" />
                  {formatNumber(reel.likes)}
                </span>
                <span className="flex items-center">
                  <FaCommentDots className="mr-1 text-blue-400" />
                  {reel.comments}
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {reel.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-100 rounded transition-colors duration-300 group-hover:bg-pink-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReelsCarousel;
