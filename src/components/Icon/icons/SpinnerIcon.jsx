export const SpinnerIcon = ({ ...props }) => (
  <svg {...props}>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      strokeDashoffset="16"
      strokeDasharray="64"
      fill="none"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1.5s"
        values="0 12 12;360 12 12"
        keyTimes="0;1"
      />
    </circle>
  </svg>
);
