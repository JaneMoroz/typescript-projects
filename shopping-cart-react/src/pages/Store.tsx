import React from "react";
import storeItems from "../data/items.json";
import { Grid, Typography } from "@mui/material";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <>
      <Typography
        sx={{ margin: "10px 0" }}
        gutterBottom
        color="primary"
        variant="h4"
      >
        Store
      </Typography>
      <Grid container spacing={3}>
        {storeItems.map((item) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <StoreItem {...item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Store;
