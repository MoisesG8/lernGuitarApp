import { firebase } from '../Firebase';

const Salir = async () => {
    try {
        await firebase.auth().signOut();
        console.log('User signed out!');
    } catch (error) {
        console.log(error);
    }
};

export default Salir;