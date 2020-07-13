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
        renderItem={({ item }) => <ItemAuthor
                                    id={item['user.id']}
                                    name={item['user.name']}
                                    avatar={item['user.avatar']}
                                    onChooseItem={() => onClickItem(item)}
                                  />
        }
      />
);

ListAuthors.propTypes = {
  authors: PropTypes.arrayOf(object),
  onClickItem: PropTypes.func,
};
ListAuthors.defaultProps = {
  authors: [],
};

export default ListAuthors;
