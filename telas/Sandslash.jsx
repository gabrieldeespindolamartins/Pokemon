import { View, Text, StatusBar, Image, StyleSheet } from "react-native";

export default function Sandslash() {
  return (
    <View style={estilosSandslash.tela}>
      <Image
        source={require("../imagens/Sandslash.png")}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <Text style={estilosSandslash.titulo}>Sandslash</Text>
      <View style={estilosSandslash.cxDescricao}>
        <Text style={estilosSandslash.descricao}>
        Altura: 1,0 m<br/>
        Peso: 29,5 kg<br/>
        Tipo: Terra<br/>
        Fraquezas: Água, Gelo, Planta
        </Text>
      </View>
      <StatusBar hidden={true} />
    </View>
  );
}

export const estilosSandslash = StyleSheet.create({
  tela: {
    backgroundColor: "#b28b32",
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