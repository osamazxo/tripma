export const BusinessSeat = ({
  xOffset = 0,
  available = true,
  checked = false,
}) => {
  const bgColor = checked
    ? "url(#pink-gradient)"
    : available
    ? "url(#turquoise-gradient)"
    : "#F6F6FE";
  return (
    <g
      className={"bussiness-seat" + (available && !checked ? " available" : "")}
      transform={`translate(${xOffset * 38} 0)`}
    >
      <rect x={1121} y="630" width="30" height="40" rx="4" fill={bgColor} />
      {checked && (
        <path
          id="Vector 10"
          d="M1130.73 649.757L1134.49 653.515L1142 646"
          stroke="#F6F6FE"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      )}
    </g>
  );
};
