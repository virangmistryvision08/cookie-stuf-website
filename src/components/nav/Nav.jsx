import React, { useState } from "react";
import styles from "./Nav.module.css";
import logo from "../../../images/Group.png"
import { Link, NavLink, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  clearCart,
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../../slices/addToCartSlice";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [id, setId] = useState(null);
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery("(max-width:700px)");

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0
  );

  const deleteProduct_AddToCart = (productId) => {
    setOpenDelete(true);
    setId(productId);
  };

  const confirmationOfDeleteModal = () => {
    dispatch(deleteItem(id));
    setOpenDelete(false);
    setId(null);
  };

  const cancelConfirmationOfDeleteModal = () => {
    setOpenDelete(false);
  };

  const handleCloseDeleteModal = () => {
    setOpenDelete(false);
  };

  const goToHome = () => {
    navigate("/");
    setShow(false);
  };

  return (
    <>
      <div id={styles.wrapper}>
        <nav>
          <div onClick={() => goToHome()} className={styles.logo}>
            <img
              className={styles.logoImg}
              src={logo}
              alt="Logo"
            />
            <div className={styles.logoText}>
              <p>Cooking</p> Stuff
            </div>
          </div>

          <span className={`${styles.tabs} ${show && styles.show}`}>
            <NavLink
              onClick={() => setShow(false)}
              to="/"
              className={styles.list}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setShow(false)}
              to="/courses"
              className={styles.list}
            >
              All Course
            </NavLink>
            <NavLink
              onClick={() => setShow(false)}
              to="/contact-us"
              className={styles.list}
            >
              Contact Us
            </NavLink>
            <NavLink
              onClick={() => setShow(false)}
              to="/posts"
              className={styles.list}
            >
              Posts
            </NavLink>
          </span>

          <div className={`${styles.navButtons} ${show && styles.show}`}>
            <NavLink onClick={() => setShow(false)} to="/cart">
              <IconButton
                size="medium"
                color="inherit"
                onClick={() => setCartOpen(true)}
              >
                <Badge badgeContent={cartItems.length} color="error">
                  {/* <ShoppingCartIcon className={`${styles.list}`} /> */}
                  <i
                    style={{ color: "gray" }}
                    className={`fa-solid fa-cart-shopping ${styles.list}`}
                  ></i>
                </Badge>
              </IconButton>
            </NavLink>
            <NavLink
              onClick={() => setShow(false)}
              to="/sign-in"
              className={styles.list}
            >
              Sign In
            </NavLink>
            <NavLink onClick={() => setShow(false)} to="sign-up">
              Sign Up
            </NavLink>
          </div>

          <div className={styles.hamburgerIcon} onClick={() => setShow(!show)}>
            {show ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </nav>
      </div>

      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        PaperProps={{ sx: { width: isMobile ? "100%" : 600 } }}
      >
        <Container
          sx={{
            width: "100%",
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              variant="h6"
            >
              {cartItems.length === 0 ? (
                <RemoveShoppingCartIcon />
              ) : (
                <ShoppingCartIcon />
              )}{" "}
              Your Cart
            </Typography>
            <Button
              onClick={() => dispatch(clearCart())}
              // size={{ xs: "small", sm: "medium" }}
              sx={{
                width: { xs: "120px", sm: "150px" },
                fontSize: { xs: "12px" },
              }}
              variant="outlined"
            >
              Remove All
            </Button>
            <IconButton onClick={() => setCartOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {cartItems.length === 0 ? (
            <Typography variant="body1" sx={{backgroundImage:"url('../../../images/empty_cart.jpg')", height:"100vh", width:"100%", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover", objectFit:"cover"}}></Typography>
          ) : (
            <List sx={{ flexGrow: 1, overflowY: "auto" }}>
              {cartItems.map((item) => (
                <ListItem
                  key={item.id}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={() => deleteProduct_AddToCart(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: 1,
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src={item.productImg} alt={item.productName} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.productName}
                    primaryTypographyProps={{ color: "black" }}
                    secondary={`Price: ₹${item.productPrice} | Qty: ${
                      item.quantity
                    } | Total: ₹${item.productPrice * item.quantity}`}
                  />
                  <Box
                    sx={{ display: "flex", gap: 1, ml: { xs: "0", sm: "2" } }}
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      <RemoveCircleOutlineIcon />
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      <AddCircleOutlineIcon />
                    </Button>
                  </Box>
                </ListItem>
              ))}
            </List>
          )}

          {cartItems.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Total: ₹{totalPrice}
              </Typography>
              <Button variant="contained" sx={{bgcolor:"#f99106", color:"white"}} fullWidth>
                Checkout
              </Button>
            </Box>
          )}
        </Container>
      </Drawer>

      {/* Delete Modal */}
      <Modal
        open={openDelete}
        onClose={handleCloseDeleteModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "400px" },
            bgcolor: "background.paper",
            boxShadow: 24,
            padding: { xs: "10px", sm: "20px" },
            borderRadius: "10px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="outline-none"
        >
          <Typography
            sx={{ color: "GrayText" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Are you sure you want to Remove it ?
          </Typography>
          <Typography
            sx={{
              marginTop: 2,
              display: "flex",
              alignItems: "center",
              gap: "30px",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={cancelConfirmationOfDeleteModal}
            >
              No
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={confirmationOfDeleteModal}
            >
              Yes
            </Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Nav;
