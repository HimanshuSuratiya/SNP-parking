import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  ArrowBack as ArrowBackIcon,
  SupervisorAccount,
  VpnKey,
  Security,
  ContactSupport,

  Settings,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import ArticleIcon from '@mui/icons-material/Article';
import useStyles from "./styles";
import SidebarLink from "./components/SidebarLink/SidebarLink";
import CarRentalIcon from '@mui/icons-material/CarRental';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import QuizIcon from '@mui/icons-material/Quiz';
import { useLayoutState, useLayoutDispatch, toggleSidebar, } from "../../context/LayoutContext";
import PaidIcon from '@mui/icons-material/Paid';

const structure = [
  {
    id: 0,
    label: "Dashboard",
    link: "/app/dashboard",
    icon: <HomeIcon />
  },
  {
    id: 1,
    label: "Manage Loction ",
    link: "/app/managelocation",
    icon: <EditLocationAltIcon />,
  },
  {
    id: 2,
    label: "Manage Parking ",
    link: "/app/admin",
    icon: <PersonPinCircleIcon />,
  },
  {
    id: 3,
    label: "Manage Car",
    link: "/app/manage-car",
    icon: <CarRentalIcon />,
  },
  {
    id: 4,
    label: "List Your Space",
    link: "/app/list-your-space",
    icon: <SpaceBarIcon />,
  },
  {
    id: 5,
    label: "Manage Customers",
    link: "/app/merchants",
    icon: <SupervisorAccount />,
  },
  {
    id: 6,
    label: "Bookings",
    link: "/app/bookings",
    icon: <LibraryBooksIcon />
  },
  {
    id: 7,
    label: "Setting",
    link: "/app/settings",
    icon: <Settings />
  },
  {
    id: 8,
    label: "Payment",
    link: "/app/payment",
    icon: <PaidIcon />
  },
  // {
  //   id: 2,
  //   label: "Settings",
  //   link: "/app/settings",
  //   icon: <SettingsApplications />
  // },
  {
    id: 9,
    label: "Notifications",
    link: "/app/notifications",
    icon: <NotificationsIcon />
  },
  // {
  //   id: 50,
  //   label: "Subscriptions",
  //   link: "/app/subscriptions",
  //   icon: <Subscriptions/>,
  // },
  {
    id: 10,
    label: "Contact Us",
    link: "/app/create-contact-details",
    icon: <ContactSupport />,
  },
  // {
  //   id: 15,
  //   label: "FAQ",
  //   link: "/app/faq",
  //   icon: <QuestionAnswer />,
  // },
  {
    id: 11,
    label: "Terms & Services",
    link: "/app/create-terms-and-services",
    icon: <Security />,
  },
  {
    id: 12,
    label: "Privacy Policy",
    link: "/app/create-privacy-policy",
    icon: <VpnKey />,
  },
  {
    id: 13,
    label: "Add FAQ ",
    link: "/app/add-faq",
    icon: <QuizIcon />,
  },
  {
    id: 14,
    label: "About ",
    link: "/app/about-us",
    icon: <ArticleIcon />,
  },
];

function Sidebar({ location }) {
  const classes = useStyles();
  const theme = useTheme();
  const { isSidebarOpened } = useLayoutState();
  const layoutDispatch = useLayoutDispatch();
  const [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);