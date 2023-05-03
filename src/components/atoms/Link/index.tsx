import React, { ReactNode } from 'react';
import styles from './index.module.css';

interface LinkProperty {
	source: string;
	content: ReactNode;
}

const Link: React.FC<LinkProperty> = ({ source, content }) => (
	<a className={styles.link} href={source} target="_blank" rel="noreferrer">
		{content}
	</a>
);

export default Link;
