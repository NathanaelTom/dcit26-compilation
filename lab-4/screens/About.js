//Aterado, Nathanael Tom 
//Baloy, AnJoeNhil
//Lat, Edwin
//3-1
import React from "react";
import {View, Text, StyleSheet, Button, ImageBackground, Image,ScrollView} from "react-native";
import {globalStyles} from '../Style/global';

const About  =({navigation}) =>{
  return (
    <ScrollView>
     <View style={globalStyles.container}>
          <View style={globalStyles.imgOne}>
           <Text style={globalStyles.titleStyle}> BACKGROUND </Text>
           <Text style={globalStyles.infoStyle}> Early Life </Text>
           <Image style={{ height: 200, width: 350, marginVertical: 0}}  source={require('../assets/che-cos-e-fortuna-incontrare-caso-eiichiro-oda-papa-one-piece-resort-v4-427630.jpg')}/>
           <Text style={globalStyles.infoStyleOne}>         Eiichiro Oda was born on January 1, 1975 in Kumamoto, Japan. He said that at age four he resolved to become a manga artist in order to avoid having to get a "real job". His biggest influence is Akira Toriyama and his series Dragon Ball. He recalls that his interest in pirates was probably sparked by the popular TV animation series titled Vicky the Viking. He submitted a character named Pandaman for Yudetamago's classic wrestling manga Kinnikuman. Pandaman was not only used in a chapter of the manga but would later return as a recurring cameo character in Oda's own works.  </Text>           
            <Text style={globalStyles.infoStyleOne}>        At the age of 17, Oda submitted his work Wanted! and won several awards, including second place in the coveted Tezuka Award (He was called Kikondo Tsukihimizu, that means roughly Thufrisat Montuewed (Japanese surnames are usually before first name)). That got him into a job at the Weekly Shōnen Jump magazine, where he originally worked as assistant to Shinobu Kaitani's series Suizan Police Gang before moving to Masaya Tokuhiro on Jungle King Tar-chan and Mizu no Tomodachi Kappaman, which gave him an unexpected influence on his artistic style. At the age of 19, he began working as an assistant to Nobuhiro Watsuki on Rurouni Kenshin, before winning the Hop Step Award for new manga artists. Watsuki credits Oda for helping create the character Honjō Kamatari who appears in Rurouni Kenshin.
            During this time, Oda drew two pirate-themed one-shot stories called "Romance Dawn", which were published in Akamaru Jump and Weekly Shōnen Jump respectively in late 1996. "Romance Dawn" featured Monkey D. Luffy as the protagonist, who then became the protagonist of One Piece. </Text>
            
           <Button color="#EF0B5A" title= "Back to Profile" onPress={()=>navigation.goBack()}/>

          </View>
      
    </View>  
    </ScrollView>
  );
}
export default About;
