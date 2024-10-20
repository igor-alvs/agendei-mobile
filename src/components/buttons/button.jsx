import { Alert, Text, TouchableOpacity } from 'react-native';
import { styles } from './button.style.js'

export default function Button(props) {

    return ( 
        <TouchableOpacity onPress={() => Alert.alert("clicou")} style={styles.btn}> 
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    ); 
}

