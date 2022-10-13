import { useEffect, useState } from "react";

const useDetectClose = (elem, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const onClick = (e) => {
      if (elem.current !== null && !elem.current.contains(e.target)) {
        console.log({elem});
        setIsOpen(!isOpen);

      }
    };

    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);
  return [isOpen, setIsOpen,elem];
};

export default useDetectClose;
