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

const StoreItem = ({ name, imgUrl, price }: StoreItemProps) => {
  const quantity = 0;
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
              <IconButton size="large" color="secondary">
                <Remove />
              </IconButton>
              <span style={classes.quantity}>1</span>
              <IconButton size="large" color="secondary">
                <Add />
              </IconButton>
            </div>
            <IconButton aria-label="delete" size="small" color="secondary">
              <Delete />
            </IconButton>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default StoreItem;
