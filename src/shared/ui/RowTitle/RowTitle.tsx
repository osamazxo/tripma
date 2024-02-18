import { FC } from "react";

export const RowTitle: FC<{
  info: string;
  span: string;
  color: string;
}> = ({ info, span, color }) => (
  <>
    {info} <span style={{ color: color }}>{span}</span>
  </>
);
