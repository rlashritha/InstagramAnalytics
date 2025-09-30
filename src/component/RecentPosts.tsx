// src/component/RecentPosts.tsx
import { Post } from "@/src/data/posts";
import { FaHeart, FaCommentDots } from "react-icons/fa";

type Props = {
  posts: Post[];
};

const RecentPosts: React.FC<Props> = ({ posts }) => (
  <section className="mt-12">
    <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-2xl shadow p-0 overflow-hidden flex flex-col min-h-[475px]">
          <img src={post.image} alt="post" className="w-full h-64 object-cover rounded-t-2xl" />
          <div className="flex-1 flex flex-col p-5">
            <p className="text-gray-800 mb-5">{post.caption}</p>
            <div className="flex items-center text-gray-400 text-base mb-3 gap-7">
              <span className="flex items-center"><FaHeart className="mr-1 text-pink-400" />{Math.round(post.likes / 10) / 100}K</span>
              <span className="flex items-center"><FaCommentDots className="mr-1 text-blue-400" />{post.comments}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 text-xs bg-gray-100 rounded">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RecentPosts;
