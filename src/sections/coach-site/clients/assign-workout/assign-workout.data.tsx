import * as Yup from "yup";

export const workoutValidationSchema: any = Yup.object().shape({
  exerciseName: Yup.string().trim().required("Required"),
  dayOneWorkoutAll: Yup.array().of(
    Yup.object().shape({
      exerciseName: Yup.string().required("Required"),
    })
  ),
  daysAll: Yup.array().of(
    Yup.object().shape({
      exerciseName: Yup.string().required("Required"),
      daysAllWorkoutAll: Yup.array().of(
        Yup.object().shape({
          exerciseName: Yup.string().required("Required"),
        })
      ),
    })
  ),
});

export const defaultValues = {
  exerciseName: "",
  sets: "",
  video: null,
  note: "",
};
