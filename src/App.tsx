import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './App.module.css';
import { Button } from './components/atoms/Button';
import Header from './components/molecules/Header';
import Profile from './components/molecules/Profile';
import News from './components/molecules/News';
import Footer from './components/molecules/Footer';
import Recommendation from './components/molecules/Recommendation';
import Hot from './components/molecules/Hot';
import Contact from './components/molecules/Contact';

function App() {
	React.useEffect(() => {
		const elements = Array.from(document.querySelectorAll<HTMLElement>('.motion-reveal'));
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduceMotion) {
			elements.forEach((element) => element.classList.add('is-visible'));
			return undefined;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{
				rootMargin: '0px 0px -12% 0px',
				threshold: 0.16,
			},
		);

		elements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, []);

	return (
		<div className={styles.app}>
			<Header />
			<main className={styles.main}>
				<Profile />
				<section className={styles.secondarySection}>
					<div className={`motion-reveal ${styles.sectionPanel} ${styles.featuredPanel}`}>
						<Recommendation />
					</div>
					<div className={`motion-reveal ${styles.sectionPanel} ${styles.standardPanel}`}>
						<News />
					</div>
					<div className={`motion-reveal ${styles.sectionPanel} ${styles.standardPanel}`}>
						<Hot />
					</div>
					<div className={`motion-reveal ${styles.sectionPanel} ${styles.utilityPanel}`}>
						<Contact />
					</div>
				</section>
				<section className={`${styles.bottomCta} motion-reveal`}>
					<div className={styles.bottomCtaCard}>
						<p className={styles.bottomCtaEyebrow}>Subscription</p>
						<h2 className={styles.bottomCtaTitle}>永久會員訂閱方案限時開放中</h2>
						<p className={styles.bottomCtaDescription}>直接前往 vocus 訂閱頁，查看方案內容與加入方式。</p>
						<div className={styles.bottomCtaList}>
							<div className={styles.bottomCtaItem} data-motion-item>
								<div className={styles.bottomCtaLabel}>職涯判斷</div>
								<p className={styles.bottomCtaValue}>整理轉職、成長與工作選擇背後的判斷框架。</p>
							</div>
							<div className={styles.bottomCtaItem} data-motion-item>
								<div className={styles.bottomCtaLabel}>實際經驗</div>
								<p className={styles.bottomCtaValue}>快速看出 Vivian 的觀點、方法與適用對象。</p>
							</div>
							<div className={styles.bottomCtaItem} data-motion-item>
								<div className={styles.bottomCtaLabel}>可執行方向</div>
								<p className={styles.bottomCtaValue}>把下一步拆成能真正執行的行動，而不只停留在想像。</p>
							</div>
						</div>
						<Button
							className={styles.bottomCtaButton}
							size="medium"
							text="前往訂閱方案"
							endIcon={<FontAwesomeIcon className={styles.icon} icon={faArrowRight as IconProp} />}
							onClick={() => window.open('https://vocus.cc/salon/vivian_enlife/about', '_blank', 'noreferrer')}
						/>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default App;
