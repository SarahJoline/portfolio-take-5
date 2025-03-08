import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import StarButton from "./components/StarButton";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 50, 0.8),
    rgba(0, 0, 100, 0.7)
  );
  position: relative;
  overflow: hidden;
  gap: 20px;
`;

const StyledHeader = styled(motion.h1)`
  margin: 0;
  font-family: Trebuchet MS, sans-serif;
  font-size: 40px;
  font-weight: 100;
`;

const StyledSubheader = styled(motion.h2)`
  margin: 0;
  font-family: Trebuchet MS, sans-serif;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  margin-bottom: 5px;
`;

const Star = styled(motion.div)`
  position: absolute;
  background-color: white;
  width: 3px;
  height: 3px;
  border-radius: 50%;
`;

const generateStars = () => {
  const stars = [];
  const numberOfStars = 50;

  for (let i = 0; i < numberOfStars; i++) {
    const topPosition = Math.random() * 100 + "%";
    const leftPosition = Math.random() * 100 + "%";
    const twinkleDuration = Math.random() * 2 + 20; // 1-3 seconds
    const delay = Math.random() * 3; // Random delay up to 3s

    stars.push(
      <Star
        key={i}
        style={{ top: topPosition, left: leftPosition }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.8, 0.4, 1, 0.5, 0.3] }}
        transition={{
          duration: twinkleDuration,
          delay,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    );
  }
  return stars;
};

const fadeIn = keyframes`
  0% { opacity: 0; filter: blur(5px); transform: scale(0.8); }
  80% { opacity: 1; filter: blur(0px); transform: scale(1); }
  100% { opacity: 1; }
`;

function App() {
  return (
    <StyledContainer>
      {generateStars()}
      <StyledHeader
        initial={{ opacity: 0, y: -250 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        Hi! I'm Sarah
      </StyledHeader>
      <StyledSubheader
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 3 }}
      >
        I'm a Full-stack web developer
      </StyledSubheader>
      <StarButton />
    </StyledContainer>
  );
}

export default App;
