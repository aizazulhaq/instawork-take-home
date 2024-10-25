import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { TeamMember, columns } from "./-static-data";
import { DataTable } from "../../components/ui/-data-table";
import { useEffect, useState } from "react";
import { getTeamMemberData } from "./-data-handling";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/team/")({
  component: Index,
});

function Index() {
  const [data, setData] = useState<TeamMember[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTeamMemberData();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto h-screen py-10 px-16 ">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl pb-4">Team Members</h1>
        <Button onClick={() => navigate({ to: '/team/new' })} className="ml-4">+</Button>
      </div>
      {data.length == 1 ? <p className="text-sm text-gray-500">{data.length} member</p> :
      <p className="text-sm text-gray-500">{data.length} members</p> }
      <div className="flex flex-col h-full">
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-4">
            <div className="flex-1 rounded-lg h-full" x-chunk="dashboard-02-chunk-1">
              <DataTable columns={columns} data={data} />
            </div>
          </main>
        </div>
      
    </div>
  );
}
