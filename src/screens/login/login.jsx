import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import icons from '../../constants/icons.js'
import { styles } from './login.style.js';
import Button from '../../components/buttons/button.jsx';

export default function Login() {
    return (
        // Código da tela de login, com um texto e um botão
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Image source={icons.logoAury} style={styles.logo}/>
            </View>
            
            <View>
                <View style={styles.containerInput}>
                    <TextInput style={styles.input} placeholder="E-mail"/>
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
                    <Button text="Entrar" />
                </View>
            </View>

            <View style={styles.footer}>
                <Text>Não tenho conta. </Text>
                <TouchableOpacity>
                    <Text style={styles.footerLink}>Criar conta agora.</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}