export const AUTH = {
  CHECK_USERNAME: `checkCoachUsername`,
  REGISTER_COACH: `registerCoach`,
  OTP_VERIFICATION: `verifyVerificationCodeforEmail`,
  OTP_RESEND: `verifyCoachEmail`,
  FORGOT_PASSWORD_OTP: `verifyCoachForgetPassword`,
  FORGOT_PASSWORD_VERIFY: `verifyVerificationCodeforForgetPassword`,
  CREATE_PASSWORD: `createCoachPassword`,
  SIGN_IN: `coachSignIn`,
};

export const COACH_SITE = {
  PROFILE: `fetchCoachDetails`,
  UPDATE_COACH: `updateCoach`,
  UPDATE_PASSWORD: `updateCoachPassword`,
  SUBSCRIPTIONS: `getCoachSubscriptions`,
  GET_CLIENTS: `getClients`,
  GET_PROGRESS_PICTURES: `getCheckinDetails`,
  CLIENT_PROGRESS_FEEDBACK: `addFeedback`,
  ASSIGN_WORKOUT: `assignWorkout`,
  GET_WORKOUT: `getWorkout`,
  DELETE_WORKOUT_DAY: `deleteDay`,
  DELETE_WORKOUT_EXERCISE: `deleteExercise`,
  ASSIGN_MACRO: `assignMacro`,
  GET_MACRO: `getMacros`,
  ASSIGN_DIET: `assignDietPlan`,
  GET_DIET: `getDietPlan`,
  DELETE_DIET_DAY: `deleteDietDay`,
  DELETE_DIET_MEAL: `deleteMeal`,
  GET_CLIENT_DETAILS_BY_ID: `getClientDetailsById`,
  GET_CLIENT_ALERTS: `getClientPreferencesForCoach`,
  POST_CLIENT_ALERTS_STATUS: `updateClientPreferencesForCoach`,
  SEARCH_FOOD: `searchFood`,
};

export const ADMIN_SITE = {
  PROFILE: `fetchCoachDetails`,
  UPDATE_PASSWORD: `updateCoachPassword`,
  GET_ALL_COMPLAINTS: `getAllComplaints`,
  REPLY_COMPLAINT: `replyComplaint`,
  GET_ALL_FAQS: `getAllFAQ`,
  POST_FAQ: `addFAQ`,
  DELETE_FAQ: `deleteFAQ`,
};

export const STRIPE = {
  GET_SECRET: `getClientSecret`,
};

export const GUARDS = {
  SUBSCRIPTION_STATUS: `CheckSubscriptionStatus`,
};
