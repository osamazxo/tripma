import { EconomySeat } from "./EconomySeat";
import { RowNumber } from "./RowNumber";

export const EconomyRow = ({
  start = 0,
  yOffset = 0,
  checked = [false, false, false, false, false, false],
  rowNumber = 0,
}) => {
  return (
    <g
      className="economy-row"
      id="seat row / economy"
      transform={`translate(0 ${start + yOffset * 44})`}
      width={200}
      height={40}
    >
      <rect
        width="200"
        height="40"
        transform="translate(1113 972)"
        fill="white"
      />
      <EconomySeat xOffset={0} start={0} checked={checked[0]} />
      <EconomySeat xOffset={1} start={0} checked={checked[1]} />
      <EconomySeat xOffset={2} start={0} checked={checked[2]} />
      <RowNumber number={rowNumber} y={997} />
      <EconomySeat xOffset={0} start={116} checked={checked[3]} />
      <EconomySeat xOffset={1} start={116} checked={checked[4]} />
      <EconomySeat xOffset={2} start={116} checked={checked[5]} />
    </g>
  );
};
