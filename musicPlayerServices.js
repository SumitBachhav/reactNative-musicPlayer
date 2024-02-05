import TrackPlayer, {Event, RepeatMode} from "react-native-track-player";

import { playListData } from "./src/constants";

export async function setupPlayer(){
    let isSetup = false;

    try {
        await TrackPlayer.getActiveTrackIndex()
        isSetup = true;
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetup = true;
    }finally{
        return isSetup
    }
}

export async function addTrack(){
    await TrackPlayer.add(playListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playbackService (){
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })

}


/*
 - import TrackPlayer
 - import data from constants
 - services may take time so use async function
 - create async function playbackService and export it
    - playbackServices provides us the ability to play pause and other functions
    - those features come from TrackPlayer
    - add different events
 - create async function playbackService and export it
    - simple "await TrackPlayer.setupPlayer()" will work
    - but when app might crash we need try and catch to solve it
 - load music data into player
    - create async function addTrack and export it
    - using add function we can load data
    - we can also use function to set player behavior











*/