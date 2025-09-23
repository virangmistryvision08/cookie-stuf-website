import React, { useState } from "react";
import styles from "./Card.module.css";
import {
  Alert,
  Box,
  Button,
  CardActions,
  ListItem,
  ListItemText,
  Snackbar,
} from "@mui/material";
import { addToCart } from "../../slices/addToCartSlice";
import { useDispatch } from "react-redux";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Card = ({ src, name, price, course, product }) => {
  const [quantities, setQuantities] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    const quantity = quantities[product.id] || 1;
    dispatch(addToCart({ ...product, quantity }));
    setSnackbarMsg(`${product.productName} added to cart!`);
    setSnackbarOpen(true);

    setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
  };

  const increaseProductQuantity = (productId) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const decreaseProductQuantity = (productId) => {
    setQuantities((prev) => {
      const newQty = (prev[productId] || 1) - 1;
      return {
        ...prev,
        [productId]: newQty > 1 ? newQty : 1,
      };
    });
  };

  return (
    <div id={styles.card}>
      <div id={styles.divImg}>
        <img id={styles.featuredIMG} src={src} alt="" />
      </div>
      <div id={styles.content}>
        <div>
          <h2 id={styles.name}>{name} </h2>
          <p className={styles.lifeTimeAccess}>(Lifetime Access)</p>
          <div id={styles.rating}>
            <p style={{ color: "#f99106" }}>4.2</p>
            <div id={styles.stars}>
              <p style={{ color: "#f99106" }}>&#x2605;</p>
              <p style={{ color: "#f99106" }}>&#x2605;</p>
              <p style={{ color: "#f99106" }}>&#x2605;</p>
              <p style={{ color: "#f99106" }}>&#x2605;</p>
              <p style={{ color: "#f99106" }}>&#x2606;</p>
            </div>
            <p style={{ color: "#949494ff" }}>(2,002)</p>
          </div>
          <div id={styles.price}>
            {" "}
            <span id={styles.bigRuppesIcon}>&#8377; {price}</span>
            <span id={styles.smallRuppesIcon}>&#8377; 5000</span>
          </div>
        </div>

        {course ? <div id={styles.course}>{course}</div> : ""}
        <div
          className={styles.addToCart}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: `${course ? "start" : "start"}`,
          }}
        >
          <ListItem>
            <Box
              sx={{ width: "80%", margin:"0 auto", display: "flex" }}
            >
              <Button
                size="small"
                variant="outlined"
                onClick={() => decreaseProductQuantity(product.id)}
              >
                <RemoveIcon />
              </Button>
              <ListItemText
                sx={{
                  textAlign: "center",
                }}
                primaryTypographyProps={{
                  sx: {
                    color: "black",
                    fontSize: "20px",
                  },
                }}
                primary={quantities[product?.id] || 1}
              />
              <Button
                size="small"
                variant="outlined"
                onClick={() => increaseProductQuantity(product.id)}
              >
                <AddIcon />
              </Button>
            </Box>
          </ListItem>

          <CardActions>
            <Button
              sx={{
                width: "100%",
                background: "linear-gradient(to left, #f99106 30%, #ffcc00 90%)",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #e68005 30%, #ffb300 90%)",
                },
                display:"flex",
                gap:"5px"
              }}
              variant="contained"
              size="large"
              onClick={() => handleAdd(product)}
            >
              <ShoppingCartIcon />
              Add to Cart
            </Button>
          </CardActions>
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Card;
