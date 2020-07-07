import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PropTypes, { object } from 'prop-types';
import Module from './ItemContent';
import colorSource from '../../constants/color';

const ItemSeperator = () => (
    <View style={styles.separator}/>
);

const Content = ({ modules }) => (
    <FlatList
        data={modules}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeperator}
        renderItem={({ item, index }) => <Module
                                            moduleName={item.name}
                                            index={index + 1}
                                            duration={item.duration}
                                            progress={item.progress}
                                            lessons={item.lessons}/>}
    />
);

const styles = StyleSheet.create({
  separator: {
    backgroundColor: colorSource.darkGray,
    height: 1,
    width: '100%',
  },
});

Content.propTypes = {
  modules: PropTypes.arrayOf(object),
};

export default Content;
