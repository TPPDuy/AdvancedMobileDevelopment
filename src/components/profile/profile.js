import React, { useContext } from 'react';
import { View, Image, Text } from 'react-native';
import { ThemeContext } from '../../constants/theme';

const Profile = ({ navigation }) => {
  const profileContext = useContext();
  const avatarUrl = null;
  return (
    <ThemeContext.Consumer>
        {
            ({ theme }) => (
                <View>
                  <View>
                    <Image/>
                    <Text>{profileContext.name}</Text>
                  </View>
                  <View>
                    
                  </View>
                </View>
            )
        }
    </ThemeContext.Consumer>
  );
};
