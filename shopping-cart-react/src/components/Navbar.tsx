import { AppBar, Toolbar, Button, IconButton, Badge } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

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
  const { openCart, cartQuantity } = useShoppingCart();
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
    <AppBar sx={{ background: "#eddada" }} component="nav" position="sticky">
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
        <IconButton onClick={openCart}>
          <Badge badgeContent={cartQuantity} color="secondary">
            <ShoppingCartOutlined aria-label="shopping cart" color="primary" />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
