import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { storeAccessToken } from "../../../lib/access-token";
import { useLogin } from "../../../lib/api/auth";
import styles from "./login-form.module.css";

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password should has at least 8 chars" }),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const { mutateAsync: login } = useLogin();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      await storeAccessToken({
        accessToken: response.accessToken,
        maxAge: response.accessTokenMaxAge,
      });

      router.push("/dashboard");
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <div>
        <input
          {...register("email")}
          className={styles.emailInput}
          type="email"
          id="email"
          placeholder="Email"
        />
        <div className={styles.inputError}>{errors?.email?.message}</div>
      </div>
      <div>
        <input
          {...register("password")}
          className={styles.emailInput}
          type="password"
          id="password"
          placeholder="Password"
        />
        <div className={styles.inputError}>{errors?.password?.message}</div>
      </div>
      <button
        className={styles.loginPageSubmitBtn}
        type="submit"
        disabled={isSubmitting}
      >
        Log In
      </button>
    </form>
  );
};

export { LoginForm };
