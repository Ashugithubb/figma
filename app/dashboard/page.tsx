'use client'
import { Box, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import SimpleDialogDemo from "../components/profile/profile";
import Header from "../components/headeTableButtons/header";
import TableComponent from "../components/table/table";
import Editor from "../components/editor/Editor";
export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <div>
          <p>Welcome  dashb0ard, {session.user?.name}</p>
          <Box sx={{display:"flex", justifyContent:"center",flexDirection:"column", padding:"45px"}}> <Editor/></Box>
          
         

        </div>
      )
      }
    </>
  );
}
