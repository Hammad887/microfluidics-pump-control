
// Import individual Firebase modules using the modular API
import firebase from 'firebase/compat/app'; // Import the compat version of Firebase
import 'firebase/compat/database';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA6r0fCPwY8pPtpqunfSx6LorGKwbqHF5E",
  authDomain: "nanotech-pump-control.firebaseapp.com",
  databaseURL: "https://nanotech-pump-control-default-rtdb.firebaseio.com",
  projectId: "nanotech-pump-control",
  storageBucket: "nanotech-pump-control.appspot.com",
  messagingSenderId: "455063430436",
  appId: "1:455063430436:web:ab66fdb1c55675dab1ffb1",
  measurementId: "G-CLPE01SWQG"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const database = getDatabase(app);

// Function to log data to Firebase
function logData(motor, action, value, direction = null) {
  // Prepare data to be logged
  const data = {
    motor: motor,
    action: action,
    value: value,
    direction: direction
  };

  // Log data to Firebase
  const newLogRef = push(ref(database, 'logs'));
  newLogRef.set(data)
    .then(() => {
      console.log('Data logged successfully:', data);
    })
    .catch((error) => {
      console.error('Error logging data:', error);
    });
}

// Add event listeners to the buttons (remaining code remains the same)
// ...
