import {TouchableOpacity, Image, StyleSheet} from "react-native";

const IconButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.btn} onPress={onPress}>
      <Image source={icon} style={styles.btnIcon} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
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