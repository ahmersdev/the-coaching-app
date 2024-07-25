import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AUTH } from "@/constants/routes";
import { useRouter } from "next/navigation";
import {
  getSetPasswordDataArray,
  signUpFormDefaultValues,
  signUpFormValidationSchema,
} from "./sign-up.data";
import { useCallback, useEffect, useState } from "react";
import {
  useLazyGetCheckUsernameQuery,
  usePostRegisterCoachMutation,
} from "@/services/auth";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { CLICK_EVENTS, EMAIL_REGEX, PHONE_REGEX } from "@/constants";
import { ErrorFields, ValidationRule } from "./sign-up.types";

export default function useSignUp() {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const [stepState, setStepState] = useState(1);

  const [errors, setErrors] = useState<ErrorFields>({
    username: false,
    fullName: false,
    email: false,
    phone: false,
    city: false,
    postalCode: false,
    country: false,
  });

  const errorMessages: Record<string, string | boolean> = {
    fullName: errors?.fullName ?? false,
    email: errors?.email ?? false,
    phone: errors?.phone ?? false,
    city: errors?.city ?? false,
    postalCode: errors?.postalCode ?? false,
    country: errors?.country ?? false,
  };

  const router: any = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(signUpFormValidationSchema),
    defaultValues: signUpFormDefaultValues,
  });

  const { handleSubmit, getValues } = methods;

  const setErrorFields = (fieldErrors: ErrorFields) => {
    setErrors((prevErrors: ErrorFields) => ({
      ...prevErrors,
      ...fieldErrors,
    }));
  };

  const validateFields = (
    values: Record<string, string>,
    rules: ValidationRule[]
  ): ErrorFields | null => {
    const errors: ErrorFields = {};
    let hasErrors = false;

    rules.forEach(({ field, message, validate }) => {
      if (!validate(values[field])) {
        errors[field] = message;
        hasErrors = true;
      }
    });

    return hasErrors ? errors : null;
  };

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

  const handleNextFirst = useCallback(async () => {
    const { username } = getValues();

    if (username.trim() === "") {
      setErrorFields({ username: "Username is Required" });
      return;
    }

    if (/\s/.test(username)) {
      setErrorFields({ username: "Username cannot contain spaces" });
      return;
    }

    try {
      const res = await getUsernameTrigger({
        username,
      }).unwrap();

      if (res?.alreadyExists === 1) {
        setErrorFields({
          username: "User name already taken, please try another",
        });
        return;
      }
      setStepState((prevStep: any) => prevStep + 1);
      setErrors({});
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  }, [getUsernameTrigger, getValues]);

  const handleNextSecond = useCallback(async () => {
    const rules: ValidationRule[] = [
      {
        field: "fullName",
        message: "Name is Required",
        validate: (value) => value.trim() !== "",
      },
      {
        field: "email",
        message: "Email is Required",
        validate: (value) => value.trim() !== "",
      },
      {
        field: "email",
        message: "Enter Valid Email",
        validate: (value) => EMAIL_REGEX.test(value),
      },
      {
        field: "phone",
        message: "Phone is Required",
        validate: (value) => value.trim() !== "",
      },
      {
        field: "phone",
        message: "Enter a Valid Phone",
        validate: (value) => PHONE_REGEX.test(value),
      },
      {
        field: "city",
        message: "City is Required",
        validate: (value) => value.trim() !== "",
      },
      {
        field: "postalCode",
        message: "Postal Code is Required",
        validate: (value) => value.trim() !== "",
      },
      {
        field: "country",
        message: "Country is Required",
        validate: (value) => value.trim() !== "",
      },
    ];

    const fieldErrors = validateFields(getValues(), rules);

    if (fieldErrors) {
      setErrors(fieldErrors);
      return;
    }
    setStepState((prevStep: any) => prevStep + 1);
    setErrors({});
  }, [getValues]);

  const handlePrevStep = () => {
    setStepState((prevStep: any) => prevStep - 1);
  };

  const [postRegisterCoachTrigger, postRegisterCoachStatus] =
    usePostRegisterCoachMutation();

  const onSubmit = useCallback(
    async (data: any) => {
      const updatedData = {
        username: data?.username,
        full_name: data?.fullName,
        email: data?.email,
        phone: data?.phone,
        city: data?.city,
        postal_code: data?.postalCode,
        country: data?.country,
        password: data?.password,
      };

      try {
        await postRegisterCoachTrigger(updatedData).unwrap();
        successSnackbar("Please, Check Email for Verification Code!");
        router.push(`${AUTH.OTP}?email=${data?.email}`);
      } catch (error: any) {
        errorSnackbar(error?.data?.message);
      }
    },
    [postRegisterCoachTrigger, router]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === CLICK_EVENTS.ENTER) {
        event.preventDefault();
        if (stepState === 1) {
          handleNextFirst();
        } else if (stepState === 2) {
          handleNextSecond();
        } else if (stepState === 3) {
          handleSubmit(onSubmit)?.();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [stepState, handleSubmit, onSubmit, handleNextFirst, handleNextSecond]);

  return {
    methods,
    handleSubmit,
    onSubmit,
    stepState,
    errors,
    errorMessages,
    handleNextFirst,
    getUsernameStatus,
    handlePrevStep,
    handleNextSecond,
    setPasswordDataArray,
    postRegisterCoachStatus,
  };
}
