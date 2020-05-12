import React from 'react';
import { View } from 'react-native';
import ItemCategory from './ItemCategory';
import ItemSkills from '../common/ItemSkill';
import ListItemSkill from '../common/ListItemSkill';

const Browse = ({categories, }) => (
    <View style={{ width: '100%', height: '100%', padding: 15 }}>
        <View style={{ height: 120 }}>
            <ItemCategory title="NEW RELEASES" thumbnail="https://pluralsight.imgix.net/course-images/whats-new-vsphere-6-5-v1.jpg"/>
        </View>
        <View style={{ height: 120, marginTop: 10, marginBottom: 10 }}>
            <ItemCategory title=" RECOMMENDED FOR YOU" thumbnail="https://cdn.dribbble.com/users/13774/screenshots/11120020/freeapril_4x.jpg"/>
        </View>
        <ListItemSkill />
    </View>
);

export default Browse;
