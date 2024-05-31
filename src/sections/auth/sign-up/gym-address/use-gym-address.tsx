import { useForm } from "react-hook-form";
import {
  gymAddressFormDefaultValues,
  gymAddressFormValidationSchema,
} from "./gym-address.data";
import { yupResolver } from "@hookform/resolvers/yup";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { AUTH } from "@/constants/routes";
import { usePostGymAddressMutation } from "@/services/auth";
import { useRouter, useSearchParams } from "next/navigation";

export default function useGymAddress() {
  const methods: any = useForm({
    resolver: yupResolver(gymAddressFormValidationSchema),
    defaultValues: gymAddressFormDefaultValues,
  });

  const { handleSubmit } = methods;

  const router: any = useRouter();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [postGymAddressTrigger, postGymAddressStatus] =
    usePostGymAddressMutation();

  const onSubmit = async (data: any) => {
    try {
      const res: any = await postGymAddressTrigger(data).unwrap();
      successSnackbar("Please, Enter Gym Bio!");
      router.push(
        `${AUTH.GYM_DETAILS}?email=${email}&addressId=${res?.address_id}`
      );
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return { methods, handleSubmit, onSubmit, postGymAddressStatus };
}
