import { Alert } from 'react-native';

export const alertMsg = (title, message) =>
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK' },
    ],
    { cancelable: false }
  );
