import { AUTH } from "@/constants/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  gymDetailsFormDefaultValues,
  gymDetailsFormValidationSchema,
} from "./gym-details.data";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { usePostGymIntroMutation } from "@/services/auth";

export default function useGymDetails() {
  const router: any = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(gymDetailsFormValidationSchema),
    defaultValues: gymDetailsFormDefaultValues,
  });

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const addressId = searchParams.get("addressId");

  const { handleSubmit } = methods;

  const [postGymIntroTrigger, postGymIntroStatus] = usePostGymIntroMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      coach_email: email,
      gym_address_id: addressId,
      ...data,
    };

    try {
      await postGymIntroTrigger(updatedData).unwrap();
      successSnackbar("Please, Sign In to Continue");
      router.push(AUTH.SIGN_IN);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return { methods, handleSubmit, onSubmit, postGymIntroStatus };
}
