import React, { useState } from 'react';
import { Box, Typography, IconButton, Button, Divider, Link } from '@mui/material';
import {NavLink} from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
// import AuthPage from '../pages/AuthPage'


const initialCart = [
  {
    id: 1,
    name: 'Organic Spinach',
    price: 60,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1683536905403-ea18a3176d29?q=80',
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    price: 40,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1683008952520-1e32a56a4f40?q=80',
  },
];

const Cart = () => {


  const [cartItems, setCartItems] = useState(initialCart);

  const handleQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
   <section className='w-full min-h-screen pt-12 bg-white dark:bg-black'>
    <NavLink to="/AuthPage" className="p-8 text-black dark:text-white">
      Login
    </NavLink>

    
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 3, pt: 16 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'green' }}>
        🛒 Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <>
          {cartItems.map(item => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                mb: 2,
                border: '1px solid #ccc',
                borderRadius: 2,
                backgroundColor: 'white',
                boxShadow: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }}
                />
                <Box>
                  <Typography variant="subtitle1">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={() => handleQuantity(item.id, -1)} color="primary">
                  <RemoveIcon />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => handleQuantity(item.id, 1)} color="primary">
                  <AddIcon />
                </IconButton>
                <IconButton onClick={() => handleRemove(item.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Total: ₹{totalPrice}</Typography>
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() => alert('Proceeding to checkout (dummy)')}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
   </section>
  );
};

export default Cart;
