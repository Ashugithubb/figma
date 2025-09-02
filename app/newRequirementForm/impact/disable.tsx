import { Autocomplete, TextField } from "@mui/material";

const CustomSVGIcon = () => (
  <img
    src="/info.svg"
    alt="custom icon"
    style={{ width: "20px", height: "20px", marginRight: "20px", marginTop: "-4px" }}
  />
);

export default function DisableAutoComplte({ value,labelValue }: { value?: string,labelValue:string }) {
  return (
    <Autocomplete
      disablePortal
      options={["-"]}
      size="small"
      disabled
      value={value && value.trim() !== "" ? value : "-"} 
      popupIcon={<CustomSVGIcon />}
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: "8px",
        },
        "& .MuiInputLabel-root": {
          fontSize: "14px",
          color: "#9E9E9E",
        },
      }}
      renderInput={(params) => (
        <TextField {...params} label={labelValue} />
      )}
    />
  );
}
