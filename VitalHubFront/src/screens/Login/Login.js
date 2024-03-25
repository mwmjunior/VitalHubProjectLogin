import { StatusBar } from "expo-status-bar";
import { Button, ButtonGoogle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { GoogleIcon } from "../../components/Icons/Style";
import { Input } from "../../components/Input/Style";
import { LinkBold, LinkMedium } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../components/Title/Style";
import { ContentAccount, TextAccount } from "./Style";

import AsyncStorage from '@react-native-async-storage/async-storage'

import {React, useState} from "react";


import api from "../../service/service";

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('email@email.com')
    const [senha, setSenha] = useState('email123')

    // Chamar a funcao de login 

    async function Login() {

        // Chama a api de Login
        const response = await api.post('/Login', {
            email: email,
            senha: senha
        })


        //25/03/2024
        await AsyncStorage.setItem('token', JSON.stringify(response.data))

        console.log(response)

        navigation.replace("Main")
    }

    async function PasswordRecover() {
        navigation.replace("PasswordRecover")
    }
    async function CreateAccount() {
        navigation.replace("CreateAccount")
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <Logo />
            <Title>Entrar ou Criar Conta</Title>
            <Input placeholder="Usuário ou E-mail"
                value={email}
                onChangeText={(txt) => setEmail(txt)}

            />
            <Input placeholder="Senha" secureTextEntry
                value={senha}
                onChangeText={(txt) => setSenha(txt)}

            />
            <LinkMedium onPress={() => PasswordRecover()}>Esqueceu sua senha?</LinkMedium>
            <Button width="90%" onPress={() => {Login()}}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>
            <ButtonGoogle width="90%">
                <GoogleIcon />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>
            <ContentAccount>
                <TextAccount>Não tem conta? <LinkBold onPress={() => CreateAccount()}>Crie uma conta agora!</LinkBold></TextAccount>
            </ContentAccount>
        </Container>
    );
};