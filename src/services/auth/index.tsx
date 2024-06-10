import { AUTH } from "@/constants/endpoints";
import { baseAPI } from "../base-api";
import Stripe from "stripe";
import { STRIPE_PRIVATE_KEY } from "@/config";

const stripe = new Stripe(STRIPE_PRIVATE_KEY, {
  apiVersion: "2024-04-10",
});

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCheckUsername: builder.query({
      query: (params: any) => ({
        url: AUTH.CHECK_USERNAME,
        method: "GET",
        params,
      }),
    }),

    postRegisterCoach: builder.mutation({
      query: (body: any) => ({
        url: AUTH.REGISTER_COACH,
        method: "POST",
        body,
      }),
    }),

    postOtpVerification: builder.mutation({
      query: (body: any) => ({
        url: AUTH.OTP_VERIFICATION,
        method: "POST",
        body,
      }),
    }),

    getResendOtp: builder.query({
      query: (params: any) => ({
        url: AUTH.OTP_RESEND,
        method: "GET",
        params,
      }),
    }),

    postSignIn: builder.mutation({
      query: (body: any) => ({
        url: AUTH.SIGN_IN,
        method: "POST",
        body,
      }),
    }),

    getForgotPasswordOtp: builder.query({
      query: (params: any) => ({
        url: AUTH.FORGOT_PASSWORD_OTP,
        method: "GET",
        params,
      }),
    }),

    postForgotOtpVerification: builder.mutation({
      query: (body: any) => ({
        url: AUTH.FORGOT_PASSWORD_VERIFY,
        method: "POST",
        body,
      }),
    }),

    postCreatePassword: builder.mutation({
      query: (body: any) => ({
        url: AUTH.CREATE_PASSWORD,
        method: "POST",
        body,
      }),
    }),

    postCreateStripeCustomer: builder.mutation({
      queryFn: async (body: any) => {
        try {
          const customer = await stripe.customers.create({
            email: body.email,
            name: body.name,
          });
          return { data: customer };
        } catch (error: any) {
          return { error: { status: 500, data: error.message } };
        }
      },
    }),

    updateStripeId: builder.mutation({
      query: (body: any) => ({
        url: AUTH.UPDATE_STRIPE,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLazyGetCheckUsernameQuery,
  usePostRegisterCoachMutation,
  usePostOtpVerificationMutation,
  useLazyGetResendOtpQuery,
  usePostSignInMutation,
  useLazyGetForgotPasswordOtpQuery,
  usePostForgotOtpVerificationMutation,
  usePostCreatePasswordMutation,
  usePostCreateStripeCustomerMutation,
  useUpdateStripeIdMutation,
} = authAPI;
