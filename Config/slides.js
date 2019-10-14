import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainapp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export const slides = [
  {
    key: '1',
    title: 'Wellcome',
    text: 'We are very happy that you will have fun with us',
    image: {
      uri: 'http://www.superbets.xyz/img/logo.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#55efc4',
  },
  {
    key: '2',
    title: 'Here you can',
    text: 'Share and play with your friends',
    image: {
      uri:
        'https://images.vexels.com/media/users/3/140485/isolated/preview/8ba3d2f775b86d205e631e3008524fa6-grupo-g-equipes-de-futebol-by-vexels.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#0984e3',
  },
  {
    key: '3',
    title: 'Lets GO!',
    text: 'Comece a ganhar pontos para ficar no lugar :)',
    image: {
      uri:
        'https://images.vexels.com/media/users/3/145120/isolated/preview/4a6bd8897dc5623d1906bd38541fb3a1---cone-de-copa-do-esporte-by-vexels.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#636e72',
  },
];
