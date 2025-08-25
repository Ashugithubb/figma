'use client'

import { Typography } from "@mui/material";
import {useSession } from "next-auth/react";
import FormComponenet from "../components/form";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {/* {session && (
        <div>
          <p>Welcome, {session.user?.name}</p>
          <p>{session.user?.email}</p>
        </div>
      )
      } */}
      <FormComponenet/>
    </>
  );
}
