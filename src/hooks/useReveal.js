import { useLayoutEffect } from "react";
import gsap from "gsap";

const useReveal = (ref) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, [ref]);
};

export default useReveal;