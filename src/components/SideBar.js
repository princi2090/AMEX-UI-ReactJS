import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import LanSharpIcon from '@mui/icons-material/LanSharp';
import List from '@mui/material/List';
import StorageTwoToneIcon from '@mui/icons-material/StorageTwoTone';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Header from './Header';
import { SIDEBAR_NAVS} from '../utils/constants';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function SideBar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        console.log(theme.direction);
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton sx={{ marginTop: '60px' }} onClick={open ? handleDrawerClose : handleDrawerOpen}>
                        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}

                        {/* {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                    </IconButton>
                </DrawerHeader>
                <List>
                    {SIDEBAR_NAVS.map((navs, index) => (
                        <Link href={navs.path} key={index}>
                            <ListItem button key={navs.name}>
                                <ListItemIcon>
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                    {/* {<InboxIcon />}
                                    {<MailIcon />} */}
                                   {index===0 ? <MailIcon/>:null}
                                   {index===1 ? <LanSharpIcon/>:null}
                                   {index===2 ? <DashboardIcon/>:null}
                                   {index===3 ? <DashboardIcon/>:null}
                                   {index===4 ? <StorageTwoToneIcon/>:null}
                                   {index===5 ? <DashboardIcon/>:null}
                                   {index===6 ? <DashboardIcon/>:null}
                                   {index===7 ? <MailIcon/>:null} 
                                </ListItemIcon>
                                <ListItemText to='/' primary={navs.name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                {/* <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List> */}
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Typography paragraph>
                </Typography>
                <Typography paragraph>
                </Typography>
            </Box>
        </Box>
    );
}
