

import { Autocomplete, Box, Button, colors, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Stack, styled, TextField, Typography } from "@mui/material";
import MinimizeIcon from '@mui/icons-material/Minimize';
import styles from "../style/form.module.css";
import CloseIcon from '@mui/icons-material/Close';
import DateComponent from "./date-component";
import Caption from "./caption-component";
import { Controller, useForm } from 'react-hook-form';
import { formFillUpSchema, FormFillUpSchema } from "../schema/form.schema";
import { zodResolver } from '@hookform/resolvers/zod';

const CustomTextField = styled(TextField)({
  marginLeft: "24px",
  width: "600px",
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '10px',
    height: "50px",
  },
  '& .MuiInputLabel-root': {
    fontSize: '14px',
    color: "#9E9E9E",
    top: "-5px"
  },
});


const CustomSelect = styled(Select)({
  marginLeft: "24px", width: "287px", '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '10px',
    height: "50px",
  }, '& .MuiInputLabel-root': {
    fontSize: '14px',
    color: "#9E9E9E",
    top: "-5px",


  },
})
const CustomAutoComplete = styled(Autocomplete)({
  width: "287px",
  height: "8px",
  marginLeft: "24px",
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '10px',
    height: "50px"
  },
  '& .MuiInputLabel-root': {
    fontSize: '14px',
    color: "#9E9E9E",
    marginLeft: "-8px"

  },
})
const CustomSVGIcon = () => (
  <img
    src="/info.svg"
    alt="custom icon"
    style={{ width: "20px", height: "20px", marginRight: "20px", marginTop: "-4px" }}
  />
);

export default function DummyFormFillUp() {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFillUpSchema>({
    resolver: zodResolver(formFillUpSchema),
    defaultValues: {
      name: '',
      requestedBy: '',
      requestingInstitution: '',
      type: '',
      domain: '',
      collaboratorDomain: '',
      followerDomain: '',
      benifitedInstitutions: '',
      studyModality: '',
      mandatory: 'Yes',
      alternativeSolutions: 'No',
      userImpact: 'high',
      impact: '',
      complexityEffort: 'L',
      clientPriority: 'Ten',
      status: 'registred',
      startDate: new Date(),
      finishDate: new Date(),
      description: "",
    },
  });
  const onSubmit = async (data: any) => {

  };



  return (

    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" gap={1}>

          <CustomTextField
            label="Name"
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />


          <CustomTextField
            label="Requested by"
            variant="outlined"
            {...register("requestedBy")}
            error={!!errors.requestedBy}
            helperText={errors.requestedBy?.message}
          />


          <Controller
            name="requestingInstitution"
            control={control}
            render={({ field }) => (
              <CustomAutoComplete
                {...field}
                disablePortal
                options={["IIT", "NIT", "LPU"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Requesting institution"
                    error={!!errors.requestingInstitution}
                    helperText={errors.requestingInstitution?.message}
                  />
                )}
              />
            )}
          />


          <Controller
            name="mandatory"
            control={control}
            render={({ field }) => (
              <CustomSelect {...field}>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </CustomSelect>
            )}
          />

          <button type="submit">Submit</button>
        </Stack>
      </form>

    </>
  )
}