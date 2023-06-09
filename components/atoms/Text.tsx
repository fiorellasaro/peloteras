import { TextProps } from '@/utils/interfaces';
import React, { FC } from 'react';

export const Text: FC<TextProps> = ({ type, color, children }) => {
  let textStyle = '';
  let textColorStyle = '';

  switch (type) {
    case 'title':
      textStyle = 'text-4xl font-bold';
      break;
    case 'subtitle':
      textStyle = 'text-2xl font-semibold';
      break;
    case 'paragraph':
      textStyle = 'text-base';
      break;
    case 'link':
      textStyle = 'text-blue-500 hover:underline';
      break;
    default:
      textStyle = '';
  }

  switch (color) {
    case 'white':
      textColorStyle = 'text-white';
      break;
    case 'green':
      textColorStyle = 'text-green';
      break;
    case 'primary':
      textColorStyle = 'text-primary';
      break;
    // Add more color options as needed
    default:
      textColorStyle = '';
  }

  return <p className={`${textStyle} ${textColorStyle}`}>{children}</p>;
};
