import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import {COLORS} from '../../../assets/theme/Theme';
import Icons from '../../../assets/constants/Icons';
import {useIsFocused} from '@react-navigation/native';

const format = seconds => {
  if (isNaN(seconds) || seconds == null) return '00:00';
  const mins =
    parseInt(seconds / 60)
      .toString()
      .padStart(2, '0') || 0;
  const secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0') || 0;
  return `${mins}:${secs}`;
};

const VideoPlayer = ({id, videoUrl, currentVisiblePostId}) => {
  const isFocused = useIsFocused();
  const [isEnded, setIsEnded] = useState(false);
  const [progress, setProgress] = useState(null);
  const [paused, setPaused] = useState(
    id == currentVisiblePostId ? false : true,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [videoKey, setVideoKey] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.seek(0);
        setPaused(true);
      }
    };
  }, []);

  useEffect(() => {
    if (!isFocused) {
      setPaused(true);
    }
  }, [isFocused]);

  useEffect(() => {
    setPaused(id == currentVisiblePostId ? false : true);
    setIsEnded(false);
  }, [currentVisiblePostId]);

  const onLoad = (time = 0) => {
    if (videoRef.current?.seek) {
      videoRef.current.seek(time);
    }
  };

  const handleReplay = () => {
    setIsEnded(false);
    setProgress(null);
    setVideoKey(prev => prev + 1);
    setTimeout(() => setPaused(false), 0);
  };

  const onEnd = () => {
    setPaused(true);
    setProgress(null);
    setIsEnded(true);
  };

  if (!videoUrl) return null;

  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Video
          paused={paused}
          key={videoKey}
          source={{uri: videoUrl}}
          ref={videoRef}
          onProgress={x => setProgress(x)}
          style={styles.video}
          onLoadStart={() => setIsLoading(true)}
          onReadyForDisplay={() => setIsLoading(false)}
          onBuffer={({isBuffering}) => setIsLoading(isBuffering)}
          muted={id != currentVisiblePostId}
          resizeMode="contain"
          onEnd={onEnd}
          onLoad={() => onLoad(progress?.currentTime ?? 0)}
          posterResizeMode="cover"
          repeat={true}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setPaused(!paused);
            setIsEnded(false);
          }}
          style={styles.overlay}>
          <TouchableOpacity activeOpacity={1} style={styles.audioControl}>
            <Image
              source={
                id != currentVisiblePostId ? Icons.mute : Icons.medium_volume
              }
              style={styles.audioIcon}
            />
          </TouchableOpacity>

          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>
              {format(progress?.seekableDuration - progress?.currentTime)}
            </Text>
          </View>

          {isLoading && (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="gray" />
            </View>
          )}

          {isEnded && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.replayButton}
              onPress={handleReplay}>
              {/* <Icon name="replay" size={20} color={COLORS.white} /> */}
              <Text style={styles.replayText}>Watch again</Text>
            </TouchableOpacity>
          )}
          {paused && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{padding: 10}}
              onPress={() => {
                setIsEnded(false);
                setPaused(false);
              }}>
              <Image source={Icons.play_button} style={styles.play_button} />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    width: '100%',
    marginTop: 10,
    zIndex: 1,
  },
  video: {
    aspectRatio: 1,
    width: '100%',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioControl: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.black,
    borderRadius: 50,
    padding: 5,
  },
  audioIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  timerContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: COLORS.black,
    borderRadius: 5,
    padding: 2,
  },
  timerText: {
    color: 'white',
  },
  replayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  replayText: {
    color: COLORS.white,
    fontSize: 18,
    paddingLeft: 5,
  },
  loader: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play_button: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});
