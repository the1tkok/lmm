import { useForm } from "react-hook-form";
import styles from "./homework-form.module.css";

const HomeworkForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Link</label>
        <input
          {...register("homeworkLink", { required: "Required" })}
          placeholder="https://example.org"
          className={styles.input}
        />
        <div className={styles.inputError}>{errors.homeworkLink?.message}</div>
      </div>
      <button className={styles.saveButton}>Submit Homework</button>
    </form>
  );
};

export { HomeworkForm };
