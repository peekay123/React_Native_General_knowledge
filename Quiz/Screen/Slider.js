import React,{Component}from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

class Slider extends Component {
    constructor(props) {
      super(props);
      this.state = {
        images: [ 
          'https://www.gobhutantours.com/wp-content/uploads/2019/06/Kings-of-Bhutan.jpg',
          'http://cache.boston.com/universal/site_graphics/blogs/bigpicture/bhutan_11_07/b01_16975043.jpg',
          'https://scontent.fpbh1-1.fna.fbcdn.net/v/t39.30808-6/280500016_550096063154006_189333869758848567_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7J6lFSjldxkAX9uijYK&_nc_ht=scontent.fpbh1-1.fna&oh=00_AT9Bt0a7r2I0kiAXTVxxxIIFbqTY2Exdfo6PC3D4NOKDQg&oe=62B41124',
          'https://scontent.fpbh1-1.fna.fbcdn.net/v/t39.30808-6/268791651_10159528665688260_384911585697423477_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=oYQRz5yzZy0AX8uismo&_nc_ht=scontent.fpbh1-1.fna&oh=00_AT9uF1JpQZEzwgn3TH7xfpmkH__zn2DcU2FYZEKYd6yu2Q&oe=62B4E91B',
          'https://www.andbeyond.com/wp-content/uploads/sites/5/crane-festival-bhutan1.jpg',
          'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/4evi9wu8r6cvz5ozg03ky58fhib2_1578732880_Khangkhu_Lhakhang1.jpg',
          'http://worldkings.org/Userfiles/Upload/images/gho.jpg',
          'https://www.nepalhighlandtreks.com/uploads/articles/images/The-takin-is-the-national-animal-of-Bhutan.jpg',
          'https://i.pinimg.com/originals/c2/8d/e7/c28de7d9f5bdbdc401c7907c18c152b8.jpg',
        ]
      };
    }
    render() {
      return (
        <View  style={styles.container}>
           <View>
          <SliderBox 
            style={{width:'100%',height:'100%',}}
            autoplay={true}
            loop={true}
            images={this.state.images}
          />
          </View>
  
        </View>
       
      );
    }
  }
  export default Slider;
  const styles = StyleSheet.create({
    container: {
  
      alignItems:'flex-start',
      height:200,
    }
  });