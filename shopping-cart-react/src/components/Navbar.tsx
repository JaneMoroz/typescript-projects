import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";

const classes = {
  active: {
    background: "#eecdcd",
  },
  nav: {
    flexGrow: 1,
    marginRight: "16px",
  },
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Store",
      path: "/store",
    },
    {
      text: "About",
      path: "/about",
    },
  ];

  return (
    <AppBar sx={{ background: "#eddada" }} component="nav" position="static">
      <Toolbar>
        <div style={classes.nav}>
          {navItems.map((item) => (
            <Button
              key={item.text}
              sx={location.pathname === item.path ? classes.active : null}
              onClick={() => navigate(item.path)}
            >
              {item.text}
            </Button>
          ))}
        </div>
        <IconButton>
          <ShoppingCartOutlined aria-label="shopping cart" color="primary" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
