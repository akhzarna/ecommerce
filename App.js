import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {styles} from './myCSS.jsx'

const flag = 'We have started';

export default function App() {

  return (
    <View style={styles.mainView}>

      <Text> {flag} </Text>
      
      <View style={styles.upperView}>
        {/* Image */}
      </View>
      <View style={styles.centerView}>
                {/* Text Fields */}
      </View>
      <View style={styles.bottomView}>
                {/* Buttons */}
      </View>
    </View>
  );
}

