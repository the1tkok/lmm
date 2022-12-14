import { useForm } from "react-hook-form";
import styles from "./registration-form.module.css";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUp } from "../../../lib/api/auth";
import toast from "react-hot-toast";
import { storeAccessToken } from "../../../lib/access-token";
import { useRouter } from "next/router";

const experienceLevelOptions = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Expert", value: "expert" },
];

const signUpFormSchema = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password should has at least 8 chars" }),
  experience: z.enum(
    experienceLevelOptions.map(({ value }) => value),
    {
      required_error: "Required",
      invalid_type_error: "Required",
    }
  ),
});

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpFormSchema),
  });

  const { mutateAsync: signUp } = useSignUp();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await signUp(data);
      await storeAccessToken({
        accessToken: response.accessToken,
        maxAge: response.accessTokenMaxAge,
      });

      router.push("/dashboard");
    } catch (err) {
      toast.error("There was an error creating your user. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.registrationForm}>
      <div>
        <input
          {...register("firstName")}
          className={styles.firstNameInput}
          type="text"
          id="firstName"
          placeholder="First name"
        />
        <div className={styles.inputError}>{errors?.firstName?.message}</div>
      </div>

      <div>
        <input
          {...register("lastName")}
          className={styles.lastNameInput}
          type="text"
          id="lastName"
          placeholder="Last name"
        />
        <div className={styles.inputError}>{errors?.lastName?.message}</div>
      </div>

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
          className={styles.passwordInput}
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="new-password"
        />
        <div className={styles.inputError}>{errors?.password?.message}</div>
      </div>

      <div>
        <select
          {...register("experience", {
            setValueAs: (value) => (!value ? undefined : value),
          })}
          className={styles.experienceLevelInput}
          id="experience"
          defaultValue=""
        >
          <option value="" className={styles.experienceLevelOptions} disabled>
            Select Acting Experience
          </option>
          {experienceLevelOptions.map(({ value, label }) => (
            <option
              key={value}
              className={styles.experienceLevelOptions}
              value={value}
            >
              {label}
            </option>
          ))}
        </select>
        <div className={styles.inputError}>{errors?.experience?.message}</div>
      </div>

      <button
        className={styles.registrationPageSubmitBtn}
        type="submit"
        disabled={isSubmitting}
      >
        Register
      </button>
    </form>
  );
};

export { RegistrationForm };
