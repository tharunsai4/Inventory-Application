import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { HStack } from './ui/hstack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // or 'expo/vector-icons'

const TopAction = () => {
  const TopList = [
    { id: 1, name: 'Total Sales', icon: 'pound-sign' },
    { id: 2, name: 'Pending Orders', icon: 'clock' },
    { id: 3, name: 'Low Stock Alerts', icon: 'exclamation-triangle' },
    { id: 4, name: 'Active Stores', icon: 'store' },
  ];

  const listItems = TopList.map((item, index) => (
    <Pressable
      key={index}
      className="py-8 px-[150px] gap-6 m-2 bg-gray-100 rounded-lg flex items-center"
    >
      <FontAwesome5 name={item.icon} size={24} color="#333" />
      <Text className="font-bold">{item.name}</Text>
      <Text>{item.id}</Text>
    </Pressable>
  ));

  return <HStack className="gap-9 flex-wrap">{listItems}</HStack>;
};

export default TopAction;
