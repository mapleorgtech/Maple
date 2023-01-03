import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={20}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 15 1 8m0 0 7-7M1 8h18"
      stroke="#373D40"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
