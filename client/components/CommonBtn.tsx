type CommonBtnProps = {
  wide?: number;
  long?: number;
  txtColor?: String;
  backgroundColor?: String;
  // TODO: fix child
  children: any;
  borderColor?: String;
  hovertxtColor?: String;
  hoverBackgroundColor?: String;
  fontSize?: number;
};

const CommonBtn = ({
  wide,
  long,
  txtColor,
  backgroundColor,
  children,
  borderColor,
  hovertxtColor,
  hoverBackgroundColor,
  fontSize,
}: CommonBtnProps) => {
  return (
    <button>
      <>{children}</>
      <style jsx>{`
        button {
          color: ${txtColor ? txtColor : "#2d2d2d"};
          padding: ${wide || 15}px ${long || 60}px;
          font-size: ${fontSize || 30}px;
          font-weight: lighter;
          border: solid 1px ${borderColor || "#2d2d2d8f"};
          background: ${backgroundColor || "white"};
          transition: 0.3s ease-in-out all;
          cursor: pointer;
        }
        button:hover {
          background: ${hoverBackgroundColor
            ? hoverBackgroundColor
            : "#ededed"};
          color: ${hovertxtColor ? hovertxtColor : "black"};
        }
      `}</style>
    </button>
  );
};

export default CommonBtn;
