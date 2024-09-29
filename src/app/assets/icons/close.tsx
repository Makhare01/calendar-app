import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const IconClose = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14.122L17.303 19.425C17.5844 19.7064 17.966 19.8645 18.364 19.8645C18.762 19.8645 19.1436 19.7064 19.425 19.425C19.7064 19.1436 19.8645 18.7619 19.8645 18.364C19.8645 17.966 19.7064 17.5844 19.425 17.303L14.12 12L19.424 6.69699C19.5633 6.55766 19.6737 6.39226 19.7491 6.21024C19.8244 6.02821 19.8632 5.83313 19.8631 5.63613C19.8631 5.43914 19.8242 5.24407 19.7488 5.06209C19.6734 4.8801 19.5628 4.71475 19.4235 4.57549C19.2842 4.43622 19.1188 4.32576 18.9367 4.25042C18.7547 4.17507 18.5596 4.13631 18.3626 4.13636C18.1656 4.13641 17.9706 4.17526 17.7886 4.25069C17.6066 4.32612 17.4413 4.43666 17.302 4.57599L12 9.87899L6.697 4.57599C6.5587 4.43266 6.39323 4.31831 6.21027 4.23961C6.0273 4.16091 5.83049 4.11944 5.63132 4.11762C5.43215 4.11579 5.23462 4.15365 5.05024 4.22899C4.86586 4.30432 4.69833 4.41562 4.55742 4.55639C4.41652 4.69717 4.30506 4.86459 4.22955 5.0489C4.15404 5.23321 4.116 5.43071 4.11763 5.62988C4.11927 5.82905 4.16056 6.02589 4.23908 6.20894C4.31761 6.39198 4.4318 6.55755 4.575 6.69599L9.88 12L4.576 17.304C4.4328 17.4424 4.31861 17.608 4.24008 17.791C4.16156 17.9741 4.12027 18.1709 4.11863 18.3701C4.117 18.5693 4.15504 18.7668 4.23055 18.9511C4.30606 19.1354 4.41752 19.3028 4.55842 19.4436C4.69933 19.5844 4.86686 19.6957 5.05124 19.771C5.23562 19.8463 5.43315 19.8842 5.63232 19.8824C5.83149 19.8805 6.0283 19.8391 6.21127 19.7604C6.39423 19.6817 6.5597 19.5673 6.698 19.424L12 14.122Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
