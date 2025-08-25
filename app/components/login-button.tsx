import { Box, Button } from "@mui/material";
import styles from "../style/login.module.css";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginButton(){
      const searchParams = useSearchParams();
      const callbackUrl = searchParams.get("callbackUrl") || "/home";
      const t = useTranslations('loginPageText');
    return(
        <>
        <Box className={styles.login}>{t('loginText')}</Box>
            <Box className={styles.google_container}>
              <img src={"/logo googleg 48dp.svg"} />
              <Button style={{
                border: "none",
                fontSize: "14px"
              }} className={styles.google_Inner_Container}
                variant="outlined"
                onClick={() => signIn("google", { callbackUrl })}
                sx={{ textTransform: 'none', color: "#757575", fontWeight: 600, fontStyle: 'normal', fontFamily: "Open Sans, Arial, sans-serif", fontSize: "14px" }}
              >
                {t('continueWithGoogle')}
              </Button>
            </Box>
        </>
    )
}