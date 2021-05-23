import React from 'react';
import {Button, Modal, View, StyleSheet, Text,Image, ScrollView} from 'react-native';

const SampleModal = props => {
  return (
    
      <Modal visible = {props.visible} animationType = 'fade'>
        <ScrollView>
          <View>
        <Image style = {styles.imageStyle} source = {{uri: 'https://i.pinimg.com/originals/fe/d3/02/fed302f8272994d79fa3e9ef7c2b17da.gif'}}/>
      </View>
          <View style = {styles.container}>

            <Text style = {styles.header}>The Age of Ancient</Text>
            <Text style = {styles.textStyle}>In the Age of Ancients, the world was unformed, shrouded by fog. A land of gray crags, Archtrees and Everlasting Dragons.{'\n \n'}In the beginning there was no such thing as life or death. The land was a constant drab gray, ruled by immortal dragons. It is unknown whether or not the primordial serpents existed in this epoch.</Text>

          <Text style = {styles.header}>Discovery of the First Flame</Text>
          <Text style = {styles.textStyle}>But then there was fire, and with fire came disparity. Heat and cold, life and death, and of course, light and dark. Then from the dark, they came, and found the Souls of Lords within the flame.{'\n\n'}With fire came the division of things and with it, strange living beings that were not dragons emerged from the dark. Giants, relatives of The Archtrees, and smaller races as well. Three such beings found the Souls of Lords within the flame. They gained inmense amounts of power, making them capable of defeating the dragons, and so they fought to change the order of the world.{'\n\n'}One Soul was taken by the Gravelord Nito, first of the dead. The second Soul was found by the Witch of Izalith and her daughters of Chaos. The last was taken by Gwyn, the Lord of Sunlight, and his faithful knights. However, what remained when the rest was taken was a peculiar soul, known as the Dark Soul, found by the easily forgotten Furtive Pigmy.
</Text>

          <Text style = {styles.header}>War against the Ancient Dragons</Text>
          <Text style = {styles.textStyle}>With the strength of Lords, they challenged the Dragons. Gwyn's mighty bolts peeled apart their stone scales. The Witches weaved great firestorms. Nito unleashed a miasma of death and disease. And Seath the Scaleless betrayed his own, and the Dragons were no more.{'\n\n'}Nito, the Witch of Izalith, and Gwyn became Lords with the power of the flame, and waged war on the dragons. To aid in their battle, Gwyn used the power of the sun to spawn the first miracles to rid the dragons of their scales, source of their immortality, and the Witch of Izalith created the first pyromancies from sorcery and burned the Archtrees, the ancestral homes of the Archdragons. The Lords, with the help of the dragon Seath the Scaleless, defeated the dragons in great dragon hunts and won the war, driving the dragons to the brink of extinction, such that only their distant relatives remained.{'\n\n'}Seath was the first mortal dragon, born without scales, which were the dragons' source of immortality. He became fearful of death, and sided with Gwyn. Seath was a brilliant academic, and focused on research, which spawned the first Sorceries. </Text>

          <Text style = {styles.header}>The Age of Fire</Text>
          <Text style = {styles.textStyle}>With the Dragons defeated, the Lords settled their own kingdoms. Nito ventured deep into the Catacombs where he rewarded his servants and created the Finito and Milfanito and begun offering his Fire to the strange force he had found, Death, and sought to spread it, serving to administer death to all manner of beings. The Witch of Izalith and her daughters returned to Izalith in order to study their Flame Sorceries, eventually birthing Pyromancy, the creation and control of the Flame within The Soul itself. Gwyn settled at the pinnacle of all of their kingdoms in the golden mountain city, Anor Londo, where he and his brethren proclaimed themselves Gods. At this time, Gwyn gives Seath the title of Duke and grants him the Archives for his research, where he begins studying the secrets of immortality.{'\n\n'}Little is heard or known about the Pygmy, only that he is the forebearer of all of humanity, the smallest of the races from the dawn of time. After his descendants reproduced, through many generations, a large number of human kingdoms arose, and humans began learning sorceries, miracles and pyromancies. It is speculated that the human's affinity for magic is attested to the power of the Dark Soul fragments scattered within all mankind. {'\n\n'} </Text>

          <Text style = {styles.header}>Fading of the First Flame</Text>
          <Text style = {styles.textStyle}>Eventually, it came to pass that the flames began to fade, and with it, the power of The Gods and all that drew power from them, such that one day, they would vanish completely. However, it was such that Fire's opposite, Dark, and the race born of it, The Humans, did not wane, but grew in power as Fire faded, so that it would one day be that only Dark would remain. The Witch of Izalith decided to try and recreate the First Flame in Izalith. This went horribly wrong, and the Chaos Flame and Bed Of Chaos were born, both of which were a twisted mockery of the First Flame, warping the Witches of Izalith into hideous forms and giving birth to the demons. The Witch of Izalith's failure births pyromancy as it exists in the games, and destroys Izalith, rotting the land above it.. Only ruins, chaos and fire remain where Izalith once stood. The only unaffected survivor of this event is Quelana, who passes the knowledge of pyromancy to her first pupil and it extends to the Great Swamp. Many excursions were led against these demons by Gwyn's knights.{'\n\n'}Gwyn, in order to avoid the end of the Age of Fire, decided to offer his own body and power as sacrifice to the First Flame. Leading half his army and leaving The Silver Knights to guard Anor Londo, Gwyn set out on a great journey to link the fire, ultimately ending at The Kiln of The First Flame, where Gwyn set fire to his own mighty soul and reignited The First Flame, burning himself and his army away, leaving only husks in the form of The Black Knights and himself, Lord of Cinder, and restoring The Age of Fire. This offered a temporary solution, but the fire again slowly began to fade.{'\n\n'}A solution eventually presented itself in the form of the Undead, humans with the power of Dark that could not die.</Text>

          
            <Button 
              title = 'Close' 
              color = 'red'
              onPress = {props.onClose} 
              />
          </View>
        </ScrollView>

      </Modal>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderWidth: 4,
    borderColor:'gold',
    padding: 2  
  },

  textStyle: {
    fontSize: 12,
    textAlign: 'justify',
    margin: 10
  },

  header: {
    fontSize:15,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10
  },

  imageStyle: {
    width: 200,
    height: 200
  },
  imageStyles: {
    width: 400,
    height: 200
  }
});


export default SampleModal;
