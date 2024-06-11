import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { signInPost } from "../../store/authSlice/authThunk";
import { useNavigate } from "react-router";

const SignIn = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handlerEmail = (e) => setEmail(e.target.value);
	const handlerPassword = (e) => setPassword(e.target.value);
	const handlerSubmit = (e) => {
		e.preventDefault();
		const newData = {  
			email,
			password,
		};
		dispatch(signInPost({ newData, navigate }));
	};

	return (
		<Box
			component="form"
			onSubmit={handlerSubmit}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				mt: 4,
				width: '100%',
				maxWidth: 360,
				mx: 'auto'
			}}
		>
      <Typography 
      sx={{fontSize:"30px"}}>Login </Typography>
			<TextField
				label="Почта"
				type="email"
				value={email}
				onChange={handlerEmail}
				margin="normal"
				fullWidth
				required
			/>
			<TextField
				label="Пороль"
				type="password"
				value={password}
				onChange={handlerPassword}
				margin="normal"
				fullWidth
				required
			/>
			<Button
				type="submit"
				variant="contained"
				color="primary"
				sx={{
					mt: 2
				}}
			>
				Войти
			</Button>
		</Box>
	);
};

export default SignIn;
