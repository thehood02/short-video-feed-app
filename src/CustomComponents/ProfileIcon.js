import {Image} from "react-native";

import img0 from "../../assets/icons/profiles/Group-0.png";
import img1 from "../../assets/icons/profiles/Group-4.png";
import img2 from "../../assets/icons/profiles/Group-1.png";
import img3 from "../../assets/icons/profiles/Group-2.png";
import img4 from "../../assets/icons/profiles/Group-3.png";
import img5 from '../../assets/icons/profiles/Group-5.png';

const images = [img0, img1, img2, img3, img4, img5];

const ProfileIcon = () => {

    const randomNumber = () => {
      return Math.floor(Math.random() * images.length);
    }

    return <Image
        resizeMode="contain"
        source={images[randomNumber()]}
        style={{height: 24, width: 24}}
    />
}

export default ProfileIcon;