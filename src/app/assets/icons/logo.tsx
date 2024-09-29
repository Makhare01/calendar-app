import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const IconLogo = (props: SvgIconProps) => {
  return (
    <SvgIcon width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
      <rect x="4" y="4" width="32" height="32" rx="16" fill="none" />
      <rect
        x="4"
        y="4"
        width="32"
        height="32"
        rx="16"
        stroke="currentColor"
        strokeWidth="8"
        fill="none"
      />
    </SvgIcon>
  );
};
