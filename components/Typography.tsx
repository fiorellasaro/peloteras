import React, { ReactNode, FC } from 'react';

interface TypographyProps {
  children: ReactNode;
  color?: string;
}

export const TitleXL: FC<TypographyProps> = ({ children }) => (
  <h1 className="font-eastman-extrabold text-8xl font-extrabold leading-tight capitalize">{children}</h1>
);

export const TitleL: FC<TypographyProps> = ({ children }) => (
  <h1 className="font-eastman-bold text-7xl font-bold leading-tight capitalize">{children}</h1>
);

export const TitleM: FC<TypographyProps> = ({ children }) => (
  <h1 className="font-eastman-bold text-6xl font-bold leading-tight capitalize">{children}</h1>
);

export const TitleS: FC<TypographyProps> = ({ children }) => (
  <h1 className="font-eastman-bold text-5xl font-bold leading-tight capitalize">{children}</h1>
);

export const TitleXS: FC<TypographyProps> = ({ children }) => (
  <h1 className="font-eastman-bold text-4xl font-bold leading-tight capitalize">{children}</h1>
);

export const SubtitlesM: FC<TypographyProps> = ({ children, color }) => (
  <h2 style={{ color }} className="font-poppins text-base font-medium leading-5 capitalize">{children}</h2>
);

export const ParagraphM: FC<TypographyProps> = ({ children }) => (
  <p className="font-poppins text-base font-normal leading-5">{children}</p>
);

export const ParagraphS: FC<TypographyProps> = ({ children, color = 'text-current' }) => (
  <p className={`font-poppins text-sm font-normal leading-5 ${color}`}>{children}</p>
);

export const ButtonM: FC<TypographyProps> = ({ children, color = 'text-current' }) => (
  <p className={`font-poppins text-sm font-semibold leading-5 capitalize ${color}`}>{children}</p>
);
