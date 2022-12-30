import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

const handleSubmit = (testdata) => {
  const ref = collection(firestore, "test_data");
  let data = { testData: testdata };
  try {
    addDoc(ref, data);
  } catch (err) {
    console.error("Error adding data to Firestore: ", err);
  }
};

export default handleSubmit;
