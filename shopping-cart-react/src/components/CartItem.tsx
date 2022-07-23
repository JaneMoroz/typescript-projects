import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton
          onClick={() => removeFromCart(id)}
          edge="end"
          aria-label="delete"
        >
          <Delete fontSize="small" />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar alt={item.name} src={item.imgUrl} />
      </ListItemAvatar>
      <ListItemText
        sx={{ width: "120px" }}
        primary={`${item.name} ${quantity > 1 ? `x${quantity}` : ""}`}
        secondary={formatCurrency(item.price)}
      />
      <ListItemText
        sx={{ textAlign: "right" }}
        secondary={formatCurrency(item.price * quantity)}
      />
    </ListItem>
  );
};

export default CartItem;
