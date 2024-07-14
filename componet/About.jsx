import {View,Text, StyleSheet, Button} from  'react-native'
export default function About({route,navigation}){
    const {name} =route.params

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About {name}</Text>
            <Button title='update name' onPress={()=>navigation.setParams({
                name: "updated name"
            })}/>
             <Button title='data from about' onPress={()=>navigation.navigate("Home",{result:"data from about page"})}/>
        </View>
        
    )
}
 const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text:{
        fontSize: 20,
        color: 'red',
    }
})