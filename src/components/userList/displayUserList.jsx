import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserItems } from '../../redux/actions/userItemsActions';

const DisplayUserItems = ({ userId }) => {
  const dispatch = useDispatch();
  const userItems = useSelector(state => state.userItems.items);
  const loading = useSelector(state => state.userItems.loading);
  const error = useSelector(state => state.userItems.error);

  useEffect(() => {
    dispatch(fetchUserItems(userId));
  }, [dispatch, userId]);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.item_name}</Text>  {/* Ensure this is always inside <Text> */}
      <Text>{item.description || "No description available"}</Text> {/* Ensure this is inside <Text> */}
    </View>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!userItems || userItems.length === 0) {
    return <Text>No items found.</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={userItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
    width: '100%',
  },
});

export default DisplayUserItems;