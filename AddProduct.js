import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Barcode from 'react-native-barcode-svg'; // დასაინსტალირებელია: npm i react-native-barcode-svg

export default function AddProduct({ onProductAdded }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [code, setCode] = useState(null);

  const generate = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setCode(randomCode);
  };

  return (
    <View style={tstyles.container}>
      <Text>დაამატე პროდუქტი</Text>
      <TextInput placeholder="სახელი" onChangeText={setName} style={styles.input} />
      <TextInput placeholder="ფასი" onChangeText={price} keyboardType="numeric" style={styles.input} />
      <Button title="ბარკოდის გენერაცია" onPress={generate} />

      {code && (
        <View style={styles.barcodeBox}>
          <Barcode value={code} format="CODE128" />
          <Text>კოდი: {code}</Text>
          <Button title="დასკანირებაზე გადასვლა" onPress={() => onProductAdded({name, price, code})} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center' },
  input: { borderBottomWidth: 1, width: 200, marginVertical: 10 },
  barcodeBox: { marginTop: 20, alignItems: 'center' }
});
