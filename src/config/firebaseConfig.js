import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyDMeO-cd1Z3wQzAtgeHNcULo39HGXBBQJ0",
	authDomain: "firevue-spa-shop.firebaseapp.com",
	databaseURL: "https://firevue-spa-shop.firebaseio.com",
	projectId: "firevue-spa-shop",
	storageBucket: "firevue-spa-shop.appspot.com",
	messagingSenderId: "4213237817",
	appId: "1:4213237817:web:59fb77c4e54edc401505e8",
	measurementId: "G-JP0WWE8TF2"
}

firebase.initializeApp(config)
firebase.analytics();

export function firebaseListener(func) {
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			console.log("User log in successfully", user)
			func(true, user)
		} else {
			console.log("User log in failed", user);
			func(false)
		}
	}, function (error) {
			console.log(error)
	})
}

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth