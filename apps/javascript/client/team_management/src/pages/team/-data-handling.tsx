import { TeamMember } from "./-static-data";

export async function getTeamMemberData(): Promise<TeamMember[]> {
  try {
    const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/api/teammembers/`;
    const response = await fetch(backendUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: TeamMember[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
}

export async function deleteTeamMember(memberId: string): Promise<void> {
  try {
    const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/api/teammembers/`;
    const response = await fetch(`${backendUrl}${memberId}/`, { 
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log(`Team member with id ${memberId} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting team member:", error);
  }
}
