export const AMEX_LOGO = 'src/assets/images/amex_logo.png';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

const SIDEBAR_NAVS = [
    {
        name: 'Dashboard',
        path: '/'
    },
    {
        name: 'Flows',
        path: '/flows'
    },
    // {
    //     name: 'Maps',
    //     path: '/maps'
    // },
    {
        name:'Job',
        path:'/job'
    },
    {
        name:'Library',
        path:'/library'
    },
    {
        name:'Connection',
        path:'/connection'
    },
    {
        name:'Job History',
        path:'/job History'
    },
    {
        name:'Scheduler',
        path:'/scheduler'
    },
    {
        name:'Approvals',
        path:'/approvals'
    }
];

const leftsideicons=[
    {
        id:1,
        tag:MailIcon
    },
    {
        id:2,
        tag:InboxIcon
    },
    {
        id:3,
        tag:MailIcon
    },
    {
        id:4,
        tag:MailIcon
    },
    {
        id:5,
        tag:MailIcon
    },
    {
        id:6,
        tag:MailIcon
    },
    {
        id:7,
        tag:MailIcon
    },
    {
        id:8,
        tag:MailIcon
    },
    
]

export {SIDEBAR_NAVS,leftsideicons}