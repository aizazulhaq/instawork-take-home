import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { TeamMemberForm } from "./-form";
import { newTeamMemberFormSchema } from "./-data-handling";
import { z } from "zod";

export const Route = createFileRoute("/team/new/")({
  component: Index,
});

function Index() {

  const navigate = useNavigate();

  const onSubmitNewTeamMember = async (
    values: z.infer<typeof newTeamMemberFormSchema>
  ) => {
    const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/api/teammembers/`;
    const response = await fetch(backendUrl, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      <h1 className="text-3xl">Add a team member</h1>
      <div className="flex flex-col h-full">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-4">
          <div
            className="flex-1 rounded-lg h-full"
            x-chunk="dashboard-02-chunk-1"
          >
            <TeamMemberForm onSubmit={onSubmitNewTeamMember}></TeamMemberForm>
          </div>
        </main>
      </div>
    </div>
  );
}
