import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.headerContent}>
				<FontAwesomeIcon className={styles.icon} icon={faBullhorn as IconProp} />
				專欄訂閱讀者招募中，詳情見下方「推薦閱讀」
			</div>
		</div>
	);
};

export default Header;
