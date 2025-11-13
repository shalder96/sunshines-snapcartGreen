import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const formVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleToggle = () => setIsLogin(!isLogin);

  const handleInput = (e) => {
    console.log(e.target.value);
    let {name, value} = e.target

    setUser({
      ...user,
      [name]: value,
    }); 
  }

  //Handle form submit
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!isLogin && user.password !== user.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (isLogin) {
    console.log("Logging in:", user.email);
  } else {
    console.log("Registering user:", user);
  }

  // Reset form (optional)
  setUser({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
};



  return (
    <Box
      component={Paper}
      elevation={4}
      sx={{
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        mt: 10,
        p: 4,
        borderRadius: 4,
        backgroundColor: "#dcfce7",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? "login" : "register"}
          variants={formVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
            {isLogin ? "Login to SnapCart" : "Create Your Account"}
          </Typography>

          <form action="">
              {!isLogin && (
              <TextField
                fullWidth
                aria-label="username"
                margin="normal"
                label="Username"
                name="username"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
              />
            )}

            <TextField
              fullWidth
              aria-label="email"
              margin="normal"
              label="Email"
              name="email"
              type="email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
            />
            <TextField
              fullWidth
              aria-label="password"
              margin="normal"
              label="Password"
              name="password"
              type="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
            />

            {!isLogin && (
              <TextField
                fullWidth
                aria-label="confirm password"
                margin="normal"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            )}

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              type="submit"
            >
              {isLogin ? "Login" : "Register"}
            </Button>
          </form>

          <Typography align="center" sx={{ mt: 2 }}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <Button size="small" onClick={handleToggle}>
              {isLogin ? "Register" : "Login"}
            </Button>
          </Typography>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default AuthForm;
