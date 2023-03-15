import {Text} from 'react-native';

const MyAppText = props => {
  return (
    <Text
      style={{
        fontFamily: 'Montserrat-Medium',
        color: '#FFF',
        fontSize: 14,
        ...props.style,
      }}>
      {props.children}
    </Text>
  );
};

export default MyAppText;
