"use client";

import { Provider } from "react-redux";
import store from "@/store/store";
import StripeLayout from "@/layouts/stripe";
import { IChildrenInterface } from "@/interfaces";

const Stripe = ({ children }: IChildrenInterface) => {
  return (
    <main style={{ background: "#0B0B12", color: "#f9fafb" }}>
      <Provider store={store}>
        <StripeLayout>{children}</StripeLayout>
      </Provider>
    </main>
  );
};

export default Stripe;
