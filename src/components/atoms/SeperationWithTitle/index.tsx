import React from 'react';
import styles from './index.module.css';

interface SeperationTitleProperty {
	title: string;
}

const SeperationTitle: React.FC<SeperationTitleProperty> = ({ title }) => (
	<div className={styles.seperation}>
		<div className={styles.title}>{title}</div>
	</div>
);

export default SeperationTitle;
