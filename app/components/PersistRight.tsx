import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FormFillUp from './formFillUp/form-fiil-up';
import FormComponenet from './form';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function AnchorTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: "620px", marginTop: "65px", overflow:"hidden" }}
            role="presentation"
        >
            <FormComponenet />
        </Box>
    );

    return (
        <div style={{ }}>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor} >
                   <Button variant='contained' sx={{ marginTop: "-2150px", marginRight: "25px", background: "#01579B", borderRadius: "10px" ,}} onClick={toggleDrawer(anchor, true)}>CREATE NEW</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        sx={{ zIndex: "1", width: "100px", marginLeft: "100px" }}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
