

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';





function App(): React.JSX.Element {


  return (
    <SafeAreaView>
      <StatusBar
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;


/**
 - install react native track player https://rntp.dev/docs/basics/installation
 - create src folder, move app.tsx into it
 - create assets folder and keep music folder in it
 - create new file "constants.ts" and prepare a list of the music that we will be playing.
 - the player needs to be ready and needs to be listening for some events, means app sould be available and aware of the setting available. for that create new file "musicPlayerService.js"
 
 in index.js
 - import TrackPlayer
 - import playbackServices from created musicPlayerServices
 - need to register playbackService




 */