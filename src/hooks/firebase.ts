import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

interface UseDatabaseOnValueProperty {
	type: 'recommendationList';
}

const firebaseConfig = {
	apiKey: 'AIzaSyAWVVVr5O-qju3YcLycaYIfGZXUOtQD6Xk',
	authDomain: 'fir-vivian-enlife.firebaseapp.com',
	databaseURL: 'https://fir-vivian-enlife-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'fir-vivian-enlife',
	storageBucket: 'fir-vivian-enlife.appspot.com',
	messagingSenderId: '660855759413',
	appId: '1:660855759413:web:21018c93a936ec0077077c',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const useDatabaseOnValue = (props: UseDatabaseOnValueProperty) => {
	const getRef = ref(database, props.type);
	const [data, setData] = useState([]);
	useEffect(() => {
		onValue(getRef, snapshot => {
			const value = snapshot.val();
			setData(value);
		});
	}, []);
	return data;
};
