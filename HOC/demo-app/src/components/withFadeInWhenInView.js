import React, { useState, useEffect, useRef } from "react";
import "./style.css";

function WithFadeInWhenInView(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    // loop lai toan bo div
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // neu ma hien thi ra thi set state la true
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    observer.observe(domRef.current); // tham chieu den div hien tai khi scrolling
    return () => observer.unobserve(domRef.current); // bo tham chieu khi ko scrolling
  }, []);
  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
}

export default WithFadeInWhenInView;
