import { keyframes } from "@emotion/react";

export const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  75% { transform: rotate(-3deg); }
`;

// export const scroll = keyframes`
//   0%   { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// `;

export const scroll = keyframes`
  0% {transform: translate(0); }
  100% { transform: translate(-100%); }
`;

// export const scroll = keyframes`
//   0% { left: 100%; }
//   100% { left: -100%; }
// `;

export const jello = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;
