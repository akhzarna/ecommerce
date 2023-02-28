import{ StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainView: {
      flex:1
    },
    upperView:{
      flex:0.20, 
      backgroundColor:'orange'
    },
    centerView:{
      flex:0.60, 
      backgroundColor:'magenta'
    },
    bottomView:{
      flex:0.20, 
      backgroundColor:'green'
    }
  });
  
  export {styles}