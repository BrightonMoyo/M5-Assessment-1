import * as firebase from 'firebase';
import {Alert} from 'react-native';

export async function registration(email, password, name) {
  try {
      await firebase.auth().createUserWithPasswordAndEmail("Two@gmail.com","Pass")
      const currentUser = firebase.auth().currentUser

      const db = firebase.firestore()
      db.collection('user').doc(currentUser.uid).set({
          name:email,
          password:password,
      })

  } catch (error) {
    Alert.alert("There is something wrong",error.message)
  }
}