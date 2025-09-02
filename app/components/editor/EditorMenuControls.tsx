'use client'
import { Box, useTheme } from "@mui/material";
import style from "../newRequirementForm/requirment.module.css"
import {


  MenuButtonBold,
  MenuButtonBulletedList,
  MenuButtonCode,
  MenuButtonEditLink,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuButtonUnderline,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectFontFamily,
  MenuSelectFontSize,
  MenuSelectHeading,

} from "mui-tiptap";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
export default function EditorMenuControls() {
  const theme = useTheme();
  return (
    <Box sx={{
      position: 'absolute', mt: "200px",
      mb: 1, border: "1px solid #9E9E9E ", height: "40px", borderRadius: "8px", width: "100%"
    }}>


      <MenuControlsContainer>
        <MenuSelectFontFamily
        defaultValue="serif"
          options={[
            { label: "Comic Sans", value: "Comic Sans MS, Comic Sans" },
            { label: "Cursive", value: "cursive" },
            { label: "Monospace", value: "monospace" },
            { label: "San Serif", value: "serif" },
          ]}
          sx={{
            margin:"4px",
            "& .MuiSelect-icon": {
                        color: "#757575",
                        fontSize: "24px",
                    },
          }}
          
        />
        <MenuDivider />
        <MenuSelectFontSize defaultValue="12px"  />
        <MenuDivider />

        <MenuButtonBold />
        <MenuButtonItalic />
        <MenuButtonUnderline />


        <MenuDivider />

        <MenuButtonOrderedList />

        <MenuButtonBulletedList />




        <MenuDivider />



        <MenuButtonCode />
        <MenuDivider />


        <MenuButtonEditLink />



      </MenuControlsContainer>
    </Box>


  );
}
