import { AsyncStorage } from 'react-native';

export const storeUserInfo = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getUserInfo = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    const jsonValue = value !== null ? JSON.parse(value) : null;
    return jsonValue;
  } catch (e) {
    return null;
  }
};

export const storeTheme = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('theme', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getTheme = async () => {
  try {
    const value = await AsyncStorage.getItem('theme');
    const jsonValue = value !== null ? JSON.parse(value) : null;
    return jsonValue;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getProfile = async () => {
  try {
    const value = await AsyncStorage.getItem('profile');
    const jsonValue = value !== null ? JSON.parse(value) : null;
    return jsonValue;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const setProfile = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('profile', jsonValue);
  } catch (e) {
    console.log(e);
    await AsyncStorage.removeItem('profile');
  }
};

export const clearUserInfo = async () => {
  try {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('profile');
  } catch (e) {
    console.log(e);
  }
};
