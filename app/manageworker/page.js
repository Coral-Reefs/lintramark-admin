"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Simulating a larger list of workers
const workersData = Array.from({ length: 50 }, (_, i) => ({
  name: `Worker ${i + 1}`,
  selected: i < 3, // Pre-select the first three workers as an example
}));

export default function WorkersTable() {
  const [workers, setWorkers] = React.useState(workersData);
  const router = useRouter();

  // Function to toggle the checkbox state
  const toggleSelection = (index) => {
    setWorkers((prev) =>
      prev.map((worker, i) =>
        i === index ? { ...worker, selected: !worker.selected } : worker
      )
    );
  };

  const handleSave = () => {
    router.push("/addtask"); // Navigate back to the managetask page
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[70%] bg-white rounded-md border">
        <h2 className="text-center font-bold text-xl mb-4 mt-8">
          Workers in Group 1
        </h2>
        <div className="overflow-y-auto max-h-96">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-gray-300 text-center w-16">
                  {" "}
                </TableHead>
                <TableHead className="text-left">Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {workers.map((worker, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center border-2">
                    <Checkbox
                      checked={worker.selected}
                      onCheckedChange={() => toggleSelection(index)}
                      aria-label={`Select ${worker.name}`}
                    />
                  </TableCell>
                  <TableCell>{worker.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <Button
        onClick={handleSave}
        className="fixed bottom-14 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-1/4 py-6 rounded-md hover:bg-orange-600"
      >
        Save
      </Button>
    </div>
  );
}
