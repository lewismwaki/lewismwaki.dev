import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  duration?: number;
  animation?: string;
  children: React.ReactNode;
}

const AosAnim = ({ duration, animation, children }: Props) => {
  useEffect(() => {
    Aos.init({ duration: duration ?? 700 });
  }, []);

  return (
    <div data-aos={animation == null ? "fade-up" : animation}>{children}</div>
  );
};

export default AosAnim;
