const config = {
  apiKey: "AIzaSyCEHmAs5JZJ--Z2rH_MQs6jv9UX7KtsIwo",
  authDomain: "where-s-wally-32c9e.firebaseapp.com",
  projectId: "where-s-wally-32c9e",
  storageBucket: "where-s-wally-32c9e.appspot.com",
  messagingSenderId: "733291849825",
  appId: "1:733291849825:web:43e18833e263cfa10b6220",
  measurementId: "G-PY8P3B565F",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Please add this app's config object to firebaseConfig.js"
    );
  } else {
    return config;
  }
}
