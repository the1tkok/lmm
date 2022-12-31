import * as RadixAvatar from "@radix-ui/react-avatar";
import styles from "./avatar.module.css";
import getInitials from "initials";

const Avatar = ({ fallbackName, imageUrl }) => {
  return (
    <RadixAvatar.Root className={styles.avatarRoot}>
      <RadixAvatar.Image
        className={styles.avatarImage}
        src={imageUrl}
        alt={fallbackName}
      />
      <RadixAvatar.Fallback className={styles.avatarFallback} delayMs={600}>
        {getInitials(fallbackName ?? "")}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};

export { Avatar };
