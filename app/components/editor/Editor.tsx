'use client'
import { Lock, LockOpen, TextFields } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import type { EditorOptions } from "@tiptap/core";
import { useCallback, useRef, useState } from "react";
import {
    LinkBubbleMenu,
    MenuButton,
    RichTextEditor,
    RichTextReadOnly,
    TableBubbleMenu,
    insertImages,
    type RichTextEditorRef,
} from "mui-tiptap";
import EditorMenuControls from "./EditorMenuControls";
import useExtensions from "./useExtensions";
import style from './editor.module.css'

export default function Editor() {
    const extensions = useExtensions({
        placeholder: "",
    });
    const rteRef = useRef<RichTextEditorRef>(null);
    const [isEditable, setIsEditable] = useState(true);
    const [showMenuBar, setShowMenuBar] = useState(true);
    const [submittedContent, setSubmittedContent] = useState("");
    return (
        <>

            <RichTextEditor 
                ref={rteRef}
                extensions={extensions}
                editable={isEditable}
                sx={{
                    height: "280px",
                    postion: "relative",
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                   '&.mktoForm form.mktoForm .mktoFieldWrap fieldset': {border: "0px"}
                   
                }}
            immediatelyRender={false}
            editorProps={{
            }}
            renderControls={() => <EditorMenuControls />}
            RichTextFieldProps={{
                variant: "outlined",
                border: "none",


            }}
            >
        </RichTextEditor >
        </>
    );
}






