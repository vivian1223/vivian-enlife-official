/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import classnames from 'classnames';

import styles from './index.module.css';

interface ButtonProps {
	variant?: 'contained' | 'outlined';
	themeColor?: 'primary' | 'secondary' | 'white';
	size?: 'small' | 'medium' | 'large' | 'filled';
	disabled?: boolean;
	text?: string;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	className?: string;
	iconClassname?: string;
	onClick?: () => void;
}

export const Button = ({
	themeColor = 'primary',
	size = 'medium',
	variant = 'contained',
	text,
	disabled = false,
	startIcon,
	endIcon,
	className = '',
	iconClassname = '',
	...props
}: ButtonProps) => {
	return (
		<button
			type="button"
			className={classnames(
				styles.button,
				styles[themeColor],
				styles[variant],
				styles[size],
				className,
			)}
			disabled={disabled}
			{...props}
		>
			{startIcon && (
				<div
					className={classnames(
						styles.startIcon,
						styles[`${themeColor}Icon`],
						styles[`${variant}Icon`],
						iconClassname,
					)}
				>
					{startIcon}
				</div>
			)}
			<div className={classnames(styles.text, styles[themeColor])}>{text}</div>
			{endIcon && (
				<div
					className={classnames(
						styles.endIcon,
						styles[`${themeColor}Icon`],
						styles[`${variant}Icon`],
						iconClassname,
					)}
				>
					{endIcon}
				</div>
			)}
		</button>
	);
};
