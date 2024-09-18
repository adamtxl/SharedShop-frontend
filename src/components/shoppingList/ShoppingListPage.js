import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';

const ShoppingListPage = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const addItem = () => {
    if (itemName) {
      setShoppingList([...shoppingList, { name: itemName, id: Date.now() }]);
      setItemName(''); // Reset input
    }
  };

  const openItemDetails = (item) => {
    // Placeholder for opening an item details modal or screen
  };

  return (
    <View>
      <TextInput
        placeholder="Enter item name"
        value={itemName}
        onChangeText={setItemName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={shoppingList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openItemDetails(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Manage Items" onPress={() => navigation.navigate('ManageItems')} />
    </View>
  );
};

export default ShoppingListPage;