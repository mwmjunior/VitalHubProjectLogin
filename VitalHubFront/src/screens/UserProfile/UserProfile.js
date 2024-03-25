import { ScrollView, StatusBar } from "react-native";
import { Button, ButtonLogoff } from "../../components/Button/Style";
import { Container, ImageContainer, ScrollViewContainer, TextBoxArea, TextBoxContainer, TextBoxContainerRow } from "../../components/Container/Style";
import { ButtonTitle, EmailTitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";

import AsyncStorage from '@react-native-async-storage/async-storage'

import {React, useState} from "react";

export const UserProfile = ({ navigation }) => {
    const logout = async () => {
        
        const token = await AsyncStorage.getItem('token');
        console.log('Token encontrado:', token);

        try {
            // Verifica se o token existe
            await AsyncStorage.removeItem('token');
            const token = await AsyncStorage.getItem('token')
            if (!token) {
                // Remove o token de autenticação
                console.log('O Token removido com sucesso!');
                console.log('Usuário foi deslogado com sucesso!');
                console.log(token);
            } else {
                console.log('O Token não foi removido!');
                console.log(token);
            }
            // Navega de volta para a tela de login
            navigation.replace('Login');
        } catch (error) {
            console.error('Erro ao deslogar:', error);
        }
    };

    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageContainer source={require("../../assets/images/user_profile.png")} />
            <ScrollViewContainer>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">
                    <Title>Richard Kosta</Title>
                    <EmailTitle>richard.kosta@gmail.com</EmailTitle>
                    <TextBoxContainer>
                        <TextBoxTitle>Data de Nascimento:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>04/05/1999</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>CPF:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>859********</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainer>
                        <TextBoxTitle>Endereço:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>Rua: Vicenso Silva, 987</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>
                    <TextBoxContainerRow>
                        <TextBoxContainer fieldWidth={45}>
                            <TextBoxTitle>Cep:</TextBoxTitle>
                            <TextBoxArea >
                                <TextBoxText>06548-909</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>
                        <TextBoxContainer fieldWidth={45}>
                            <TextBoxTitle>Cidade:</TextBoxTitle>
                            <TextBoxArea >
                                <TextBoxText>Moema-SP</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>
                    </TextBoxContainerRow>
                    <Button>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button>
                    <Button>
                        <ButtonTitle>Editar</ButtonTitle>
                    </Button>
                    <ButtonLogoff onPress={logout}>
                        <ButtonTitle>Sair do APP</ButtonTitle>
                    </ButtonLogoff>
                </ScrollView>
            </ScrollViewContainer>
        </Container>
    );
};