import { Paper, Typography } from "@mui/material";
import styles from './page.module.css'
import SearchTextField from "../search/textfeild";
export default function HomePaper() {
  return (
    <Paper elevation={0} className={styles.paper}>
      <Typography variant="h5" component="h2">
       <SearchTextField />
      </Typography>
    </Paper>
  );
}
