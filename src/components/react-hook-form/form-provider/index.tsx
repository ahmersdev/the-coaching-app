import { FormProvider as Form } from "react-hook-form";

export default function FormProvider({
  children,
  onSubmit,
  methods,
  style,
}: any) {
  return (
    <Form {...methods}>
      <form style={style} onSubmit={onSubmit}>
        {children}
      </form>
    </Form>
  );
}
