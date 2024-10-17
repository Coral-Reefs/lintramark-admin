import React from "react";
import TopNav from "../components/TopNav";

const leaderboardData = [
  { name: "Jimmy", points: 49000, rank: 2 },
  { name: "Ali", points: 50000, rank: 1 },
  { name: "Robert", points: 39000, rank: 3 },
  { name: "Abu", points: 20000, rank: 4 },
  { name: "Ben", points: 19000, rank: 5 },
  { name: "Kat", points: 18000, rank: 6 },
  { name: "Zoe", points: 17000, rank: 7 },
  { name: "Ein", points: 16000, rank: 8 },
  { name: "Max", points: 15000, rank: 9 },
  { name: "Ace", points: 12000, rank: 10 },
];

const Leaderboard = () => {
  return (
    <section>
      <TopNav />
      <div className="flex flex-col items-center h-screen w-[70vw] mx-auto relative p-10">
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <p className="text-xl mb-4">18 / 10 / 2024</p>
        {/* Crown centered */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-6">
          <span className="text-4xl font-bold">👑</span>
        </div>
        <div className="flex items-end space-y-2 mt-8">
          {/* Second Player */}
          <div className="bg-[#ff784d] p-6 rounded-t-lg shadow-md h-20 flex flex-col items-center justify-center w-full">
            <h2 className="text-lg font-bold">{leaderboardData[0].name}</h2>
            <p>{leaderboardData[0].points} points</p>
          </div>
          {/* First Player - Center */}
          <div className="bg-[#ff784d] p-6 rounded-t-lg shadow-md h-24 flex flex-col items-center justify-center w-full">
            <h2 className="text-lg font-bold">{leaderboardData[1].name}</h2>
            <p>{leaderboardData[1].points} points</p>
          </div>
          {/* Third Player */}
          <div className="bg-[#ff784d] p-6 rounded-t-lg shadow-md h-16 flex flex-col items-center justify-center w-full">
            <h2 className="text-lg font-bold">{leaderboardData[2].name}</h2>
            <p>{leaderboardData[2].points} points</p>
          </div>
        </div>
        {/* Ranking List */}
        <div
          className="bg-[#ffe5dd] rounded-lg w-full max-w-md shadow-lg flex-grow overflow-y-auto p-5 px-10"
          style={{ maxHeight: "50vh" }}
        >
          <div className="flex flex-col">
            {leaderboardData.slice(3).map((player) => (
              <div
                key={player.name}
                className="flex justify-between p-2 border-b border-white"
              >
                <span>{player.name}</span>
                <span>{player.points} points</span>
                <span className="font-bold">
                  {String(player.rank).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
