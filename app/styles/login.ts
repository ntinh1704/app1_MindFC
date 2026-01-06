import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    backgroundColor:"#2AD23B0A"
  },

  title:{
    marginTop:160,
    marginBottom:16,
    fontSize:20,
    fontWeight:"700",
    color:"#000000"
  },

  image:{
    marginBottom:50,
    width:140,
    height:140
  },

  body:{
    paddingHorizontal:16,
    width:"100%"
  },

  input:{
    marginBottom:16,
    padding:20,
    borderRadius:30,
    fontSize:16,
    backgroundColor:"#FFFFFF"
  },

  button:{
    marginTop:8,
    paddingVertical:16,
    borderRadius:10,
    backgroundColor:"#2AD23B",
    alignItems:"center",
    fontWeight:"bold"
  },

  buttonText:{
    fontSize:20,
    fontWeight:"bold",
    color:"#FFFFFF"
  },

  circle1:{
    position:"absolute",
    top:-30,
    left:-100,
    width:200,
    height:200,
    borderRadius:100,
    backgroundColor:"rgba(42, 210, 59, 0.25)"
  },

  circle2:{
    position:"absolute",
    top:-100,
    left:0,
    width:200,
    height:200,
    borderRadius:100,
    backgroundColor:"rgba(42, 210, 59, 0.15)"
  }
});

export default styles;
