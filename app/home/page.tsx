'use client'

import { AppBar, Box, Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import FormComponenet from "../components/form";
import PersistentDrawerLeft from "../../dummy/AppBar";
import AnchorTemporaryDrawer from "../components/PersistRight";
import MiniDrawer from "../components/drawer/parmanentDrawaer";
import styles from '../style/home.module.css'
import HomePaper from "../components/HomePaper/paper";
import SimpleDialogDemo from "../components/profile/profile";
export default function Home() {
  const { data: session } = useSession();

  return (
    <>

      <Box className={styles.page}>
        <Box sx={{ zIndex: 1 }}><MiniDrawer /></Box>
        <Box sx={{ display: "flex", zIndex: 10000, justifyContent: "flex-end" }}> <AnchorTemporaryDrawer /></Box>
       
      </Box>
    
    </>
  );
}
