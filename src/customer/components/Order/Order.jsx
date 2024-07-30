import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  {
    lable: "On the way",
    value: "on_the_way",
  },
  {
    lable: "Delivered",
    value: "delivered",
  },
  {
    lable: "Cancelled",
    value: "cancelled",
  },
  {
    lable: "Returned",
    value: "returned",
  },
];

const Order = () => {
  return (
    <div className="px-5 lg:px:20 ">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5} md={3}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Order Summary</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status</h1>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor="{option.lable}"
                  >
                    {option.lable}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
            <div className="space-y-5">
            {[1,2,3,4,5].map((item) => (
                <OrderCard />
            ))}
            </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
