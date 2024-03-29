import React, { useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'


import Icon from 'react-native-vector-icons/MaterialIcons'

import { playbackService } from '../../musicPlayerServices'
import { getPlaybackState } from 'react-native-track-player/lib/trackPlayer'

const ControlCenter = () => {

    // const playBackState = usePlaybackState()
    const[playState,setPlayState] = useState(State.Paused)
    // next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }
    // Previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback = async () => {
        const  currentTrack = await TrackPlayer.getActiveTrackIndex()
        const playBackState = (await getPlaybackState()).state


        if (currentTrack !== null) {
            if (playBackState === State.Paused || playBackState === State.Ready) {
                await TrackPlayer.play()
                setPlayState(State.Playing)
            } else {
                await TrackPlayer.pause()
                setPlayState(State.Paused)
            }
        }
    }

  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon style={styles.icon} name="skip-previous" size={40} />
        </Pressable>
        <Pressable onPress={() => togglePlayback()}>
            <Icon 
            style={styles.icon} 
            name={playState===State.Paused ? "play-arrow" : "pause" } 
            size={75} />
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon style={styles.icon} name="skip-next" size={40} />
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
  
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });

export default ControlCenter