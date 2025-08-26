'use client'

import { AppBar, Box, Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import FormComponenet from "../components/form";
import PersistentDrawerLeft from "../components/AppBar";
import AnchorTemporaryDrawer from "../components/PersistRight";
import MiniDrawer from "../components/drawer/parmanentDrawaer";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
    
     <Box sx={{ zIndex: 1 }}><MiniDrawer/></Box>
      {/* <Box sx={{ zIndex: 1 }}><PersistentDrawerLeft /></Box> */}
      <Box sx={{ display: "flex",zIndex:-1, justifyContent: "flex-end", }}> <AnchorTemporaryDrawer /></Box>
    </>
  );
}
