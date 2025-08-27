import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from './page.module.css'
export default function SearchTextField() {
    return (
         <TextField
      variant="outlined"
      placeholder="Search"
      className={styles.search}
      sx={{
        width: "300px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          height: "50px", 
          display: "flex",
          alignItems: "center", 
           fontFamily: "Open Sans",
        },
        "& .MuiInputLabel-root": {
          fontSize: "14px",
          color: "#757575",
          fontFamily: "Open Sans",
        },
        fontFamily: "Open Sans",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
    );
}
