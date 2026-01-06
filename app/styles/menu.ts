import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    paddingTop:60,
    paddingHorizontal:20,
    flex:1,
    backgroundColor:"#2AD23B0A"
  },

  item:{
    marginBottom:30,
    borderRadius:10,
    flexDirection:"row",
    alignItems:"center"
  },

  imageWrapper:{
    width:50,
    height:50,
    borderRadius:10,
    backgroundColor:"#FFFFFF",
    justifyContent:"center",
    alignItems:"center",
    elevation:5
  },

  image:{
    width:30,
    height:30
  },

  text:{
    marginLeft:16,
    fontSize:16,
    fontWeight:"400",
    color:"#000000"
  }
});

export default styles;
