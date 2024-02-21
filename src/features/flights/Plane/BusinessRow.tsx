import { BusinessSeat } from "./BusinessSeat";
import { RowNumber } from "./RowNumber";

export const BusinessRow = ({
  yOffset = 0,
  checked = [false, false, false, false],
  rowNumber = 0,
}) => {
  return (
    <g id="seat row / business" transform={`translate(0 ${yOffset * 60})`}>
      <rect
        width="200"
        height="48"
        transform="translate(1113 626)"
        fill="white"
      />
      <BusinessSeat xOffset={0} checked={checked[0]} />
      <BusinessSeat xOffset={1} checked={checked[1]} />
      <RowNumber y={655} number={rowNumber} />
      <BusinessSeat xOffset={3} checked={checked[2]} />
      <BusinessSeat xOffset={4} checked={checked[3]} />
    </g>
  );
};
