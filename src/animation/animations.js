import { useSpring } from "react-spring";

export const useTemplateProps = (isIn, duration) =>
  useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: isIn ? 1 : 0,
    },
    config: {
      duration,
    },
  });
