"use client";
import { MapComponent } from "./components/ZoneMap";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftCircle } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const Zone = () => {
  const { zoneId } = useParams();
  const presentNames = ["Robert", "Joan", "Ali", "Kim", "Logan", "Adib"];
  const absentNames = ["Abu", "Jimmy"];
  const router = useRouter();
  return (
    <section className="px-60 flex-col justify-center py-10">
      <div className="text-2xl font-bold mb-4">
        <Button variant="icon" onClick={() => router.push("/")}>
          <ArrowLeftCircle />
        </Button>
        ZONE {zoneId}
      </div>
      <div className="flex gap-12">
        <div className="flex-1">
          <MapComponent />
          <Card className="mt-5 bg-[#ff784d] text-center text-white">
            <CardContent className="py-4">
              Total workers<p className="text-2xl font-bold">8 pax</p>
            </CardContent>
          </Card>
        </div>
        <Card className="flex-1 w-full p-10 flex justify-center">
          <Tabs defaultValue="present" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="present">Present</TabsTrigger>
              <TabsTrigger value="absent">Absent</TabsTrigger>
            </TabsList>
            <TabsContent value="present">
              <Table>
                <TableBody>
                  {presentNames.map((name) => (
                    <TableRow>
                      <TableCell
                        className="flex items-center gap-7 cursor-pointer"
                        onClick={() => router.push("/profile")}
                      >
                        <Avatar>
                          <AvatarImage src="/public/images/user.png" />
                          <AvatarFallback>{name[0]}</AvatarFallback>
                        </Avatar>
                        {name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="absent">
              <Table>
                <TableBody>
                  {absentNames.map((name) => (
                    <TableRow>
                      <TableCell className="flex items-center gap-7">
                        <Avatar>
                          <AvatarImage src="/public/images/user.png" />
                          <AvatarFallback>{name[0]}</AvatarFallback>
                        </Avatar>
                        {name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default Zone;
