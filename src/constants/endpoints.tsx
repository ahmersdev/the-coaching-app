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
  DELETE_MACRO: `deleteMacro`,
  ASSIGN_DIET: `assignDietPlan`,
  GET_DIET: `getDietPlan`,
  DELETE_DIET_DAY: `deleteDietDay`,
  DELETE_DIET_MEAL: `deleteMeal`,
  GET_CLIENT_DETAILS_BY_ID: `getClientDetailsById`,
};

export const STRIPE = {
  GET_SECRET: `getClientSecret`,
};

export const GUARDS = {
  SUBSCRIPTION_STATUS: `CheckSubscriptionStatus`,
};
