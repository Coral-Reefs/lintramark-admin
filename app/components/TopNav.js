import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <div className="w-full flex gap-5 py-5 px-28 mb-3 border border-b-2 border-b-[#FF784D]">
      <Link href="/">Home</Link>
      <Link href="/workers">Workers</Link>
      <Link href="/tasks">Tasks</Link>
      <Link href="/leaderboard">Leaderboard</Link>
    </div>
  );
};

export default TopNav;
