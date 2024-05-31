import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AUTH } from "@/constants/routes";
import { useRouter } from "next/navigation";
import {
  getSetPasswordDataArray,
  signUpFormDefaultValues,
  signUpFormValidationSchema,
} from "./sign-up.data";
import { useState } from "react";
import {
  useLazyGetCheckUsernameQuery,
  usePostRegisterCoachMutation,
} from "@/services/auth";
import { errorSnackbar, successSnackbar } from "@/utils/api";

export default function useSignUp() {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const [stepState, setStepState] = useState(1);

  const [errors, setErrors] = useState<any>({
    username: false,
    fullName: false,
    email: false,
    phone: false,
  });

  const router: any = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(signUpFormValidationSchema),
    defaultValues: signUpFormDefaultValues,
  });

  const { handleSubmit, getValues } = methods;

  const togglePasswordVisibility = (field: any) => {
    setPasswordVisibility((prev: any) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const setPasswordDataArray = getSetPasswordDataArray(
    togglePasswordVisibility,
    passwordVisibility
  );

  const [getUsernameTrigger, getUsernameStatus] =
    useLazyGetCheckUsernameQuery();

  const handleNextFirst = async () => {
    const { username } = getValues();

    if (username.trim() === "") {
      setErrors({
        username: "Username is Required",
        fullName: false,
        email: false,
        phone: false,
      });
      return;
    }

    try {
      const res = await getUsernameTrigger({
        username,
      }).unwrap();

      if (res?.alreadyExists === 1) {
        setErrors({
          username: "User name already taken, please try another",
          fullName: false,
          email: false,
          phone: false,
        });
        return;
      }
      setStepState((prevStep: any) => prevStep + 1);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  const handleNextSecond = async () => {
    const { fullName, email, phone } = getValues();

    if (fullName?.trim() === "") {
      setErrors({
        username: false,
        fullName: "Name is Required",
        email: false,
        phone: false,
      });
      return;
    }

    if (email?.trim() === "") {
      setErrors({
        username: false,
        fullName: false,
        email: "Email is Required",
        phone: false,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex?.test(email)) {
      setErrors({
        username: false,
        fullName: false,
        email: "Enter Valid Email",
        phone: false,
      });
      return;
    }

    if (phone?.trim() === "") {
      setErrors({
        username: false,
        fullName: false,
        email: false,
        phone: "Phone is Required",
      });
      return;
    }

    const phoneRegex = /^\+(?:[0-9]\s?){6,14}[0-9]$/;
    if (!phoneRegex?.test(phone)) {
      setErrors({
        username: false,
        fullName: false,
        email: false,
        phone: "Enter a Valid Phone",
      });
      return;
    }

    setStepState((prevStep: any) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStepState((prevStep: any) => prevStep - 1);
  };

  const [postRegisterCoachTrigger, postRegisterCoachStatus] =
    usePostRegisterCoachMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      username: data.username,
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };

    try {
      await postRegisterCoachTrigger(updatedData).unwrap();
      successSnackbar("Please, Check Email for Verification Code!");
      router.push(`${AUTH.OTP_SIGN_UP}?email=${data?.email}`);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    stepState,
    errors,
    handleNextFirst,
    getUsernameStatus,
    handlePrevStep,
    handleNextSecond,
    setPasswordDataArray,
    postRegisterCoachStatus,
  };
}
