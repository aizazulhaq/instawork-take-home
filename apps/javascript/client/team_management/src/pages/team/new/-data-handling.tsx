import { z } from "zod";


export const newTeamMemberFormSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  phone: z.string().min(2).max(15),
  role: z.enum(['regular', 'admin']),
});

export async function onSubmitNewTeamMember(values: z.infer<typeof newTeamMemberFormSchema>) {

  
  const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/api/teammembers/`;

  const response = await fetch(backendUrl, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (response.ok) {
    window.location.href = '/team'; 
  } else {
    console.error('Failed to submit:', response.statusText);
  }
}
