import React from 'react';
import styles from './index.module.css';

interface SeperationTitleProperty {
	title: string;
	className?: string;
}

const SeperationTitle: React.FC<SeperationTitleProperty> = ({ title, className = '' }) => (
	<div className={`${styles.seperation} ${className}`.trim()} data-motion-item>
		<div className={styles.title}>{title}</div>
	</div>
);

export default SeperationTitle;
