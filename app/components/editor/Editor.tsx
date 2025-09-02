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
                immediatelyRender={false}
                sx={{

                    "& .ProseMirror": {
                        minHeight: "280px",
                        maxHeight: "500px",
                        overflowY: "auto",
                        padding: "12px",
                        height: "300px"
                    },
                }}
                renderControls={() => <EditorMenuControls />}
                RichTextFieldProps={{
                    variant: "standard",
                   
                }}
            ></RichTextEditor>
        </>
    );
}






