'use client'
import { Box, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import SimpleDialogDemo from "../components/profile/profile";
import Header from "../components/headeTableButtons/header";
import TableComponent from "../components/table/table";
export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <div>
          <p>Welcome  dashb0ard, {session.user?.name}</p>
          <Box sx={{ marginLeft: "500px", width: "120px" }}>  <SimpleDialogDemo /></Box>
          <Header/>
          <TableComponent/>
        </div>
      )
      }
    </>
  );
}
