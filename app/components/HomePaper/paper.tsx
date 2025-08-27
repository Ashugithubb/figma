import { Box, Paper, Typography } from "@mui/material";
import styles from './page.module.css'
import SearchTextField from "../search";
import Header from "../headeTableButtons/header";
import TableComponent from "../table/table";
export default function HomePaper() {
  return (
    <Paper elevation={0} className={styles.paper}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box><SearchTextField /></Box>

        <Box><Header /></Box>

      </Box>
      <Paper sx={{marginTop:"24px"}}><TableComponent /></Paper>
    </Paper>
  );
}
