import React, { useState, useRef } from "react";
import CartItem from "./CartItem";
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../Redux/Customers/Cart/Action";
import AuthModal from "../Auth/AuthModal";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector((store) => store);

  const [reloadCount, setReloadCount] = useState(0);
  const intervalIdRef = useRef(10);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const handleClose = () => {
    setOpenAuthModal(false);
  };

  useEffect( () => {
    const fetchData = async () => {
      await dispatch(getCart(jwt));
      setReloadCount((prevCount) => prevCount + 1);
    };

    if (!jwt) {
      setOpenAuthModal(true);
    } 

    fetchData();

    if (reloadCount < 5) {
      const intervalId = setInterval(fetchData, 500);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [jwt, dispatch, reloadCount]);

  return (
    <div className=" " >
      {cart.cartItems.length > 0 && (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className=" space-y-3">
              {cart.cartItems.map((item) => (
                <>
                  <CartItem item={item} showButton={true} />
                </>
              ))}
            </div>
          </div>
          
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price ({cart.cart?.totalItem} item)</span>
                  <span>₹{cart.cart.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">
                    -₹{cart.cart?.discount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">
                    ₹{cart.cart?.totalDiscountedPrice}
                  </span>
                </div>
              </div>

              <Button
                onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Check Out
              </Button>
            </div>
            
          </div>

        
        </div>
      )}
   
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
};

export default Cart;
