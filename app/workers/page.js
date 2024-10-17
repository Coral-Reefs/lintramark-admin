"use client";

import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { User, MinusCircle } from "lucide-react";
import TopNav from "../components/TopNav";

const workers = [
  { id: 1, name: "Robert", attendance: "Present", delayedTasks: 0 },
  { id: 2, name: "Adib", attendance: "Present", delayedTasks: 0 },
  { id: 3, name: "Jane", attendance: "Absent", delayedTasks: "-" },
  { id: 4, name: "Jack", attendance: "Present", delayedTasks: 2 },
  { id: 5, name: "Alex", attendance: "Present", delayedTasks: 0 },
  { id: 6, name: "Jamie", attendance: "Present", delayedTasks: 0 },
];

export default function worker() {
  const router = useRouter();

  const handleProfileClick = (workerId) => {
    if (workerId === 1) {
      router.push("/profile");
    }
  };

  return (
    <section>
      <TopNav />

      <div className="flex justify-center items-center mt-20">
        <div className="w-[70%] bg-white rounded-md border p-4">
          <h2 className="text-center font-bold text-xl mb-6 mt-6">
            Manage Employees
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[15%]">ID</TableHead>
                <TableHead className="w-[25%]">Name</TableHead>
                <TableHead className="w-[25%]">Attendance</TableHead>
                <TableHead className="w-[25%]">Delayed Tasks</TableHead>
                <TableHead className="w-[10%]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workers.map((worker) => (
                <TableRow
                  key={worker.id}
                  className={worker.delayedTasks > 0 ? "bg-red-200" : ""}
                >
                  <TableCell className="font-medium">{worker.id}</TableCell>
                  <TableCell>{worker.name}</TableCell>
                  <TableCell>{worker.attendance}</TableCell>
                  <TableCell className="text-left">
                    {worker.delayedTasks}
                  </TableCell>
                  <TableCell className="flex space-x-2">
                    <Button
                      variant="outline"
                      className="p-1"
                      onClick={() => handleProfileClick(worker.id)}
                    >
                      <User className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="p-1">
                      <MinusCircle className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
