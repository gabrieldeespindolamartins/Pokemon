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
                    imagem={require('../imagens/Charmander.png')}
                    titulo={"Charmander"} 
                    onPress={()=>{navigation.navigate("Charmander")}}   
                />
                <Cartoes 
                    imagem={require('../imagens/Squirtle.png')}
                    titulo={"Squirtle"} 
                    onPress={()=>{navigation.navigate("Squirtle")}}   
                />
                <Cartoes 
                    imagem={require('../imagens/Zubat.png')}
                    titulo={"Zubat"} 
                    onPress={()=>{navigation.navigate("Zubat")}}   
                />
                <Cartoes 
                    imagem={require('../imagens/Sandslash.png')}
                    titulo={"Sandslash"} 
                    onPress={()=>{navigation.navigate("Sandslash")}}   
                />
                <Cartoes 
                    imagem={require('../imagens/Charmeleon.png')}
                    titulo={"Charmeleon"} 
                    onPress={()=>{navigation.navigate("Charmeleon")}}   
                />
           </View>
            <StatusBar hidden={true}/>
        </View>
    );
}

