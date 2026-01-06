import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    padding:16,
    flex:1,
    backgroundColor:"#EDF3ED"
  },

  title:{
    marginBottom:26,
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center"
  },

  sub:{
    marginBottom:16,
    textAlign:"center"
  },

  card:{
    marginBottom:8,
    padding:12,
    borderRadius:5,
    backgroundColor:"#fff",
    elevation:2,
    gap:10
  },

  name:{
    fontWeight:"bold"
  },

  footer:{
    marginTop:12,
    flexDirection:"row",
    justifyContent:"space-between"
  },

  back:{
    padding:12,
    width:"45%",
    borderRadius:6,
    backgroundColor:"#5F615F",
    alignItems:"center",
    gap:10
  },

  confirm:{
    padding:12,
    width:"45%",
    borderRadius:6,
    backgroundColor:"#2AD23B",
    alignItems:"center"
  },

  btnText:{
    fontSize:16,
    fontWeight:"bold",
    color:"#fff"
  }
});

export default styles;
