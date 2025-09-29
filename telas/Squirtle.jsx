import { View, Text, StatusBar, Image, StyleSheet } from "react-native";

export default function Squirtle() {
  return (
    <View style={estilosSquirtle.tela}>
      <Image
        source={require("../imagens/Squirtle.png")}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <Text style={estilosSquirtle.titulo}>Squirtle</Text>
      <View style={estilosSquirtle.cxDescricao}>
        <Text style={estilosSquirtle.descricao}>
        Altura: 0,5 m<br/>
        Peso: 9,0 kg<br/>
        Tipo: Água<br/>
        Fraquezas: Elétrico, Grama
        </Text>
      </View>
      <StatusBar hidden={true} />
    </View>
  );
}

export const estilosSquirtle = StyleSheet.create({
  tela: {
    backgroundColor: "#48a3b0",
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