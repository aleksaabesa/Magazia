import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Registration from './components/Registration';
import AddProduct from './components/AddProduct';
import Scanner from './components/Scanner';

export default function App() {
  const [screen, setScreen] = useState('login'); // login, add, scan
  const [productData, setProductData] = useState(null);

  return (
    <View style={styles.container}>
      {screen === 'login' && <Registration onLogin={() => setScreen('add')} />}
      
      {screen === 'add' && (
        <AddProduct 
          onProductAdded={(data) => {
            setProductData(data);
            setScreen('scan');
          }} 
        />
      )}

      {screen === 'scan' && (
        <Scanner productData={productData} onBack={() => setScreen('add')} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
});
