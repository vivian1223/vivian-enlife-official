import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import Card from '../../atoms/Card';
import styles from './index.module.css';

const CardContent = () => (
	<div className={styles.content}>
		<p>
			<FontAwesomeIcon className={styles.icon} icon={faEnvelope as IconProp} />
			合作請聯繫：vivian.enlife@gmail.com
		</p>
		<p>
			<FontAwesomeIcon className={styles.icon} icon={faMessage as IconProp} />
			IG 小盒子不定時回覆
		</p>
	</div>
);

const Contact = () => (
	<div className={styles.contact}>
		<Card content={<CardContent />} />
	</div>
);

export default Contact;
