import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    paddingTop:50,
    flex:1,
    alignItems:"center",
    backgroundColor:"#EDF3ED"
  },

  title:{
    marginBottom:20,
    fontSize:24,
    fontWeight:"700",
    textAlign:"center"
  },

  scanArea:{
    marginBottom:20,
    width:300,
    height:260,
    backgroundColor:"#fff",
    overflow:"hidden"
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
    left:0,
    right:0,
    height:3,
    backgroundColor:"#34DD5A"
  },

  scanBtn:{
    marginTop:10,
    marginBottom:50,
    width:140,
    height:46,
    borderRadius:14,
    backgroundColor:"#34DD5A",
    alignItems:"center",
    justifyContent:"center"
  },

  scanBtnDisabled:{
    backgroundColor:"#5F615F"
  },

  scanText:{
    fontSize:18,
    fontWeight:"600",
    color:"#fff"
  },

  infoCard:{
    marginBottom:30,
    padding:10,
    width:370,
    height:110,
    borderRadius:5,
    backgroundColor:"#FFFFFF",
    flexDirection:"row",
    alignItems:"center",
    gap:12,
    elevation:2
  },

  infoElm:{
    width:270,
    height:90
  },

  avatar:{
    width:80,
    height:90,
    borderRadius:5
  },

  infoTitle:{
    marginBottom:10,
    fontSize:18,
    fontWeight:"700"
  },

  infonameId:{
    fontSize:16,
    fontWeight:"400",
    gap:10
  },

  footer:{
    marginTop:20,
    paddingHorizontal:10,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    gap:10
  },

  backBtn:{
    paddingHorizontal:20,
    paddingVertical:12,
    borderRadius:10,
    backgroundColor:"#5F615F"
  },

  backText:{
    fontWeight:"600",
    color:"#fff"
  },

  confirmBtn:{
    paddingHorizontal:20,
    paddingVertical:12,
    borderRadius:10,
    backgroundColor:"#34DD5A"
  },

  confirmText:{
    fontWeight:"600",
    color:"#fff"
  }
});

export default styles;
