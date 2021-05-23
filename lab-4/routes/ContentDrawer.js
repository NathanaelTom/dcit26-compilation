import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import {
  View,
  Container,
  Content,
  Header,
  Right,
  Button,
  ListItem,
  Icon,
  Left,
  Thumbnail,
  Body,
  H3,
  Text,
  Image,
  TouchableOpacity,
  Footer
} from 'native-base';



function Sidebar({progress,...props}) {
  return (
    <Container style={{backgroundColor: 'pink'}} >
      <Header style={{backgroundColor: 'pink'}} />
      <Content>
        <ListItem thumbnail>
          <Body> 
            <H3>Menu</H3>
          </Body>
        </ListItem>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props}/>
        </DrawerContentScrollView>
      </Content>
    </Container>
    
  );
}

export default Sidebar;


