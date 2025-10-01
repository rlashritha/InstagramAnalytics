// src/component/LikesCommentsTrendChart.tsx

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { TrendPoint } from "@/src/data/likesCommentsChart";

type Props = {
  data: TrendPoint[];
};

const LikesCommentsTrendChart: React.FC<Props> = ({ data }) => (
  <section className="bg-white rounded-2xl p-6 shadow mx-3">
    <h3 className="text-lg font-semibold mb-4">Likes vs Comments Trend</h3>
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="post" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="likes"
            stroke="#FF6600"
            strokeWidth={3}
            activeDot={{ r: 7 }}
            dot={{ stroke: "#fff", strokeWidth: 2, r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="comments"
            stroke="#00AEA2"
            strokeWidth={3}
            activeDot={{ r: 7 }}
            dot={{ stroke: "#fff", strokeWidth: 2, r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </section>
);

export default LikesCommentsTrendChart;
