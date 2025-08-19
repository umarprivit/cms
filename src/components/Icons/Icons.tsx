import { JSX, SVGProps } from "react";

export const Icons = {
  EditorIcon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentcolor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M40 33V42C40 43.1046 39.1046 44 38 44H31.5"
          stroke="currentcolor"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 16V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H16"
          stroke="currentcolor"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 16H30"
          stroke="currentcolor"
          strokeWidth={4}
          strokeLinecap="round"
        />
        <path
          d="M23 44L40 23"
          stroke="currentcolor"
          strokeWidth={4}
          strokeLinecap="round"
        />
        <path
          d="M16 24H24"
          stroke="currentcolor"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </svg>
    );
  },
};
