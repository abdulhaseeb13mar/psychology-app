import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Platform,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  useSafeAreaInsets,
  useSafeAreaFrame,
} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const height = Dimensions.get('window').height;

function Webview({onLoadEnded}: {onLoadEnded: () => void}): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame();
  const [HEIGHT] = useState(
    (Platform.OS === 'ios' ? height : frame.height) -
      (insets.bottom + insets.top),
  );
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{height: HEIGHT}}>
          <WebView
            source={{uri: 'https://psychology-132e2.web.app'}}
            onLoadEnd={onLoadEnded}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   Wrapper: {
//     borderColor: 'red',
//     borderWidth: 1,
//     height: 500,
//   },
// });

export default Webview;
