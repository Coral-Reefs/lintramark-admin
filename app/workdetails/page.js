import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TopNav from "../components/TopNav";

export default function WorkDetails() {
  return (
    <section>
      <TopNav />
      <div className="flex justify-center items-center mt-10 bg-white">
        <div className="max-w-4xl w-full p-8 flex justify-center flex-col">
          <div className="flex justify-center items-center mb-4">
            <h1 className="text-2xl font-bold">Robert’s Task 18/10/2024</h1>
          </div>

          <div className="justify-center flex mb-5">
            <select className="px-4 py-2 bg-[#ff784d] text-white rounded-md">
              <option value="">All</option>
              <option value="zone">Zone</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
              <option value="workType">Work Type</option>
            </select>
          </div>

          <Table className="w-full border-collapse min-h-80">
            <TableHeader>
              <TableRow>
                <TableHead className="border border-gray-300 p-2">
                  Task
                </TableHead>
                <TableHead className="border border-gray-300 p-2">
                  Status
                </TableHead>
                <TableHead className="border border-gray-300 p-2">
                  Location
                </TableHead>
                <TableHead className="border border-gray-300 p-2">
                  Time Taken
                </TableHead>
                <TableHead className="border border-gray-300 p-2">
                  Weight harvested / Area covered
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-white">
                <TableCell className="border border-gray-300 p-2">
                  Harvest 1
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  Completed
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  Zone A
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  2 h
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  0.5 tonnes
                </TableCell>
              </TableRow>
              <TableRow className="bg-white">
                <TableCell className="border border-gray-300 p-2">
                  Harvest 2
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  Completed
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  Zone B
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  2 h
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  0.5 tonnes
                </TableCell>
              </TableRow>
              <TableRow className="bg-[#ff784d] text-white">
                <TableCell className="border border-gray-300 p-2">
                  Harvest 3
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  Late
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  Zone B
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  4 h
                </TableCell>
                <TableCell className="border border-gray-300 p-2">-</TableCell>
              </TableRow>
              <TableRow className="bg-white">
                <TableCell className="border border-gray-300 p-2">
                  Fertilize
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  Incomplete
                </TableCell>
                <TableCell className="border border-gray-300 p-2">
                  Zone C
                </TableCell>
                <TableCell className="border border-gray-300 p-2">-</TableCell>
                <TableCell className="border border-gray-300 p-2">
                  2 hectares
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
