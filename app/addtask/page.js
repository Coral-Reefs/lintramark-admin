"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TaskTable() {
  const router = useRouter();

  const handleGroupClick = () => {
    router.push("/manageworker");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-4/5 max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">
          <Button variant="icon" onClick={() => router.push("/tasks")}>
            <ArrowLeftCircle />
          </Button>
          Task For Group 1
        </h2>
        <div className="flex items-center mb-6">
          <button className="bg-[#ff784d] text-white py-2 px-4 rounded-lg mr-4">
            Add Tasks +
          </button>
          <button
            className="bg-[#ff784d] text-white py-2 px-4 rounded-lg"
            onClick={handleGroupClick}
          >
            Manage Workers
          </button>
        </div>
        <div className="flex items-center mb-8">
          <input
            type="date"
            className="border border-gray-300 rounded-lg p-2 mr-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="overflow-x-auto">
          <Table className="w-full border border-gray-300 min-h-[200px]">
            <TableHeader>
              <TableRow>
                <TableHead className="border border-gray-300 text-center">
                  6am
                </TableHead>
                <TableHead className="border border-gray-300 text-center">
                  7am
                </TableHead>
                <TableHead className="border border-gray-300 text-center">
                  8am
                </TableHead>
                <TableHead className="border border-gray-300 text-center">
                  9am
                </TableHead>
                <TableHead className="border border-gray-300 text-center">
                  10am
                </TableHead>
                <TableHead className="border border-gray-300 text-center">
                  11am
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="h-20">
                <TableCell className="border border-gray-300 bg-green-200 text-center">
                  Task1
                </TableCell>
                <TableCell className="border border-gray-300 bg-green-200 text-center">
                  Task2
                </TableCell>
                <TableCell className="border border-gray-300 bg-green-200 text-center">
                  Task3
                </TableCell>
                <TableCell className="border border-gray-300 bg-green-200 text-center">
                  Task4
                </TableCell>
                <TableCell className="border border-gray-300"></TableCell>
                <TableCell className="border border-gray-300 bg-green-200 text-center">
                  Task6
                </TableCell>
              </TableRow>
              <TableRow className="h-20">
                <TableCell className="border border-gray-300"></TableCell>
                <TableCell className="border border-gray-300"></TableCell>
                <TableCell className="border border-gray-300"></TableCell>
                <TableCell className="border border-gray-300 bg-green-200 text-center">
                  Task5
                </TableCell>
                <TableCell className="border border-gray-300"></TableCell>
                <TableCell className="border border-gray-300"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
