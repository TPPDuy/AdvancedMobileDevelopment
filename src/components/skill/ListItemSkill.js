/* eslint-disable react-native/no-inline-styles */
/* eslint-disable global-require */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import { SafeAreaView, FlatList, View } from 'react-native';
import ItemSkills from './ItemSkill';

const renderSeparator = () => (
    <View style={{ width: 5 }}/>
);
const ListItemSkill = ({ listSkills, onItemClick }) => (
    <SafeAreaView>
      <FlatList
        data={listSkills}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({ item }) => <ItemSkills
                                    name={item}
                                    onItemClick={onItemClick}/>}
      />
    </SafeAreaView>
);

ListItemSkill.propTypes = {
  listSkills: PropTypes.arrayOf(object),
  onItemClick: PropTypes.func,
};

ListItemSkill.defaultProps = {
  listSkills: [],
};

export default ListItemSkill;
