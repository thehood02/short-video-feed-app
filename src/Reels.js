import {useState} from "react";
import {View, TouchableOpacity, Image, StyleSheet, TextInput, Modal, TouchableWithoutFeedback, FlatList, Dimensions} from "react-native";
import Video from "react-native-video";
import Carousel from "react-native-snap-carousel";
import MyAppText from "./CustomComponents/MyAppText";
import IconButton from "./CustomComponents/IconButton";
import ProfileIcon from "./CustomComponents/ProfileIcon";

const width = Dimensions.get('window').width;

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

    const [like, setLike] = useState(false);
    const [commentsModalVisible, setCommentsModalVisible] = useState(false);

    const commentsData = {
      comments: [
        {
          id: 1,
          body: 'This is some awesome thinking!',
          postId: 100,
          user: {
            id: 63,
            username: 'eburras1q',
          },
        },
        {
          id: 2,
          body: 'What terrific math skills you’re showing!',
          postId: 27,
          user: {
            id: 71,
            username: 'omarsland1y',
          },
        },
        {
          id: 3,
          body: 'You are an amazing writer!',
          postId: 61,
          user: {
            id: 29,
            username: 'jissetts',
          },
        },
        {
          id: 4,
          body: 'Wow! You have improved so much!',
          postId: 8,
          user: {
            id: 19,
            username: 'bleveragei',
          },
        },
        {
          id: 5,
          body: 'Nice idea!',
          postId: 62,
          user: {
            id: 70,
            username: 'cmasurel1x',
          },
        },
        {
          id: 6,
          body: 'You are showing excellent understanding!',
          postId: 19,
          user: {
            id: 97,
            username: 'cdavydochkin2o',
          },
        },
        {
          id: 7,
          body: 'This is clear, concise, and complete!',
          postId: 47,
          user: {
            id: 22,
            username: 'froachel',
          },
        },
        {
          id: 8,
          body: 'What a powerful argument!',
          postId: 47,
          user: {
            id: 82,
            username: 'kogilvy29',
          },
        },
        {
          id: 9,
          body: 'I knew you could do it!',
          postId: 64,
          user: {
            id: 31,
            username: 'smargiottau',
          },
        },
        {
          id: 10,
          body: 'Wonderful ideas!',
          postId: 4,
          user: {
            id: 35,
            username: 'mbrooksbanky',
          },
        },
        {
          id: 11,
          body: 'It was a pleasure to grade this!',
          postId: 2,
          user: {
            id: 68,
            username: 'rstrettle1v',
          },
        },
        {
          id: 12,
          body: 'Keep up the incredible work!',
          postId: 50,
          user: {
            id: 77,
            username: 'rkingswood24',
          },
        },
        {
          id: 13,
          body: 'My goodness, how impressive!',
          postId: 37,
          user: {
            id: 28,
            username: 'xisherwoodr',
          },
        },
        {
          id: 14,
          body: 'You’re showing inventive ideas!',
          postId: 30,
          user: {
            id: 57,
            username: 'bpickering1k',
          },
        },
        {
          id: 15,
          body: 'You’ve shown so much growth!',
          postId: 44,
          user: {
            id: 76,
            username: 'cgaber23',
          },
        },
        {
          id: 16,
          body: 'Interesting thoughts!',
          postId: 71,
          user: {
            id: 100,
            username: 'pcumbes2r',
          },
        },
        {
          id: 17,
          body: 'I love your neat work!',
          postId: 68,
          user: {
            id: 37,
            username: 'nwytchard10',
          },
        },
        {
          id: 18,
          body: 'Doesn’t it feel good to do such great work?',
          postId: 41,
          user: {
            id: 31,
            username: 'smargiottau',
          },
        },
        {
          id: 19,
          body: 'First-rate work!',
          postId: 75,
          user: {
            id: 60,
            username: 'dlambarth1n',
          },
        },
        {
          id: 20,
          body: 'This is fascinating information!',
          postId: 48,
          user: {
            id: 17,
            username: 'vcholdcroftg',
          },
        },
        {
          id: 21,
          body: 'You inspire me!',
          postId: 29,
          user: {
            id: 5,
            username: 'kmeus4',
          },
        },
        {
          id: 22,
          body: 'This is right on target!',
          postId: 18,
          user: {
            id: 31,
            username: 'smargiottau',
          },
        },
        {
          id: 23,
          body: 'What an astounding observation!',
          postId: 73,
          user: {
            id: 14,
            username: 'mturleyd',
          },
        },
        {
          id: 24,
          body: 'This is very well thought out!',
          postId: 32,
          user: {
            id: 16,
            username: 'dpierrof',
          },
        },
        {
          id: 25,
          body: 'I can tell you’ve been practicing!',
          postId: 44,
          user: {
            id: 78,
            username: 'dbuist25',
          },
        },
        {
          id: 26,
          body: 'You’ve come a long way!',
          postId: 70,
          user: {
            id: 82,
            username: 'kogilvy29',
          },
        },
        {
          id: 27,
          body: 'I can tell you’ve been paying attention!',
          postId: 60,
          user: {
            id: 74,
            username: 'ahinckes21',
          },
        },
        {
          id: 28,
          body: 'Reading this made my day!',
          postId: 85,
          user: {
            id: 85,
            username: 'kpondjones2c',
          },
        },
        {
          id: 29,
          body: 'This is very perceptive!',
          postId: 13,
          user: {
            id: 30,
            username: 'kdulyt',
          },
        },
        {
          id: 30,
          body: 'What an accomplishment!',
          postId: 23,
          user: {
            id: 36,
            username: 'dalmondz',
          },
        },
      ],
      total: 340,
      skip: 0,
      limit: 30,
    };

    const videos = [
      'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.jpg',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    ];

    const renderItem = item => {
      return (
        <View
          style={styles.commentContainer}>
          <ProfileIcon />
          <MyAppText
            style={{
              paddingHorizontal: 18,
            }}>
            {item.body}
          </MyAppText>
        </View>
      );
    };

    return (
      <View style={styles.mainContainer}>
        <Carousel
          data={videos}
          containerCustomStyle={{
            flex: 1,
            borderColor: 'green',
            borderWidth: 2,
            backgroundColor: 'red',
          }}
          renderItem={({item}) => (
            <Video
              paused={commentsModalVisible}
              repeat={true}
              resizeMode={'cover'}
              source={{
                uri: item,
              }}
              style={{flex: 1, borderRadius: 36, marginVertical: 14}}
            />
          )}
          sliderWidth={width - 60}
          itemWidth={width - 60}
        />
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
        {/* <Video
          paused={commentsModalVisible}
          repeat={true}
          resizeMode={'cover'}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          }}
          style={{flex: 1, borderRadius: 36, marginVertical: 14}}
        /> */}
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
              onPress={() => setCommentsModalVisible(true)}
              icon={require('../assets/icons/view-comments-btn.png')}
            />
            <IconButton
              onPress={() => setLike(!like)}
              icon={
                like
                  ? require('../assets/icons/like-btn-color.png')
                  : require('../assets/icons/like-btn.png')
              }
            />
          </View>
        </View>

        <Modal
          transparent
          visible={commentsModalVisible}
          onRequestClose={() => setCommentsModalVisible(false)}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setCommentsModalVisible(false)}
            style={styles.modalBackground}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <FlatList
                  data={commentsData.comments}
                  keyExtractor={item => item.id}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => renderItem(item)}
                />
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
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
    paddingHorizontal: 8,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '30%',
    paddingHorizontal: '10%',
  },
  modalContainer: {
    height: '100%',
    width: '100%',
    minHeight: 400,
    minWidth: 300,
    backgroundColor: '#302F34',
    borderRadius: 36,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
});