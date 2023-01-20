import { useState } from "react";
import "../../assets/open-collapse.svg";
import "../../assets/close-collapse.svg";

const Collapse = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className='collapse-item'>
      <div
        className='collapse-item__toggle'
        onClick={() => setIsActive(!isActive)}
      >
        <span>{title}</span>
        <span>{isActive ? "∧" : "∨"}</span>
      </div>
      {isActive && <div className='collapse-item__content'>{content}</div>}
    </li>
  );
};

export default Collapse;
