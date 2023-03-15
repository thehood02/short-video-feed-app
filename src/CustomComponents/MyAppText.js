import {Text} from 'react-native';

const MyAppText = props => {
  return (
    <Text
      style={{
        fontFamily: 'Montserrat-Regular',
        color: '#FFF',
        fontSize: 14,
        ...props.style,
      }}>
      {props.children}
    </Text>
  );
};

export default MyAppText;
