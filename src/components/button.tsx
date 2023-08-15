import React, { FC } from "react";

type CustomeButtonType = {
  buttonName: string;
  padding: string;
  backgroundColor: string;
  border: string;
  borderRadius: string;
  width: string;
  color: string;
  fontSize: string;
};

const CustomeButton: FC<CustomeButtonType> = ({
  buttonName,
  padding,
  backgroundColor,
  border,
  borderRadius,
  width,
  color,
  fontSize,
}) => {
  return (
    <div style={styles.container}>
      <button
        style={{
          padding: padding,
          backgroundColor: backgroundColor,
          border: border,
          borderRadius: borderRadius,
          width: width,
          color: color,
          fontSize: fontSize,
        }}
      >
        {buttonName}
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
  },
};

export default CustomeButton;
