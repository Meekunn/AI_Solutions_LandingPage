import { keyframes } from "@emotion/react";

export const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  75% { transform: rotate(-3deg); }
`;