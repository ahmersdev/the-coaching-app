export interface IRepSet {
  set: number;
  reps: number;
}

export interface IExercise {
  exercise_name: string;
  sets: number;
  workout_video: File | null;
  note: string;
  reps_sets: IRepSet[];
}

export interface IDayWorkout {
  day: number;
  exercises: IExercise[];
}

export interface IUpdatedData {
  details: IDayWorkout[] | string;
  client_id: string | any;
}
