import {View, TouchableOpacity, Image, StyleSheet, TextInput} from "react-native";
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

const IconButton = ({icon, onPress}) => {
    return (
      <TouchableOpacity style={styles.btn}>
        <Image
          source={icon}
          style={styles.btnIcon}
        />
      </TouchableOpacity>
    );
}

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
          resizeMode={'cover'}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          }}
          style={{flex: 1, borderRadius: 36, marginVertical: 32}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="write a comment"
            placeholderTextColor={'#C4C4C4'}
            style={styles.commentInput}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconButton
              icon={require('../assets/icons/view-comments-btn.png')}
            />
            <IconButton icon={require('../assets/icons/like-btn.png')} />
          </View>
        </View>
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
  commentInput: {
    height: 32,
    flex: 1,
    backgroundColor: '#302F34',
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    borderRadius: 10,
    padding: 0,
    paddingHorizontal: 8
  },
  btn: {
    height: 32,
    width: 50,
    backgroundColor: '#302F34',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 14,
  },
  btnIcon: {
    height: 22,
    width: 22,
  },
});