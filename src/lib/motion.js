import { motion, useReducedMotion } from "framer-motion"

/* -----------------------------------
   Reduced Motion Helper (TOP of file)
----------------------------------- */
export function useMotion(preset) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return {
      initial: false,
      animate: true,
      exit: false,
    }
  }

  return preset
}

/* -----------------------------------
   Shared Defaults
----------------------------------- */
const ease = "easeOut"

const base = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease },
}

/* -----------------------------------
   Presets
----------------------------------- */
export const fade = base

export const fadeUp = {
  ...base,
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
}

export const fadeDown = {
  ...base,
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
}

export const fadeLeft = {
  ...base,
  initial: { opacity: 0, x: 12 },
  animate: { opacity: 1, x: 0 },
}

export const fadeRight = {
  ...base,
  initial: { opacity: 0, x: -12 },
  animate: { opacity: 1, x: 0 },
}

export const scaleIn = {
  ...base,
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
}

export const slideUp = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" },
  transition: { duration: 0.4, ease },
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

/* -----------------------------------
   Re-export motion
----------------------------------- */
export { motion }
