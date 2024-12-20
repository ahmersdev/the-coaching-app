import * as Yup from "yup";

export const assignWorkoutValidationSchema = Yup.object().shape({
  days: Yup.array().of(
    Yup.object().shape({
      exercises: Yup.array().of(
        Yup.object().shape({
          exercise_name: Yup.string().trim().required("Exercise Name Required"),
          sets: Yup.string().required("Number of Sets is Required"),
          reps_sets: Yup.array().of(
            Yup.object().shape({
              rep: Yup.string().required("Required"),
            })
          ),
          note: Yup.string().trim(),
          workout_video: Yup.mixed().nullable(),
        })
      ),
    })
  ),
});
