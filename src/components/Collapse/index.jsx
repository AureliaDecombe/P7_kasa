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
        <span>
          {isActive ? (
            <svg
              className='close-collapse'
              alt='flêche de fermeture'
              width='24'
              height='15'
              viewBox='0 0 24 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.7268 14.1403L23.8597 11.9951L11.9298 0.0764155L-5.01125e-05 12.0072L2.13287 14.1403L11.9298 4.34257L21.7268 14.1403Z'
                fill='white'
              />
            </svg>
          ) : (
            <svg
              className='open-collapse'
              alt='flêche d-ouverture'
              width='25'
              height='15'
              viewBox='0 0 25 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z'
                fill='white'
              />
            </svg>
          )}
        </span>
      </div>
      {isActive && <div className='collapse-item__content'>{content}</div>}
    </li>
  );
};

export default Collapse;
