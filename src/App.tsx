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
import { Card } from './components/molecules/Card';
import CardImg from './images/winning_plus_banner.png'

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Profile />
			<Card title='2025讀者福利' subtitle='想要提升職場競爭力嗎？' imageUrl={CardImg} url='https://reurl.cc/QZKQ29' buttonText='立即領取'/>
			<News />
			<Hot />
			<Recommendation />
			<Button
				className={styles.button}
				iconClassname={styles.icon}
				size="small"
				text="永久會員訂閱方案限時開放中"
				startIcon={<FontAwesomeIcon className={styles.icon} icon={faArrowRight as IconProp} />}
				onClick={() => window.open('https://vocus.cc/salon/vivian_enlife/about', '_blank', 'noreferrer')}
			/>
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
