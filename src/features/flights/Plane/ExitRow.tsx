import { FC } from "react";
interface ExitRowProps {
  yPos?: number;
}
export const ExitRow: FC<ExitRowProps> = ({ yPos }) => {
  return (
    <g className="exit-row" transform={`translate(0 ${yPos})`}>
      <rect
        width="200"
        height="18"
        transform="translate(1113 950)"
        fill="white"
      />
      <path
        d="M1139.41 963V954.54H1144.88V955.548H1140.61V958.2H1144.63V959.208H1140.61V961.992H1144.88V963H1139.41ZM1145.56 963L1148 959.976L1145.72 957.144H1147.13L1148.71 959.148L1150.28 957.144H1151.69L1149.4 959.988L1151.85 963H1150.41L1148.69 960.84L1146.99 963H1145.56ZM1152.64 955.788V954.528H1154.06V955.788H1152.64ZM1152.75 963V957.144H1153.96V963H1152.75ZM1158.17 963.108C1157.43 963.108 1156.88 962.92 1156.52 962.544C1156.16 962.168 1155.98 961.624 1155.98 960.912V958.08H1154.84V957.144H1155.98V955.38H1157.19V957.144H1159.01V958.08H1157.19V960.816C1157.19 961.24 1157.28 961.56 1157.46 961.776C1157.64 961.992 1157.94 962.1 1158.35 962.1C1158.47 962.1 1158.6 962.088 1158.72 962.064C1158.84 962.032 1158.96 961.996 1159.08 961.956L1159.27 962.868C1159.15 962.94 1158.98 962.996 1158.77 963.036C1158.56 963.084 1158.36 963.108 1158.17 963.108ZM1163.21 963V957.144H1164.38V958.188C1164.69 957.492 1165.32 957.104 1166.28 957.024L1166.67 957L1166.76 958.032L1166.03 958.104C1164.96 958.208 1164.43 958.756 1164.43 959.748V963H1163.21ZM1170.14 963.108C1169.55 963.108 1169.04 962.984 1168.61 962.736C1168.18 962.488 1167.84 962.14 1167.6 961.692C1167.37 961.236 1167.25 960.696 1167.25 960.072C1167.25 959.448 1167.37 958.912 1167.6 958.464C1167.84 958.008 1168.18 957.656 1168.61 957.408C1169.04 957.16 1169.55 957.036 1170.14 957.036C1170.72 957.036 1171.22 957.16 1171.66 957.408C1172.09 957.656 1172.42 958.008 1172.66 958.464C1172.9 958.912 1173.02 959.448 1173.02 960.072C1173.02 960.696 1172.9 961.236 1172.66 961.692C1172.42 962.14 1172.09 962.488 1171.66 962.736C1171.22 962.984 1170.72 963.108 1170.14 963.108ZM1170.14 962.172C1170.64 962.172 1171.04 961.992 1171.34 961.632C1171.65 961.272 1171.8 960.752 1171.8 960.072C1171.8 959.392 1171.65 958.876 1171.34 958.524C1171.04 958.164 1170.64 957.984 1170.14 957.984C1169.64 957.984 1169.24 958.164 1168.93 958.524C1168.63 958.876 1168.48 959.392 1168.48 960.072C1168.48 960.752 1168.63 961.272 1168.93 961.632C1169.24 961.992 1169.64 962.172 1170.14 962.172ZM1175.86 963L1173.63 957.144H1174.88L1176.45 961.584L1178.07 957.144H1179.01L1180.6 961.608L1182.2 957.144H1183.39L1181.16 963H1180.05L1178.5 958.812L1176.97 963H1175.86Z"
        fill="#7C8DB0"
      />
      <g id="18 / information">
        <circle cx="1126" cy="959" r="6" stroke="#7C8DB0" strokeWidth="1.5" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1126 957.667C1126.46 957.667 1126.83 957.294 1126.83 956.833C1126.83 956.373 1126.46 956 1126 956C1125.54 956 1125.17 956.373 1125.17 956.833C1125.17 957.294 1125.54 957.667 1126 957.667ZM1126.75 959C1126.75 958.586 1126.41 958.25 1126 958.25C1125.59 958.25 1125.25 958.586 1125.25 959V961.333C1125.25 961.748 1125.59 962.083 1126 962.083C1126.41 962.083 1126.75 961.748 1126.75 961.333V959Z"
          fill="#7C8DB0"
        />
      </g>
    </g>
  );
};