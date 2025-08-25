"use client";
import { Box, Button,Paper, Select } from "@mui/material";
import styles from "../style/login.module.css";
import { useTranslations } from 'next-intl';
import SelectLanguage from "../components/language-selector";
import LoginButton from "../components/login-button";
export default function LoginPage() {
  const t = useTranslations('loginPageText');
  return (
    <Box className={styles.image_div}>
      <Box className={styles.main_box}>
        <Paper className={styles.paper} sx={{ boxShadow: 0 }}>
          <Box className={styles.left}>
            <Box className={styles.icon_container}>
              <Box className={styles.icon}>
                <img src={"/group5.svg"} />
              </Box>
            </Box>
            <Box className={styles.header}>{t('title')}</Box>
            <Box className={styles.text}>{t('text')}</Box>
          </Box>
          <Box className={styles.right}>
            <LoginButton />
          </Box>
        </Paper>
        <Box className={styles.translator}>
          <SelectLanguage />
        </Box>
      </Box>
    </Box>
  );
}



