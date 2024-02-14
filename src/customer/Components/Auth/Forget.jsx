import * as React from "react";
import { Grid, TextField, Button, Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  sendOTP,
  verifyOTPAndUpdatePassword,
} from "../../../Redux/Auth/Action";

export default function Forget() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { auth } = useSelector((store) => store);
  const [otpSent, setOTPSent] = useState(false);

  const handleCloseSnackBar = () => setOpenSnackBar(false);

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    dispatch(sendOTP(email));
    setOTPSent(true); // Set otpSent to true after sending OTP
  };

  const handleOTPSubmit = (event) => {
    event.preventDefault();
    dispatch(verifyOTPAndUpdatePassword(email, otp, newPassword));
  };

  useEffect(() => {
    if (auth.isPasswordUpdated) {
      setOpenSnackBar(true); // Open Snackbar if password is updated successfully
    }
  }, [auth.isPasswordUpdated]);

  return (
    <React.Fragment>
          <form className="w-full" onSubmit={handleEmailSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0", width: "100%" }}
            >
              Send OTP
            </Button>
          </Grid>
        </Grid>
      </form>

      {otpSent && (
        <form className="w-full" onSubmit={handleOTPSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="otp"
                name="otp"
                label="Enter OTP"
                fullWidth
                autoComplete="off"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="newPassword"
                name="newPassword"
                label="New Password"
                type="password"
                fullWidth
                autoComplete="off"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ padding: ".8rem 0", width: "100%" }}
              >
                Update Password
              </Button>
            </Grid>
          </Grid>
        </form>
      )}

      {otpSent && ( // Display OTP input form only after OTP is sent
        <form className="w-full" onSubmit={handleOTPSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="otp"
                name="otp"
                label="Enter OTP"
                fullWidth
                autoComplete="off"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="newPassword"
                name="newPassword"
                label="New Password"
                type="password"
                fullWidth
                autoComplete="off"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ padding: ".8rem 0" }}
              >
                Update Password
              </Button>
            </Grid>
          </Grid>
        </form>
      )}

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
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={auth.error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {auth.error ? auth.error : "Password updated successfully"}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
