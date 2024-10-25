import { z } from "zod";
import { TeamMember } from "@/pages/team/-static-data";


export const editTeamMemberFormSchema = z.object({
  id: z.number() || undefined,
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  phone: z.string().min(2).max(15),
  role: z.enum(['regular', 'admin']),
});




export async function getTeamMemberData(memberId: string): Promise<TeamMember> {
  try {
    const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/api/teammembers/`;
    const response = await fetch(`${backendUrl}${memberId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: TeamMember = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching team members:", error);
    throw error;
  }
}
