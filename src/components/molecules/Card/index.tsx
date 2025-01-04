import React from 'react';
import styles from './index.module.css';
import { Button } from '../../atoms/Button';

interface CardProps {
	title: string;
	subtitle: string;
	imageUrl: string;
	url: string;
	buttonText: string;
}

export const Card: React.FC<CardProps> = ({
	title,
	subtitle,
	imageUrl = 'https://via.placeholder.com/400x200',
	url,
	buttonText
}) => {
	return (
		<a className={styles.card} target="_blank" rel="noopener noreferrer" href={url}>
			<div className={styles.imageContainer}>
				<img src={imageUrl} alt={title} className={styles.image} />
			</div>
			<div className={styles.footer}>
				<div className={styles.content}>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.subtitle}>{subtitle}</p>
				</div>
				<Button text={buttonText} themeColor='primary' size='small'/>
			</div>
		</a>
	);
};
