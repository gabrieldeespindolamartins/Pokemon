import { View, Text, StatusBar, Image, StyleSheet } from "react-native";

export default function Charmeleon() {
  return (
    <View style={estilosCharmeleon.tela}>
      <Image
        source={require("../imagens/Charmeleon.png")}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <Text style={estilosCharmeleon.titulo}>Charmeleon</Text>
      <View style={estilosCharmeleon.cxDescricao}>
        <Text style={estilosCharmeleon.descricao}>
        Altura: 1,1 m<br/>
        Peso: 19,0 kg<br/>
        Tipo: Fogo<br/>''
        Fraquezas: Água, Terra, Rocha
        </Text>
      </View>
      <StatusBar hidden={true} />
    </View>
  );
}

export const estilosCharmeleon = StyleSheet.create({
  tela: {
    backgroundColor: "#b53030",
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