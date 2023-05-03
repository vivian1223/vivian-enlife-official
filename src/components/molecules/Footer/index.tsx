import React from 'react';
import moment from 'moment';
import styles from './index.module.css';

const Footer = () => {
	const year = moment().year();
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.footerContent}>©{year} Vivian Yeh All Rights Reserved</div>
		</div>
	);
};

export default Footer;
