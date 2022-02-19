import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  duration?: number;
  offset?: number;
  animation?: string;
  child: React.ReactNode;
}

const AosAnim = ({ duration, offset, animation, child }: Props) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div
      data-aos={animation == null ? "fade-up" : animation}
      data-aos-duration={duration ?? 700}
      data-aos-once={true}
      data-aos-offset={offset ?? "100"}
    >
      {child}
    </div>
  );
};

export default AosAnim;
