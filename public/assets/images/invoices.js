import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={21}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.71.45A2.757 2.757 0 0 0 .953 3.207V22.51l4.825-2.758 4.826 2.758 4.825-2.758 4.825 2.758V3.207A2.757 2.757 0 0 0 17.497.45H3.71Zm3.447 4.136a2.068 2.068 0 1 0 0 4.136 2.068 2.068 0 0 0 0-4.136Zm8.558.404a1.379 1.379 0 0 0-1.95 0l-8.272 8.272a1.379 1.379 0 0 0 1.95 1.95l8.271-8.273a1.379 1.379 0 0 0 0-1.95Zm-1.665 6.49a2.068 2.068 0 1 0 0 4.135 2.068 2.068 0 0 0 0-4.136Z"
      fill="#FFA654"
    />
  </svg>
)

export default SvgComponent
