  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAqV5bg1gV5EF0t7nILZonWMuIAagTXjLQ",
    authDomain: "tiendasuravv.firebaseapp.com",
    projectId: "tiendasuravv",
    storageBucket: "tiendasuravv.appspot.com",
    messagingSenderId: "819163018020",
    appId: "1:819163018020:web:99de5d6a95e2b154cbb9b1",
    measurementId: "G-5D9P23HBY8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
