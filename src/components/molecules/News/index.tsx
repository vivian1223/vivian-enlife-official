import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import SeperationWithTitle from '../../atoms/SeperationWithTitle';

import { useDatabaseOnValue } from '././../../../hooks/firebase';

import styles from './index.module.css';
import Link from '../../atoms/Link';

interface LinkProperty {
	title: string;
}

const LinkContent: React.FC<LinkProperty> = ({ title }) => (
	<div>
		{title}
		<FontAwesomeIcon className={styles.icon} icon={faArrowUpRightFromSquare as IconProp} />
	</div>
);

const News = () => {
	const recommendationList = useDatabaseOnValue({ type: 'recommendationList' });
	return (
		<div className={styles.news}>
			<SeperationWithTitle title="最新消息" />
			<div className={styles.list}>
				{recommendationList.map(({ id, source, title }) => (
					<Link key={id} source={source} content={<LinkContent title={title} />} />
				))}
			</div>
		</div>
	);
};

export default News;
