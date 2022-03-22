import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isScrollTop, setIsScrollTop] = useState(false);

  useEffect(() => {
    const scrollTopMetaToggler = () => {
      setIsScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", scrollTopMetaToggler);
    return () => {
      window.removeEventListener("scroll", scrollTopMetaToggler);
    };
  }, []);
  return (
    <>
      <a
        className="scroll-to-top rounded"
        href="#page-top"
        style={{ display: isScrollTop ? "inline" : "none" }}
      >
        <i className="fas fa-angle-up" />
      </a>
    </>
  );
}
