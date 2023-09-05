import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../components/ui/form";

const CreateAccountSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .regex(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        ),
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character:",
        }
      )
      .min(8, { message: "Password must be alteast 8 characters" })
      .max(20, { message: "Password must be not more than 20 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be alteast 8 characters" })
      .max(20, { message: "Password must be not more than 20 characters" }),
  })
  .refine((data) => data.password != data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const CreateAccount = () => {
  const createAccountForm = useForm<z.infer<typeof CreateAccountSchema>>({
    resolver: zodResolver(CreateAccountSchema),
  });
  return (
    <Form {...createAccountForm}>
      <form action=""></form>
    </Form>
  );
};

export default CreateAccount;
