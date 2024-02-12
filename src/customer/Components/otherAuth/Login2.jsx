import * as React from "react";
import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { sendOTP,  verifyOTPAndUpdatePassword,
  login, } from "../../../Redux/Auth/Action";
import { useEffect, useState } from "react";

export default function LoginUserForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [otpSent, setOTPSent] = useState(false);
  const { auth } = useSelector((store) => store);
  const handleCloseSnackbar = () => setOpenSnackBar(false);

  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [password, setPassword] = useState("");

  const handleGenerateOTP = (event) => {
    event.preventDefault();
    dispatch(sendOTP(email));
    setOTPSent(true);
  };
  console.log(email, otp, password);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login({ email, otp, password }));
  };

  return (
    <React.Fragment className=" shadow-lg ">
      <form className="w-full ">
        <div container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          {!otpSent ? (
            <div className=" my-2">
              <Button
                className="bg-[#9155FD]  w-full"
                type="button"
                variant="contained"
                size="large"
                sx={{ padding: ".8rem 0" }}
                onClick={handleGenerateOTP}
              >
                Get OTP
              </Button>
            </div>
          ) : (
            <div className=" flex flex-row  my-3  w-full  justify-around">
              <div className=" w-full">
                <TextField
                  required
                  id="otp"
                  name="otp"
                  className=" w-full "
                  label="OTP"
                  fullWidth
                  autoComplete="off"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />
              </div>
            </div>
          )}
          {otpSent && (
            <div className=" mb-2">
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                fullWidth
                autoComplete="given-name"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
          {otpSent && (
            <div item xs={12}>
              <Button
                className="bg-[#9155FD]  w-full"
                type="button"
                variant="contained"
                size="large"
                sx={{ padding: ".8rem 0" }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          )}
        </div>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p className="m-0 p-0">Don't have an account?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5"
            size="small"
          >
            Register
          </Button>
        </div>
        <div className="py-3 flex items-center">
          <Button
            onClick={() => navigate("/forget")}
            className="ml-5"
            size="small"
          >
            Forget Password
          </Button>
        </div>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {auth.error ? auth.error : auth.user ? "Login Success" : ""}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
