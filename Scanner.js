import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner'; // npm i expo-barcode-scanner

export default function Scanner({ productData, onBack }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    if (data === productData.code) {
      alert(`ნაპოვნია: ${productData.name} - ფასი: ${productData.price}₾`);
    } else {
      alert("ეს თქვენთვის არ არის!");
    }
  };

  const fakePayment = () => {
    setIsPaying(true);
    alert("დაადეთ ბარათი კამერას!");
    setTimeout(() => {
      setIsPaying(false);
      alert("გადახდილია! ✅ (სიმულაცია)");
    }, 3000);
  };

  if (hasPermission === null) return <Text>ითხოვს კამერის ნებართვას...</Text>;

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      
      <View style={styles.ui}>
        {scanned && (
          <>
            <Button title="Pay with Card" onPress={fakePayment} color="blue" />
            <Button title="Pay with Cash" onPress={() => alert('მიიღეთ ნაღდი ფული')} color="green" />
            <Button title="თავიდან სკანირება" onPress={() => setScanned(false)} />
          </>
        )}
        <Button title="უკან" onPress={onBack} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ui: { position: 'absolute', bottom: 50, left: 20, right: 20, gap: 10 }
});
