// components/CardsList.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const CardsList = ({ navigation }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.magicthegathering.io/v1/cards")
      .then((response) => setCards(response.data.cards));
  }, []);

  return (
    <View>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CardsDetails', { id: item.id })}
            style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
          >
            <Text>{item.name}</Text>
            <Text>Mana Cost: {item.manaCost}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Rarity: {item.rarity}</Text>
            <Text>Original Text: {item.originalText}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CardsList;
