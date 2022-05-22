import React from "react";
import { FormControl, Input, Stack, Text, Divider, Box, WarningOutlineIcon, ScrollView, Center, NativeBaseProvider, Button } from "native-base";
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const Example = () => {
  return <ScrollView w="100%">
      <Stack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{
      base: "100%",
      md: "25%",
    }}>
     <View>
        <Text bold alignSelf ='center' color="red.500"><h2>ETEC CAMARGO ARANHA</h2> </Text>
        <Image 
            source={require('./img/ETEC-Camargo-Aranha.jpg')} 
            style={{ width: 250, height: 90 }}
            alt="image" alignItems="center" />
      </View>
        <Box>
      
          <Text bold fontSize="x1" color="black.500" mb="-7" alignSelf='center'>
            FORMULÁRIO ETEC <br/ > </Text>       
          <Text alignSelf='center'>
            preencha
          </Text>
          <FormControl mb="5">
            <FormControl.Label>NOME</FormControl.Label>
            <Input placeholder="Nome"/>
            <FormControl.HelperText>
              digite seu nome.
            </FormControl.HelperText>
          </FormControl>

           <FormControl mb="5">
            <FormControl.Label>EMAIL</FormControl.Label>
            <Input placeholder="E-mail"/>
            <FormControl.HelperText>
              digite seu email.
            </FormControl.HelperText>
          </FormControl>

          <FormControl mb="5">
            <FormControl.Label>LOGIN</FormControl.Label>
            <Input placeholder="Input"/>
            <FormControl.HelperText>
              digite seu Login.
            </FormControl.HelperText>
          </FormControl>

          <FormControl mb="5">
            <FormControl.Label>SENHA</FormControl.Label>
            <Input type="password" defaultValue="123456" placeholder="password" />
            <FormControl.HelperText>
              digite sua senha
            </FormControl.HelperText>
          </FormControl>
          <Divider />
        </Box>
        <Box alignItems="center">
          <FormControl mb="5">
          <Button mx="77" onPress={() => console.log("hello world")}>Enviar</Button>
          </FormControl>
          <Divider />
        </Box>
      
      </Stack>
    </ScrollView>;
};

    export default  () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
