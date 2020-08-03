/* eslint-disable import/prefer-default-export */
import { Alert } from 'react-native';

export const AlertModal = ({
  title, msg, onCancel = (f) => f, onAccept = (f) => f,
}) => {
  Alert.alert(
    `${title}`,
    `${msg}`,
    [
      {
        text: 'Hủy',
        onPress: () => onCancel(),
        style: 'cancel',
      },
      { text: 'Đồng ý', onPress: () => onAccept() },
    ],
    { cancelable: false },
  );
};
