import * as Yup from "yup";

export const workoutValidationSchema: any = Yup.object().shape({
  exercise_name: Yup.string().trim().required("Required"),
  dayOneWorkoutAll: Yup.array().of(
    Yup.object().shape({
      exercise_name: Yup.string().required("Required"),
    })
  ),
  daysAll: Yup.array().of(
    Yup.object().shape({
      exercise_name: Yup.string().required("Required"),
      daysAllWorkoutAll: Yup.array().of(
        Yup.object().shape({
          exercise_name: Yup.string().required("Required"),
        })
      ),
    })
  ),
});

export const defaultValues = {
  exercise_name: "",
  sets: "",
  workout_video: null,
  note: "",
};
