import { Button, ButtonWrapper } from "./QuickActionStyles";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function QuickActionsButtons() {
  const [open, setOpen] = useState(false);

  return (
    <ButtonWrapper>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            }}
            key={open ? "wrapper" : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button>Start Workout</Button>
            <Button>View Progess</Button>
          </motion.div>
        )}
      </AnimatePresence>
      <Button onClick={() => setOpen((value) => !value)}>+</Button>
    </ButtonWrapper>
  );
}
