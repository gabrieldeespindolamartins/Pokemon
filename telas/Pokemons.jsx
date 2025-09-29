import { Image, StyleSheet, StatusBar, Text, View } from "react-native";
import Cartoes from "./Cartoes";

export default function Pokemons({navigation}){
    return (
        <View>
            <Image
                source={require('../imagens/logomarca_pokemon.png')}
                style={{margin: 'auto', marginTop: 30}}
            />
           <View style={{flexDirection: 'row',
                         flexWrap: 'wrap',
                         gap: 20
                        }}>
                <Cartoes 
                    imagem={require('../imagens/bulbassauro.png')}
                    titulo={"Bulbasauro"} 
                    onPress={()=>{navigation.navigate("Bulbassauro")}}   
                />
                <Cartoes 
                    imagem={require('../imagens/charmander.png')}
                    titulo={"Charmander"} 
                    onPress={()=>{navigation.navigate("Bulbassauro")}}   
                />
                <Cartoes 
                    imagem={require('../imagens/Squirtle.png')}
                    titulo={"Squirtle"} 
                    onPress={()=>{navigation.navigate("Bulbassauro")}}   
                />
                <Cartoes 
                    imagem={require('../imagens/zubat.png')}
                    titulo={"Zubat"} 
                    onPress={()=>{navigation.navigate("Bulbassauro")}}   
                />
                <Cartoes 
                    imagem={require('../imagens/Sandslash.png')}
                    titulo={"Sandslash"} 
                    onPress={()=>{navigation.navigate("Bulbassauro")}}   
                />
                <Cartoes 
                    imagem={require('../imagens/Charmeleon.png')}
                    titulo={"Charmeleon"} 
                    onPress={()=>{navigation.navigate("Bulbassauro")}}   
                />
           </View>
            <StatusBar hidden={true}/>
        </View>
    );
}

