"use client";
// components/ManageTasks.js
import { useRouter } from "next/navigation";
import TopNav from "../components/TopNav";

export default function ManageTasks() {
  const router = useRouter();

  const handleGroupClick = () => {
    router.push("/addtask");
  };

  return (
    <section>
      <TopNav />
      <div className="min-h-screen w-4/5 max-w-5xl mx-auto p-20 bg-white">
        <h2 className="mb-4 text-2xl font-semibold">Manage Tasks</h2>
        <div className="flex justify-center items-center flex-col py-10">
          <button className="bg-[#ff784d] text-white py-4 px-4 rounded-lg mb-8 block mx-auto w-3/4">
            Add Groups +
          </button>
          <div className="relative w-1/2 mb-8">
            <input
              type="text"
              placeholder="Search Groups"
              className="w-full p-2 pl-10 border border-red-500 rounded-xl"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>

          <div className="flex flex-wrap gap-4 justify-center w-full mt-8">
            <div
              onClick={handleGroupClick}
              className="relative bg-[#ff784d] text-white p-4 rounded-lg h-40 flex items-center justify-center gap-3 flex-1 min-w-[150px] cursor-pointer"
            >
              <div className="w-12 h-12 bg-white rounded-full"></div>
              <span className="text-lg font-semibold">Group 1</span>
              <button className="absolute bottom-2 right-2">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </button>
            </div>
            {/* Group 2 */}
            <div className="relative bg-[#ff784d] text-white p-4 rounded-lg h-40 flex items-center justify-center gap-3 flex-1 min-w-[150px]">
              <div className="w-12 h-12 bg-white rounded-full"></div>
              <span className="text-lg font-semibold">Group 2</span>
              <button className="absolute bottom-2 right-2">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </button>
            </div>
            {/* Group 3 */}
            <div className="relative bg-[#ff784d] text-white p-4 rounded-lg h-40 flex items-center justify-center gap-3 flex-1 min-w-[150px]">
              <div className="w-12 h-12 bg-white rounded-full"></div>
              <span className="text-lg font-semibold">Group 3</span>
              <button className="absolute bottom-2 right-2">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
