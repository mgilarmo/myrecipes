import app from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBqEZartVLP4lj1lXTbeIsXdhObqb7e85A",
  authDomain: "myrecipes-53223.firebaseapp.com",
  databaseURL: "https://myrecipes-53223.firebaseio.com",
  projectId: "myrecipes-53223",
  storageBucket: "myrecipes-53223.appspot.com",
  messagingSenderId: "10245129962",
  appId: "1:10245129962:web:2f91a6dd47aafb57"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.database();
  }

  recipes = () => this.db.ref('recipes')
  recipe = (id) => this.db.ref(`recipes/${id}`)
}

export default Firebase;