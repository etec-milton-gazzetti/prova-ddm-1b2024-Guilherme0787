import {StylesSheet } from 'react-native';

export const styles = StylesSheet.create({
    scrollViewContainer:{
  flexGrow: 1,
    },
    container:{
        paddingTop: 40,
        alignItems:'center',
    },
titulo:{
    fontSize: 20,
    fontWeigth: 'bold',
   color:'#333',       
},
texto:{
    marginTop: 25,
    fontSize: 20,
    color: '#666',
    textAlign:'center',
    marginTop: 20,
},
imagensContainer:{
    flexDirection: 'column',
    alignItems:'center',
    marginTop: 20,
},
imagem:{
width: 150,
height: 150,
resizeMode:'cover',
marginBottom: 20,
},
titulofoto:{
    marginTop: 20,
    fontSize: 16,
    fontWeigth: "bold",
},
botao:{
    backgroundColor:'#0000FF',
padding: 10,
borderRadius: 5,
alignItems: 'center',
marginTop: 10,
},
textoBotao:{
    color: 'white',
    fontWeigth: 'bold',
},



















})