import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemButton,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { NavbarData } from "../Data/Data";

export const MobileNavbar = () => {
  const [expanded, setExpanded] = useState(null);
  const [open, setOpen] = useState(false);

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div
      className={` sticky  top-0 w-full   z-50  lg:hidden  px-6  py-5 shadow-md flex items-center justify-between gap-2  bg-bgblue-500 `}
    >
      <Link to="/" className=" w-48 h-12   ">
        <img
          src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67456d87b115f43b4135f2cf.png"
          alt=""
        />
      </Link>
      <div className="lg:hidden block" onClick={toggleDrawer(true)}>
        <MenuIcon className="text-white-500" style={{ fontSize: "36px" }} />
      </div>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        className="lg:hidden"
      >
        <List
          style={{ width: 280, height: "100vh" }}
          className="relative bg-blue-600"
        >
          <div className="lg:w-44 lg:h-10 w-28 h-8  m-4">
            <img
              src="https://storage.googleapis.com/msgsndr/Poa647Oe1YUX8DVrwFdy/media/67456d87b115f43b4135f2cf.png"
              alt="Logo"
            />
          </div>
          {NavbarData.map((item, index) => (
            <div key={index} className="text-white-500">
              <ListItemButton onClick={() => handleExpand(index)}>
                <ListItemText primary={item.title} />
                {item.item ? (
                  expanded === index ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItemButton>

              {item.item && (
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.item.map((child, childIndex) => (
                      <ListItem key={childIndex} sx={{ pl: 4 }}>
                        <ListItemText primary={child.title && child.title} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
