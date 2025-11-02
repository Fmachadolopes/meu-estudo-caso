import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Home</Text>
      <Text>Clique no botão para ver os detalhes do Produto 1</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => {
          
          navigation.navigate('Details', { productId: 1 });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default HomeScreen;