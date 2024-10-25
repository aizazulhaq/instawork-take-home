import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { getTeamMemberData, editTeamMemberFormSchema } from "./-data-handling";
import { TeamMemberForm } from "./-form";
import { useEffect, useState } from "react";
import { TeamMember } from "../-static-data";
import { z } from "zod";

export const Route = createFileRoute("/team/edit/$memberId")({
  component: Index,
});

function Index() {
  const { memberId } = Route.useParams();

  const [memberData, setMemberData] = useState<TeamMember | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTeamMemberData(memberId);
      console.log("data from backend", result);
      setMemberData(result); 
    };
    fetchData();
  }, []);

  const onSubmitEditTeamMember = async (
    values: z.infer<typeof editTeamMemberFormSchema>
  ) => {
    const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/api/teammembers/`;
    const response = await fetch(`${backendUrl}${values.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      navigate({ to: "/team" });
    } else {
      console.error("Failed to submit:", response.statusText);
    }
  };

  return (
    <div className="container mx-auto h-screen py-10 px-16">
      <h1 className="text-3xl">Edit team member</h1>
      <div className="flex flex-col h-full">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-4">
          <div
            className="flex-1 rounded-lg h-full"
            x-chunk="dashboard-02-chunk-1"
          >
            <TeamMemberForm
              memberData={memberData}
              onSubmit={onSubmitEditTeamMember}
            ></TeamMemberForm>
          </div>
        </main>
      </div>
    </div>
  );
}
