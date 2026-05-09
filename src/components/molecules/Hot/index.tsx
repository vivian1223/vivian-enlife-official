import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';
import Link from '../../atoms/Link';
import SeperationWithTitle from '../../atoms/SeperationWithTitle';

interface LinkProperty {
	title: string;
}

const recommendationList = [
	{
		id: 1,
		source: 'https://vocus.cc/article/6086284afd89780001b0999a',
		title: '🔥 硬體、韌體與軟體？盤點常見的工程師種類',
	},
	{
		id: 2,
		source: 'https://vocus.cc/article/615660c5fd89780001769c6c',
		title: '🔥 從零到前端工程師，我到底做了哪些努力？',
	},
	{
		id: 3,
		source: 'https://vocus.cc/article/60ea6520fd89780001771fcd',
		title: '🔥 如何設定網頁背景？多層次背景圖、漸層背景教學',
	},
];

const LinkContent: React.FC<LinkProperty> = ({ title }) => (
	<div>
		{title}
		<FontAwesomeIcon className={styles.icon} icon={faArrowUpRightFromSquare as IconProp} />
	</div>
);

const Hot = () => (
	<div className={styles.hot}>
		<SeperationWithTitle className={styles.sectionHeading} title="熱門閱讀" />
		<div className={styles.list}>
			{recommendationList.map(({ id, source, title }) => (
				<Link key={id} source={source} content={<LinkContent title={title} />} />
			))}
		</div>
	</div>
);

export default Hot;
