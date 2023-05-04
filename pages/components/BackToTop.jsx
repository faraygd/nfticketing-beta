import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const BackToTop = () => {
  const [backTop, setBackTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backTop && (
          <button onClick={scrollUp}>
            <AiOutlineArrowUp
              className="bg-black w-10 h-10 rounded-full drop-shadow-xl"
              width={20}
              color="orange"
            />
          </button>
      )}
    </div>
  );
};

export default BackToTop;
