import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef } from "react";
import styles from "./popover.module.css";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;

export const PopoverContent = forwardRef(function PopoverContent(
  { children, ...props },
  forwardedRef
) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        sideOffset={5}
        {...props}
        ref={forwardedRef}
        className={styles.popoverContent}
      >
        {children}
        <PopoverPrimitive.Close className={styles.popoverClose}>
          X
        </PopoverPrimitive.Close>
        <PopoverPrimitive.Arrow className={styles.popoverArrow} />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
});
