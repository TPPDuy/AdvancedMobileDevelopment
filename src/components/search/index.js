/* eslint-disable global-require */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import {
  View, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity, Text, Image,
} from 'react-native';
import ItemRecentSearch from './ItemRecentSearch';
import colorSource from '../../constants/color';

const verticalSeparator = () => (
    <View style={styles.verticalSeparator}/>
);

const ItemInterest = ({ name }) => (
    <TouchableOpacity style={styles.itemInterestContainer}>
        <Text style={styles.itemInterestText}>{name}</Text>
    </TouchableOpacity>
);

const Search = ({ recentSearches, interests }) => (
    <View style={styles.container}>
        <TextInput style={styles.searchBar}/>
        <ScrollView style={styles.content}>
            {recentSearches && recentSearches.length > 0
              ? <View style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.blockTitleText}>Recent searches</Text>
                        <Image source={require('../../../assets/search/clear-icon.png')} style={styles.icon}/>
                    </View>
                    <FlatList
                        data={recentSearches}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent = {verticalSeparator}
                        renderItem={({ item }) => <ItemRecentSearch searchKey = {item}/>}
                    />
                 </View>
              : null
            }
            <View style={styles.block}>
                <Text style={styles.blockTitle}>Your interests</Text>
                {interests.map((item, index) => <ItemInterest key={index} name={item.name}/>)}
            </View>
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
  block: {
    marginTop: 20,
  },
  blockTitle: {
    color: colorSource.white,
    flexDirection: 'row',
    fontSize: 14,
    justifyContent: 'space-between',
  },
  blockTitleText: {
    color: colorSource.white,
    fontSize: 14,
  },
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  content: {
    height: '100%',
    paddingHorizontal: 10,
  },
  icon: {
    height: 40,
    width: 40,
  },
  itemInterestContainer: {
    alignItems: 'center',
    backgroundColor: colorSource.gray,
    borderRadius: 20,
    justifyContent: 'center',
    marginRight: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  itemInterestText: {
    color: colorSource.white,
    fontSize: 12,
  },
  searchBar: {
    backgroundColor: colorSource.gray,
    color: colorSource.white,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  verticalSeparator: {
    height: 20,
  },
});

Search.propTypes = {
  recentSearches: PropTypes.arrayOf(object),
  interests: PropTypes.arrayOf(object),
};

ItemInterest.propTypes = {
  name: PropTypes.string,
};

export default Search;
