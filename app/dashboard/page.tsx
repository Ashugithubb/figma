'use client'
import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <div>
          <p>Welcome  dashb0ard, {session.user?.name}</p>
    
        </div>
      )
      }
    </>
  );
}
