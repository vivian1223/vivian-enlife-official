import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import Card from '../../atoms/Card';
import styles from './index.module.css';

const Contact = () => (
	<div className={styles.contact} id="contact">
		<Card
			content={(
				<div className={styles.content}>
					<p className={styles.eyebrow}>Let&apos;s Collaborate</p>
					<h2 className={styles.title}>合作與聯繫</h2>
					<p className={styles.description}>
						如果你想討論合作、內容邀約，或單純想打聲招呼，都歡迎來信。
					</p>
					<div className={styles.contactList}>
						<div className={styles.contactItem} data-motion-item>
							<div className={styles.iconWrapper}>
								<FontAwesomeIcon className={styles.icon} icon={faEnvelope as IconProp} />
							</div>
							<div>
								<div className={styles.label}>Email</div>
								<a className={styles.value} href="mailto:vivian.enlife@gmail.com">
									vivian.enlife@gmail.com
								</a>
							</div>
						</div>
						<div className={styles.contactItem} data-motion-item>
							<div className={styles.iconWrapper}>
								<FontAwesomeIcon className={styles.icon} icon={faMessage as IconProp} />
							</div>
							<div>
								<div className={styles.label}>Instagram</div>
								<div className={styles.value}>IG 小盒子不定時回覆</div>
							</div>
						</div>
					</div>
				</div>
			)}
		/>
	</div>
);

export default Contact;
