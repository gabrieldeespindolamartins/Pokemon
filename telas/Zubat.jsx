import { View, Text, StatusBar, Image, StyleSheet } from "react-native";

export default function Zubat() {
  return (
    <View style={estilosZubat.tela}>
      <Image
        source={require("../imagens/Zubat.png")}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <Text style={estilosZubat.titulo}>Zubat</Text>
      <View style={estilosZubat.cxDescricao}>
        <Text style={estilosZubat.descricao}>
        Altura: 0,8 m<br/>
        Peso: 7,5 kg<br/>
        Tipo: Veneno/Voador<br/>
        Fraquezas: Elétrico, Psíquico, Gelo, Rocha
        </Text>
      </View>
      <StatusBar hidden={true} />
    </View>
  );
}

export const estilosZubat = StyleSheet.create({
  tela: {
    backgroundColor: "#6c436e",
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