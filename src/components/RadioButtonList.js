import React from 'react';
import { FlatList } from 'react-native';
import { colorCategories } from'../constants/Colors';
import RadioButton from './RadioButton';

const RadioButtonList = ({ category, setCategory }) => {
  const renderFilterButtons = filterData => (
    <RadioButton 
      filterData={filterData} 
      category={category} 
      setCategory={setCategory} 
    />);

  return (
    <FlatList
      keyExtractor={item => item.category}
      data={colorCategories}
      renderItem={renderFilterButtons}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default RadioButtonList;
