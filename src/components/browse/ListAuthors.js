import React from 'react';
import PropTypes, { object } from 'prop-types';
import {
  FlatList,
} from 'react-native';
import ItemAuthor from './ItemAuthor';

const ListAuthors = ({ authors, onClickItem }) => (
    <FlatList
        data={authors}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ItemAuthor name={item.name} avatar={item.avatar} onChooseItem={onClickItem}/>}
        />
);

ListAuthors.propTypes = {
  authors: PropTypes.arrayOf(object),
  onClickItem: PropTypes.func,
};
ListAuthors.defaultProps = {
  authors: [
    {
      name: 'Deborah Kurata',
      avatar: 'https://pluralsight.imgix.net/author/lg/deborah-kurata-v1.jpg?w=200',
    },
    {
      name: 'Scott Allen',
      avatar: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg',
    },
    {
      name: 'Samer Buna',
      avatar: 'https://pluralsight.imgix.net/author/lg/e5c9da13-6fe1-4662-8ee1-5a78800537a3.jpg',
    },
    {
      name: 'Mark Zamoyta',
      avatar: 'https://pluralsight.imgix.net/author/lg/mark-zamoyta-v1.jpg?w=200',
    },
    {
      name: 'Jim Wilson',
      avatar: 'https://pluralsight.imgix.net/author/lg/jim-wilson-v5.jpg?w=200',
    },
    {
      name: 'Joe Eames',
      avatar: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200',
    },
    {
      name: 'Cory House',
      avatar: 'https://pluralsight.imgix.net/author/lg/cory-house-v3.jpg?w=200',
    },
    {
      name: 'Shawn Wildermuth',
      avatar: 'https://pluralsight.imgix.net/author/lg/shawn-wildermuth-v3.jpg?w=200',
    },
  ],
};

export default ListAuthors;
