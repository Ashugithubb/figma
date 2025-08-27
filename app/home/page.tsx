'use client'

import { AppBar, Box, Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import FormComponenet from "../components/form";
import PersistentDrawerLeft from "../components/AppBar";
import AnchorTemporaryDrawer from "../components/PersistRight";
import MiniDrawer from "../components/drawer/parmanentDrawaer";
import styles from '../style/home.module.css'
import HomePaper from "../components/HomePaper/paper";
export default function Home() {
  const { data: session } = useSession();

  return (
    <>

      <Box className={styles.page}>

        <Box sx={{ zIndex: 1 }}><MiniDrawer /></Box>
        <Box sx={{ display: "flex", zIndex: -1, justifyContent: "flex-end", }}> <AnchorTemporaryDrawer /></Box>
        <Typography className={styles.requ}>Requirements list</Typography>
        <HomePaper />
      </Box>
    </>
  );
}
