import React, { ReactNode } from 'react';
import styles from './index.module.css';

interface CardProperty {
	content: ReactNode;
}

const Card: React.FC<CardProperty> = ({ content }) => <div className={styles.card}>{content}</div>;

export default Card;
