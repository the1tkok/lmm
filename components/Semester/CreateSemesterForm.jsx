import { useForm } from "react-hook-form";
import styles from "./create-semester-form.module.css";

const CreateSemesterForm = ({ onSubmit, initialValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Name</label>
        <input
          {...register("name", { required: "Required" })}
          placeholder="eg. Semester #1"
          className={styles.input}
        />
        <div className={styles.inputError}>{errors.homeworkLink?.message}</div>
      </div>
      <button className={styles.saveButton}>Create Semester</button>
    </form>
  );
};

export { CreateSemesterForm };
