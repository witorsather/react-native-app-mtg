import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';

const CardDetails = ({ route, navigation }) => {
  const [card, setCard] = useState(null);
  const { id } = route.params;

  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const loadPage = () => {
    axios
      .get(`https://api.magicthegathering.io/v1/cards/${id}`)
      .then((response) => setCard(response.data));
  };

  const handleClick = () => {
    load();
    console.log("cliquei cardsdetails")
    // navigation.push('Edit', { id });
    // ou
    // navigation.navigate('Edit', { id });
  };

  useEffect(() => {
    loadPage();
  }, []);

  if (!card) return null;

  return (
    <View>
      <Text>{card.card.name}</Text>
      <Image source={{ uri: card.card.imageUrl }} style={{ width: 200, height: 300 }} />
      <View>
        <Button title="Edit" color="green" onPress={handleClick} />
        <Button title="Delete" color="red" />
      </View>
    </View>
  );
};

export default CardDetails;
