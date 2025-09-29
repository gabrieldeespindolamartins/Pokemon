import { View, Text, StatusBar, Image, StyleSheet } from "react-native";

export default function Charmander() {
  return (
    <View style={estilosMander.tela}>
      <Image
        source={require("../imagens/Charmander.png")}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <Text style={estilosMander.titulo}>Charmander</Text>
      <View style={estilosMander.cxDescricao}>
        <Text style={estilosMander.descricao}>
        Altura: 0,6 m<br/>
        Peso: 8,5 kg<br/>
        Tipo: Fogo<br/>
        Fraquezas: Água, Terra, Rocha
        </Text>
      </View>
      <StatusBar hidden={true} />
    </View>
  );
}

export const estilosMander = StyleSheet.create({
  tela: {
    backgroundColor: "#9b4e32",
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  titulo: {
    fontSize: 40,
    color: "white",
    fontWeight: "600",
    marginVertical: 10,
  },
  cxDescricao: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 300,
    height: 300,
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },
  descricao: {
    fontSize: 16,
    color: "#000",
  },
});