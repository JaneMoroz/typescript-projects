import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Button,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { formatCurrency } from "../utilities/formatCurrency";
import { ShoppingCart } from "@mui/icons-material";
import { useShoppingCart } from "../context/ShoppingCartContext";

const classes = {
  btns: {
    flexGrow: 1,
    marginRight: "16px",
  },
  quantity: {
    fontSize: "20px",
    padding: "0 4px",
    fontWeight: "300",
  },
  titleContainer: {
    display: "flex",
  },
  title: {
    display: "inline-block",
    flexGrow: 1,
  },
  price: {
    display: "inline-block",
    fontWeight: "300",
  },
};

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, imgUrl, price }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card>
      <CardMedia component="img" alt={name} height="240" src={imgUrl} />
      <CardContent sx={classes.titleContainer}>
        <Typography gutterBottom variant="h5" sx={classes.title}>
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" sx={classes.price}>
          {formatCurrency(price)}
        </Typography>
      </CardContent>
      <CardActions>
        {quantity === 0 ? (
          <Button
            onClick={() => increaseCartQuantity(id)}
            sx={{ width: "100%" }}
            variant="outlined"
            color="secondary"
            startIcon={<ShoppingCart />}
          >
            Add To Cart
          </Button>
        ) : (
          <>
            <div style={classes.btns}>
              <IconButton
                onClick={() => decreaseCartQuantity(id)}
                size="large"
                color="secondary"
              >
                <Remove />
              </IconButton>
              <span style={classes.quantity}>{quantity}</span>
              <IconButton
                onClick={() => increaseCartQuantity(id)}
                size="large"
                color="secondary"
              >
                <Add />
              </IconButton>
            </div>
            <IconButton
              onClick={() => removeFromCart(id)}
              aria-label="delete"
              size="small"
              color="secondary"
            >
              <Delete />
            </IconButton>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default StoreItem;
