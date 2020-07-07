/* eslint-disable react-native/no-inline-styles */
/* eslint-disable global-require */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import { SafeAreaView, FlatList, View } from 'react-native';
import ItemSkills from './ItemSkill';

const renderSeparator = () => (
    <View style={{ width: 5 }}/>
);
const renderSpaceHeader = () => (
  <View style={{ width: 10 }}/>
);
const ListItemSkill = ({ listSkills, onItemClick }) => (
    <SafeAreaView>
      <FlatList
        data={listSkills}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({ item }) => <ItemSkills
                                    name={item.name}
                                    isInterested={item.isInterested}
                                    onItemClick={onItemClick}/>}
        ListHeaderComponent={renderSpaceHeader}
      />
    </SafeAreaView>
);

ListItemSkill.propTypes = {
  listSkills: PropTypes.arrayOf(object),
  onItemClick: PropTypes.func,
};

ListItemSkill.defaultProps = {
  listSkills: [
    {
      name: 'Java',
      isInterested: true,
    },
    {
      name: 'Android',
      isInterested: true,
    },
    {
      name: 'NodeJs',
      isInterested: true,
    },
    {
      name: 'React',
      isInterested: true,
    },
    {
      name: 'C/C++',
      isInterested: true,
    },
    {
      name: 'VueJs',
      isInterested: false,
    },
    {
      name: 'Agular',
      isInterested: false,
    },
    {
      name: 'Python',
      isInterested: false,
    },
    {
      name: '.NET',
      isInterested: false,
    },
    {
      name: 'Information Security',
      isInterested: false,
    },
    {
      name: 'Part Modeling',
      isInterested: false,
    },
    {
      name: 'Machine Learning',
      isInterested: false,
    },
    {
      name: 'Database Administration',
      isInterested: false,
    },
  ],
};

export default ListItemSkill;
