import React from 'react';
import styles from './index.module.css';
import profileImage from '../../../images/profile.jpg';
import Card from '../../atoms/Card';

const ProfileContent = () => {
	return (
		<div className={styles.profileCard}>
			<div className={styles.profileImageContainer}>
				<img className={styles.profileImage} src={profileImage} alt="profile" />
			</div>
			<h1 className={styles.profileName}>Vivian Yeh</h1>
			<p className={styles.profileIntro}>
				Hi，我是英文系畢業的軟體工程師 Vivian，我在這裡陪你探索理想工作。
			</p>
		</div>
	);
};

const Profile = () => (
	<div className={styles.profile}>
		<Card content={<ProfileContent />} />
	</div>
);

export default Profile;
