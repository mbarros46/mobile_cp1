import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import InputField from './src/componets/InputField';
import Logo from './src/componets/Logo';

const App = () => {
  const [mpNota1, setMpNota1] = useState('0');
  const [mpNota2, setMpNota2] = useState('0');
  const [mpNota3, setMpNota3] = useState('0');
  const [mpFaltas, setMpFaltas] = useState('0');
  const [message, setMessage] = useState('');

  const resetFields = () => {
    setMpNota1('0');
    setMpNota2('0');
    setMpNota3('0');
    setMpFaltas('0');
    setMessage('');
  };

  const handleValidation = () => {
    const notas = [
      parseFloat(mpNota1) || 0,
      parseFloat(mpNota2) || 0,
      parseFloat(mpNota3) || 0,
    ];
    const faltas = parseInt(mpFaltas) || 0;

    notas.sort((a, b) => b - a);
    const media_nota = (notas[0] + notas[1]) / 2;

    if (faltas > 25) {
      setMessage('Reprovado devido à ausência');
    } else if (media_nota < 6) {
      setMessage('Reprovado por desempenho abaixo do esperado');
    } else {
      setMessage(`Aprovado com média alcançada de ${media_nota.toFixed(2)}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo onPress={resetFields} />
      <InputField label="Nota 1" value={mpNota1} onChange={setMpNota1} />
      <InputField label="Nota 2" value={mpNota2} onChange={setMpNota2} />
      <InputField label="Nota 3" value={mpNota3} onChange={setMpNota3} />
      <InputField
        label="Faltas"
        value={mpFaltas}
        onChange={setMpFaltas}
        keyboardType="numeric"
      />
      <Button title="Validar" onPress={handleValidation} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;