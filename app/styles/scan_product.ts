import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    paddingTop:60,
    flex:1,
    alignItems:"center",
    backgroundColor:"#EDF3ED"
  },

  title:{
    marginBottom:30,
    fontSize:30,
    fontWeight:"700",
    textAlign:"center"
  },

  scanArea:{
    marginBottom:60,
    width:335,
    height:385,
    position:"relative"
  },

  overlay:{
    ...StyleSheet.absoluteFillObject
  },

  corner:{
    width:30,
    height:30,
    position:"absolute",
    borderColor:"#000"
  },

  topLeft:{
    top:0,
    left:0,
    borderLeftWidth:3,
    borderTopWidth:3
  },

  topRight:{
    top:0,
    right:0,
    borderRightWidth:3,
    borderTopWidth:3
  },

  bottomLeft:{
    bottom:0,
    left:0,
    borderLeftWidth:3,
    borderBottomWidth:3
  },

  bottomRight:{
    bottom:0,
    right:0,
    borderRightWidth:3,
    borderBottomWidth:3
  },

  scanLine:{
    position:"absolute",
    bottom:0,
    left:0,
    right:0,
    height:3,
    backgroundColor:"#34DD5A"
  },

  button:{
    paddingVertical:14,
    width:285,
    height:75,
    borderRadius:14,
    backgroundColor:"#666",
    alignItems:"center"
  },

  buttonDisabled:{
    backgroundColor:"#34DD5A"
  },

  buttonText:{
    fontSize:26,
    fontWeight:"600",
    color:"#fff"
  },

  result:{
    marginTop:20,
    fontSize:14
  }
});

export default styles;
