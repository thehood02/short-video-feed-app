import {View, TouchableOpacity, Image, StyleSheet} from "react-native";
import Video from "react-native-video";
import MyAppText from "./CustomComponents/MyAppText";

const VideoTitle = ({title, time}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 'auto',
      }}>
      <MyAppText style={{fontFamily: 'Montserrat-SemiBold', marginRight: 6}}>
        {title}
      </MyAppText>
      <MyAppText
        style={{
          color: '#C4C4C4',
          fontSize: 12,
          fontFamily: 'Montserrat-Medium',
        }}>
        {time}
      </MyAppText>
    </View>
  );
};

const Reels = () => {
    return (
      <View style={styles.mainContainer}>
        <View style={{flexDirection: 'row'}}>
          <VideoTitle title={'video title'} time={'1 day ago'} />
          <TouchableOpacity activeOpacity={0.8} style={styles.addBtn}>
            <Image
              source={require('../assets/icons/add-icon.png')}
              style={styles.addIcon}
            />
            <MyAppText style={{fontFamily: 'Montserrat-SemiBold'}}>
              add video
            </MyAppText>
          </TouchableOpacity>
        </View>
        <Video
          paused={false}
          repeat={true}
          resizeMode={"cover"}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          }}
          style={{flex: 1, borderRadius: 36, marginTop: 32}}
        />
      </View>
    );
}

export default Reels;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: '#000',
    padding: 30,
  },
  addBtn: {
    backgroundColor: '#8B77FE',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  addIcon: {
    height: 16,
    width: 16,
    marginRight: 4,
  },
});