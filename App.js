import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import React, { Component } from "react";
import {
	StyleSheet,
	Switch,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      sobrenome: "",
      idade: 0,
      sexo: "",
      estudante: false,
      limite: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Native Bank</Text>

        <View style={styles.area}>
          <View style={styles.form}>
            <View style={styles.row}>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                style={styles.input}
                onChangeText={(texto) => this.setState({ nome: texto })}
                underlineColorAndroid={"transparent"}
              />
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Sobrenome</Text>
              <TextInput
                style={styles.input}
                onChangeText={(texto) => this.setState({ sobrenome: texto })}
                underlineColorAndroid={"transparent"}
              />
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Sexo</Text>
              <Picker
                style={styles.inputSexo}
                selectedValue={this.state.pizza}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({ sexo: itemValue });
                }}
              >
                <Picker.Item key={1} value={"MASCULINO"} label={"Masculino"} />
                <Picker.Item key={2} value={"FEMININO"} label={"Feminino"} />
                <Picker.Item
                  key={3}
                  value={"NAO_INFORMADO"}
                  label={"Prefiro não informar"}
                />
              </Picker>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Idade</Text>
              <TextInput
                keyboardType="number-pad"
                style={styles.input}
                onChangeText={(texto) => this.setState({ idade: texto })}
                underlineColorAndroid={"transparent"}
              />
            </View>

            <View style={styles.rowEstudante}>
              <Text style={styles.label}>Estudante</Text>
              <Switch
                value={this.state.estudante}
                onValueChange={(valor) => this.setState({ estudante: valor })}
              />
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Selecione Seu Limite</Text>
              <Slider
                minimumValue={100}
                maximumValue={5000}
                value={this.state.limite}
                onValueChange={(valorSelecionado) =>
                  this.setState({ limite: valorSelecionado })
                }
              />
              <Text style={styles.textLimite}>
                R$ {this.state.limite.toFixed(2)}
              </Text>
            </View>
          </View>

          <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.label}>Limpar Dados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.label}>Abrir Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    fontFamily: "Rubik",
  },
  area: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  form: {
    gap: 20,
    width: "100%",
  },
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
  },
  row: {
    width: "100%",
    gap: 3,
    justifyContent: "center",
  },
  rowEstudante: {
    width: "100%",
    gap: 3,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 10,
	padding: 2,
    backgroundColor: "#D9D9D9",
  },
  inputSexo: {
    width: "100%",
    height: 40,
    borderRadius: 10,
	padding: 2,
	borderWidth: 0,
    backgroundColor: "#D9D9D9",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textLimite: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  botao: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonArea: {
    gap: 5,
    marginBottom: 10,
  },
});
