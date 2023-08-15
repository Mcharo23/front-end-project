import React, { FC, useState } from "react";
import backgroundImage from "../assets/Background.jpeg";
import leftImage from "../assets/IMG-20230814-WA0027.jpg";
import InputField from "../components/inputField";
import colors from "../config/colors";
import CustomeButton from "../components/button";

const Login: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    console.log(username);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    console.log(password);
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div style={styles.floatContainer}>
        <div style={styles.leftCard}></div>
        <div style={styles.rightCard}>
          <h1>Welcome !</h1>

          <div style={styles.inputHolder}>
            <InputField
              onChange={handleUsernameChange}
              placeholder={"username"}
              secureTextEntry={"text"}
            />
          </div>
          <div style={styles.inputHolder}>
            <InputField
              onChange={handlePasswordChange}
              placeholder={"password"}
              secureTextEntry={"password"}
            />
          </div>

          <div style={styles.bottomPart}>
            <div style={styles.customeButtonHolder}>
              <div style={styles.buttonHolder}>
                <CustomeButton
                  padding={"10px"}
                  backgroundColor={"transparent"}
                  border={"none"}
                  borderRadius={"0px"}
                  width={"100%"}
                  color={`${colors.grey}`}
                  fontSize={"12px"}
                  buttonName={"Forgot Password"}
                />
              </div>
              <div style={styles.buttonHolder}>
                <CustomeButton
                  padding={"10px"}
                  backgroundColor={`${colors.secondary}`}
                  border={"none"}
                  borderRadius={"5px"}
                  width={"100%"}
                  color={`${colors.white}`}
                  fontSize={"12px"}
                  buttonName={"LOGIN"}
                />
              </div>
            </div>

            <div style={styles.forgetButton}>
              <p>Don't have an account? </p>
              <CustomeButton
                padding={"0px"}
                backgroundColor={"transparent"}
                border={"none"}
                borderRadius={"0px"}
                width={"100%"}
                color={`${colors.trypanBlue}`}
                fontSize={"16px"}
                buttonName={"register"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    backgroundSize: "cover",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  },
  floatContainer: {
    flexDirection: "row",
    display: "flex",
    width: "70%",
    height: "60%",
  },
  leftCard: {
    display: "flex",
    width: "50%",
    height: "100%",
    backgroundImage: `url(${leftImage})`,
    backgroundSize: "cover",
  },
  rightCard: {
    display: "flex",
    width: "50%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: `${colors.primary}`,
    justifyContent: "center",
    alignItems: "center",
  },
  inputHolder: {
    width: "80%",
  },
  bottomPart: {
    flexDirection: "column",
    display: "flex",
    width: "80%",
    alignItems: "end",
    justifyContent: "center",
  },
  customeButtonHolder: {
    flexDirection: "row",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonHolder: {
    width: "100%",
    margin: "0.5%",
  },
  forgetButton: {
    flexDirection: "row",
    display: "flex",
    justifyItems: "end",
    justifyContent: "center",
    gap: 3,
  },
  content: {
    textAlign: "center", // Center the text vertically and horizontally
    color: "white",
  },
};

export default Login;
