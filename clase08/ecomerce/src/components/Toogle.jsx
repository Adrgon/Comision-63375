import { useState } from "react";
const Toggle = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return children({ isOpen, toggle });
};

export default Toggle;
