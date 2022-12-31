import { useForm } from "react-hook-form";
import styles from "./self-tape-form.module.css";

const SelfTapeForm = ({ onSubmit, initialValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Link</label>
        <input
          {...register("selfTapeVideoLink", { required: "Required" })}
          placeholder="https://example.org"
          className={styles.input}
        />
        <div className={styles.inputError}>{errors.homeworkLink?.message}</div>
      </div>
      <button className={styles.saveButton}>Submit Self Tape Link</button>
    </form>
  );
};

export { SelfTapeForm };
