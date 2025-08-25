"use client"
import { MenuItem, Select } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function SelectLanguage() {
    const [locale, setLocale] = useState('en');
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const t = useTranslations('loginPageText');
    const changeLocale = async (locale: string) => {
        document.cookie = `locale=${locale}; path=/; max-age=300`;
        setLocale(locale);
        startTransition(() => {
            router.refresh();
        });
    };
    return (
        <>
            <Select
                value={locale}
                onChange={(e) => changeLocale(e.target.value)}
                sx={{
                    borderRadius: "none",
                    '.MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    color: "#424242",
                    "& .MuiSelect-icon": {
                        color: "#757575",
                        right: "-3px",
                        fontSize: "24px",
                    },
                    fontFamily:"Open Sans"
                }}
            >
                <MenuItem value="en" sx={{fontFamily:"Open Sans"}}>{t('english')}</MenuItem>
                <MenuItem value="es" sx={{fontFamily:"Open Sans"}}>{t('spanish')}</MenuItem>
            </Select>

        </>
    )
}