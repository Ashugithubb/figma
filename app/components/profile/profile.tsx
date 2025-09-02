import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Box, DialogContent, IconButton, makeStyles, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const emails = ['username@gmail.com', 'user02@gmail.com'];
import LogoutIcon from '@mui/icons-material/Logout';
export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open} sx={{

            "& .MuiDialog-container": {
                alignItems: "flex-start",
                width: "250px",
                height: "290px",
                marginLeft: "1600px",
                marginTop: "30px"
            }
        }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "208px", height: "122px", gap: 3 }}>
                <Box sx={{ marginLeft: "15px" }}>
                    <Typography sx={{ marginTop: "15px", color: "#424242", fontSize: "16px" }}>Ashutosh</Typography>
                    <Typography sx={{ fontSize: "14px", color: "#757575" }}>ashutosh.1173@gmil..</Typography></Box>
                <Paper sx={{ marginBottom: "-166px", display: "flex", flexDirection: "column" }} elevation={4}>
                    <Button>

                        <IconButton sx={{ marginLeft: "-90px", marginBottom: "10PX" }}><img src={"/exit_to_app.svg"} /> </IconButton>
                        <Typography sx={{
                            color: "#424242",
                            fontFamily: "Open Sans",
                            fontSize: "16px",
                            fontweight: "400",
                            textTransform: "none",
                            marginBottom: "10PX"

                        }}>
                            Log out</Typography>
                    </Button>

                </Paper>
            </Box>

        </Dialog >
    );
}

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>


            <br />

            <Button variant="outlined" onClick={handleClickOpen} sx={{ border: "none", color: "white", background: "#01579B", width: "170px", height: "36px", textTransform: 'none', }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Avatar alt="" src="/static/images/avatar/1.jpg" sx={{ width: "20px", height: "20px", color: "#01579B", background: "white" }} />
                    <Typography sx={{ height: "20px" }}>Ashutosh </Typography>
                    <Box sx={{ marginTop: "-9px" }}><KeyboardArrowDownIcon sx={{ color: "white" }} /></Box>
                </Box>

            </Button>


            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}

            />
        </div>
    );
}
