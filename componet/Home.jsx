import { useNavigation } from '@react-navigation/native'
import {View,Text, StyleSheet,Button} from  'react-native'
export default function Home({navigation, route}){
    //  const navigation=useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>shashi</Text>
            <Text style={styles.text}>{route.params?.result}</Text>
            <Button title="Go to about page"
             onPress={()=>navigation.navigate("About"
                ,{
                name: "Shashi"
                }
            )} />
           
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