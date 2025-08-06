import { useState } from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  title: {
    fontSize: 26,
    color: "#AA2200",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#121212",
  },
  input: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff"
  }
});

export default function Index() {
  const [valorMensal, setValorMensal] = useState("");
  const [numMeses, setNumMeses] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [montanteSemJuros, setMontanteSemJuros] = useState(0);
  const [montanteComJuros, setMontanteComJuros] = useState(0);

  const calcularMontantes = () => {
    const valor = parseFloat(valorMensal);
    const meses = parseInt(numMeses);
    const taxa = parseFloat(taxaJuros) / 100;

    // Montante sem juros
    const montanteSemJuros = valor * meses;

    // Montante com juros compostos
    let montanteComJuros = 0;
    for (let i = 0; i < meses; i++) {
      montanteComJuros = (montanteComJuros + valor) * (1 + taxa);
    }

    setMontanteSemJuros(montanteSemJuros);
    setMontanteComJuros(montanteComJuros);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Investimentos</Text>
      <TextInput
        placeholder="Valor mensal a investir"
        style={styles.input}
        value={valorMensal}
        onChangeText={setValorMensal}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Número de meses"
        style={styles.input}
        value={numMeses}
        onChangeText={setNumMeses}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Taxa de juros mensal (%)"
        style={styles.input}
        value={taxaJuros}
        onChangeText={setTaxaJuros}
        keyboardType="numeric"
      />
      <Button
        title="Calcular Montantes"
        onPress={calcularMontantes}
      />
      <Text style={styles.text}>Montante sem juros: R$ {montanteSemJuros.toFixed(2)}</Text>
      <Text style={styles.text}>Montante com juros compostos: R$ {montanteComJuros.toFixed(2)}</Text>
    </View>
  );
}
