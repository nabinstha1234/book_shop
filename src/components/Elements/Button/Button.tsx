import React, { forwardRef } from 'react';
import clsx from 'clsx';

// Components
import { Spinner } from '../Spinner';

// styles
import styles from './Button.module.scss';

const variants = {
  primary: `text-white ${styles.bg_primary}`,
  inverse: `${styles.bg_inverse}`,
  danger: `text-white ${styles.bg_dander}`,
};

const sizes = {
  sm: `py-2 px-4 ${styles.text_sm}`,
  md: `py-2 px-6 ${styles.text_md}`,
  lg: `py-3 px-8 ${styles.text_lg}`,
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'd-flex justify-content-center align-items-center border rounded',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" />}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span> {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
