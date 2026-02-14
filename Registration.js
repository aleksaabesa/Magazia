import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Registration({ onLogin }) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>მაღაზიის რეგისტრაცია</Text>
      <TextInput style={styles.input} placeholder="მაღაზიის სახელი" />
      <TextInput style={styles.input} placeholder="პაროლი" secureTextEntry />
      <Button title="შესვლა" onPress={onLogin} color="#2ecc71" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: { width: '80%', padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 5 }
});
