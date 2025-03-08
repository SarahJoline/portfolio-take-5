import { motion } from "framer-motion";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const twinkle = keyframes`
  0% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.2); }
  100% { opacity: 0.2; transform: scale(1); }
`;

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Star = styled.div`
  position: absolute;
  background-color: white;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  animation: ${twinkle} 2s infinite alternate;
`;

const StyledButton = styled(motion.button)<{ isHovered: boolean }>`
  padding: 12px 24px;
  font-size: 16px;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.5s ease-in-out, background-color 0.3s ease-in-out;

  border-color: ${(props) => (props.isHovered ? "transparent" : "white")};
  background-color: ${(props) =>
    props.isHovered ? "transparent" : "rgba(255,255,255,0.1)"};
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 2; // Keeps text above the stars
`;

function StarButton() {
  const [isHovered, setIsHovered] = useState(false);

  const generateStars = () => {
    if (!isHovered) return null;

    const stars = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 4 + 2 + "px"; // Random star size (2px - 6px)
      const top = Math.random() * 100 + "%";
      const left = Math.random() * 100 + "%";
      const duration = 2 + Math.random() * 2 + "s";
      const delay = Math.random() * 2 + "s";

      stars.push(
        <Star
          key={i}
          style={{
            top,
            left,
            width: size,
            height: size,
            animationDuration: duration,
            animationDelay: delay,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <ButtonContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledButton
        initial={{ opacity: 0, y: -350 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 5 }}
        isHovered={isHovered}
      >
        <ButtonText>Check out my projects</ButtonText>
      </StyledButton>
      {generateStars()}
    </ButtonContainer>
  );
}

export default StarButton;
