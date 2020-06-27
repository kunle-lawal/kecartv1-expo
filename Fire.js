import firebase from 'firebase'

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if(!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyAs72GLcUGCYztv_W83buWY1DvYcjGDMlA",
                authDomain: "kecart-22930.firebaseapp.com",
                databaseURL: "https://kecart-22930.firebaseio.com",
                projectId: "kecart-22930",
                storageBucket: "kecart-22930.appspot.com",
                messagingSenderId: "740612564567",
                appId: "1:740612564567:web:6cc5b0e9a6400c0b486512",
                measurementId: "G-B0CQHZTTB1"
            })
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user) {
                firebase.auth().signInAnonymously();
            }
        })
    };

    send = message => {
        message.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message)
        })
    }

    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new DataCue(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
    }

    get db() {
        return firebase.database().ref('messages');
    }
}