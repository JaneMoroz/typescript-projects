import React from "react";
import { Drawer, IconButton, Typography, List } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

const classes = {
  drawer: {
    width: "340px",
    ".MuiDrawer-paper": {
      width: "340px",
    },
  },
  total: {
    textAlign: "right",
    padding: "0 20px",
  },
};

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Drawer
      sx={classes.drawer}
      open={isOpen}
      onClose={closeCart}
      anchor="right"
    >
      <div
        style={{
          display: "flex",
          padding: "16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Cart</Typography>
        <IconButton onClick={closeCart} size="large" color="secondary">
          <Close />
        </IconButton>
      </div>
      <List sx={{ paddingRight: "16px" }}>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </List>
      <Typography sx={classes.total} variant="h6">
        Total:{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((item) => item.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </Typography>
    </Drawer>
  );
};

export default ShoppingCart;
