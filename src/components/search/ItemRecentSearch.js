/* eslint-disable react-native/no-inline-styles */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableWithoutFeedback, StyleSheet, Text,
} from 'react-native';
import { ThemeContext } from '../../constants/theme';
import RecentIcon from '../../../assets/search/recent-icon.svg';

const ItemRecentSearch = ({ searchKey, onClick }) => (
  <ThemeContext.Consumer>
    {
      ({ theme }) => (
        <TouchableWithoutFeedback onPress={() => onClick()}>
          <View style={styles.container}>
            <RecentIcon width={20} height={20} style={{ fill: theme.textColor, marginRight: 10 }}/>
            <Text style={{ color: theme.textColor, fontSize: 14 }}>{searchKey}</Text>
          </View>
        </TouchableWithoutFeedback>
      )
    }
  </ThemeContext.Consumer>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
});

ItemRecentSearch.propTypes = {
  searchKey: PropTypes.string,
  onClick: (f) => f,
};

export default ItemRecentSearch;
