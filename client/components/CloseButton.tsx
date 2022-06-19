const CloseButton = ({ size, bgColor, borderColor }) => {
  return (
    <button className="button">
      <div className="bar"></div>
      <div className="bar2"></div>
      <style jsx>{`
        .button {
          position: relative;
          /* width: ${size || 50}px;
          height: ${size || 50}px; */
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: ${bgColor || "#f0eeee"};
          border: ${borderColor ? `solid 1px ${borderColor} ` : "none"};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .bar,
        .bar2 {
          position: absolute;
          height: 2px;
          background: black;
          width: 60%;
          transition: all 0.3s ease-in-out;
        }
        .bar {
          transform: rotate(45deg);
        }
        .bar2 {
          transform: rotate(-45deg);
        }
        .button:hover .bar2,
        .button:hover .bar {
          transform: rotate(0deg);
        }
      `}</style>
    </button>
  );
};

export default CloseButton;
