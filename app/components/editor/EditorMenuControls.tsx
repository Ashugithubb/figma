'use client'
import { Box, useTheme } from "@mui/material";
import {

  MenuButtonBlockquote,
  MenuButtonBold,
  MenuButtonBulletedList,
  MenuButtonCode,
  MenuButtonCodeBlock,
  MenuButtonEditLink,
  MenuButtonHighlightColor,
  MenuButtonHorizontalRule,
  MenuButtonImageUpload,
  MenuButtonIndent,
  MenuButtonItalic,
  MenuButtonOrderedList,
  MenuButtonRedo,
  MenuButtonRemoveFormatting,
  MenuButtonStrikethrough,
  MenuButtonSubscript,
  MenuButtonSuperscript,
  MenuButtonTaskList,
  MenuButtonTextColor,
  MenuButtonUnderline,
  MenuButtonUndo,
  MenuButtonUnindent,
  MenuControlsContainer,
  MenuDivider,
  MenuSelectFontFamily,
  MenuSelectFontSize,
  MenuSelectHeading,
  MenuSelectTextAlign,
  isTouchDevice,
} from "mui-tiptap";

export default function EditorMenuControls() {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'absolute', top: '190px', border: "1px solid #9E9E9E ", height: "40px", borderRadius: "8px", width: "500px" }}>


      <MenuControlsContainer>
        <MenuSelectFontFamily
          options={[
            { label: "Comic Sans", value: "Comic Sans MS, Comic Sans" },
            { label: "Cursive", value: "cursive" },
            { label: "Monospace", value: "monospace" },
            { label: "San Serif", value: "serif" },
          ]}
        />
        <MenuDivider />
        <MenuSelectFontSize  defaultValue="12px" label="San Sarif" />
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
