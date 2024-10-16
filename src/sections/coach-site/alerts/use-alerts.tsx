import { getAlertsColumns } from "./alerts.data";
import {
  useGetClientAlertsQuery,
  usePostClientAlertsStatusMutation,
} from "@/services/coach-site/alerts";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { CLIENT_ALERTS_STATUSES } from "@/constants";

export default function useAlerts() {
  const { data, isLoading, isFetching, isError } = useGetClientAlertsQuery(
    null,
    { refetchOnMountOrArgChange: true }
  );

  const [postClientAlertsStatusTrigger, postClientAlertsStatusStatus] =
    usePostClientAlertsStatusMutation();

  const onApproveClick = async (client_id: any) => {
    const updatedData = {
      client_id,
      coach_status: CLIENT_ALERTS_STATUSES.APPROVED,
    };
    try {
      await postClientAlertsStatusTrigger(updatedData).unwrap();
      successSnackbar("Workout Assigned Successfully!");
    } catch (error: any) {
      errorSnackbar(error?.data?.error);
    }
  };
  const onRejectClick = async (client_id: any) => {
    const updatedData = {
      client_id,
      coach_status: CLIENT_ALERTS_STATUSES.REJECTED,
    };
    try {
      await postClientAlertsStatusTrigger(updatedData).unwrap();
      successSnackbar("Workout Assigned Successfully!");
    } catch (error: any) {
      errorSnackbar(error?.data?.error);
    }
  };

  const alertsColumns = getAlertsColumns(
    onApproveClick,
    onRejectClick,
    postClientAlertsStatusStatus
  );

  return { data, isLoading, isFetching, isError, alertsColumns };
}
