"use client";

import { Provider } from "react-redux";
import store from "@/store/store";
import StripeLayout from "@/layouts/stripe";
import { IChildrenProps } from "@/interfaces";

const Stripe = ({ children }: IChildrenProps) => {
  return (
    <main style={{ background: "#0B0B12", color: "#f9fafb" }}>
      <Provider store={store}>
        <StripeLayout>{children}</StripeLayout>
      </Provider>
    </main>
  );
};

export default Stripe;
