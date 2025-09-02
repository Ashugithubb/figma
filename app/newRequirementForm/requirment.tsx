import { Box, Button, IconButton, Paper } from "@mui/material";
import style from './requirment.module.css';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import InputSection from "./inputSection/inputSection";
import BenificerySection from "./benificerySection/benificery.section";
import TimeLine from "./timeline/timeline";
import HeaderComponent from "./header/header";
import Caption from "../components/caption-component";
import ImpactComponent from "./impact/impact";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formFillUpSchema, FormFillUpSchema } from "../schema/form.schema";

export default function ReqFormComponent() {
   const methods = useForm<FormFillUpSchema>({
    resolver: zodResolver(formFillUpSchema),
    defaultValues: {
      name: "",
      requestedBy: "",
      requestingInstitution: "",
      type: "",
      domain: "",
      collaboratorDomain: [],
      followerDomain: [],
      benefitedInstitutions: [],
      studyModality: [],
      mandatory: "",
      alternativeSolutionExist: "",
      userImpact: "",
      impact: "",
      complexityAndEffort: "",
      clientPriority: "",
      status: "",
      description: "",
    },
  });
  const onSubmit = (data: FormFillUpSchema) => {
    alert("Submitted!");
    console.log(" Form Data:", data);

  };
  return (
    <>
      <HeaderComponent />
<FormProvider {...methods}>
      <Box component="form"   onSubmit={methods.handleSubmit(onSubmit)} className={style.mainBox} sx={{
        marginTop: "-55px",
        paddingTop: "72px",
        zIndex: -1,
      }}>
        <InputSection />
        <BenificerySection />
        <ImpactComponent />
        <TimeLine />
        <Caption />
     <Box
        sx={{
          position: "sticky",
          bottom: 0,
          background: "#fff",
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
          paddingBottom: "0px",
          zIndex: 10,
          height: "68px"
        }}
      >
        <Button type="submit" sx={{ color: "#01579B" }}>CREATE</Button>
      </Box>
      </Box>
    
      </FormProvider>
    </>
  )
}