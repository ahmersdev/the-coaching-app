import { AUTH } from "@/constants/endpoints";
import { baseAPI } from "../base-api";

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
} = authAPI;
