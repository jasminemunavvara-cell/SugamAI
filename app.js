import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Text } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const generate = () => {
    setResult(`Demo caption generated for: ${text}`);
  };

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Generate Caption" onPress={generate} />
      <Text style={{ marginTop: 20 }}>{result}</Text>
    </SafeAreaView>
  );
}
