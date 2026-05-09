import React from 'react';
import styles from './index.module.css';
import profileImage from '../../../images/profile.jpg';

const audiences = [
	{
		id: 'switch',
		label: '轉職中',
		description: '需要更清楚的路線、主題與準備節奏。',
	},
	{
		id: 'stuck',
		label: '職涯卡住',
		description: '想重新整理方向，判斷下一步該往哪裡走。',
	},
	{
		id: 'junior',
		label: '初階工程師',
		description: '想建立長期可累積的學習與成長方法。',
	},
];

const Profile = () => (
	<section className={styles.profile}>
		<div className={styles.heroTop}>
			<div className={styles.copyColumn}>
				<p className={styles.eyebrow}>Career Column for Career Switchers</p>
				<div className={styles.heroRule} />
				<h1 className={styles.heroTitle}>職涯方向與轉職成長指南</h1>
				<div className={styles.identityRow}>
					<div className={styles.signatureBlock}>
						<p className={styles.profileName}>Vivian Yeh</p>
						<p className={styles.profileRole}>英文系畢業的軟體工程師</p>
					</div>
					<p className={styles.heroStamp}>Software engineer notes on career switches, learning, and work choices.</p>
				</div>
				<p className={styles.profileIntro}>這個專欄用工程師視角拆解職涯選擇、轉職準備與學習方法，讓你更快判斷這裡能不能幫到你。</p>
			</div>
			<div className={styles.visualColumn}>
				<div className={styles.imageShell}>
					<img className={styles.profileImage} src={profileImage} alt="Vivian Yeh" />
				</div>
			</div>
		</div>
		<section className={`${styles.readerSection} motion-reveal`}>
			<div className={styles.readerHeader}>
				<p className={styles.readerEyebrow}>Reader Positioning</p>
				<h2 className={styles.sectionTitle}>這個專欄適合誰</h2>
			</div>
			<div className={styles.audienceDeck}>
				{audiences.map(({ id, label, description }) => (
					<article key={id} className={styles.audienceCard} data-motion-item>
						<div className={styles.audienceLabel}>{label}</div>
						<p className={styles.audienceDescription}>{description}</p>
					</article>
				))}
			</div>
		</section>
	</section>
);

export default Profile;
