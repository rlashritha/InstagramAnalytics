// src/component/Demographics.tsx

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import { genderData, ageData, locationData } from "@/src/data/demographics";

export default function Demographics() {
  return (
    <section className="mb-20 mx-3">
      <h2 className="text-2xl mb-6 mt-6">Audience Demographics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gender Split */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="font-semibold text-lg mb-4">Gender Split</div>
          <div style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`${value}%`, "Percentage"]}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #eee",
                    borderRadius: "8px"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {genderData.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} /> 
                  <span>{item.name}</span>
                </div>
                <span>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
        {/* Age Groups */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="font-semibold text-lg mb-4">Age Groups</div>
          <div style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip
                  formatter={(value: number) => [`${value}%`, "Percentage"]}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #eee",
                    borderRadius: "8px"
                  }}
                />
                <Bar dataKey="percentage" fill="#FF6600" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Top Locations */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="font-semibold text-lg mb-4">Top Locations</div>
          <div className="space-y-4">
            {locationData.map((loc) => (
              <div key={loc.location} className="flex items-center justify-between text-sm">
                <span>{loc.location}</span>
                <span>{loc.percentage}%</span>
                <div className="w-2/3 h-2 bg-gray-200 rounded-full overflow-hidden ml-2">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${loc.percentage}%`,
                      background: "linear-gradient(90deg,#F36CA0,#C993FF)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
