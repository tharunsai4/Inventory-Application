import { Pressable, View} from 'react-native'
import React from 'react';
import {Text} from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { useState } from "react";
import { Button, ButtonText } from "@/components/ui/button"
import {Drawer, DrawerBackdrop,DrawerBody, DrawerFooter,DrawerContent,DrawerHeader} from "@/components/ui/drawer"
import { B } from '@expo/html-elements';
const DrawerDemo = ({isOpen,onClose}: {isOpen: boolean, onClose: () => void}) => {
const listServices= [
  { id: 1, name: "Dashboard" },
  { id: 2, name: "Sales" },
  { id: 3, name: "Products" },
  { id: 4, name: "Stores" },
];

const listItems = listServices.map((service,index) =>(
  <Pressable key={index} className='p-9 m-2 hover:bg-gray-200'>
    <Text>{service.name}</Text>
  </Pressable>
))
  return (
    
     <Drawer
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        anchor="left"
      >
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <Heading size="3xl">Menu</Heading>
          </DrawerHeader>
          <DrawerBody>
          
              {listItems}
            
          </DrawerBody>
          <DrawerFooter>
            <Button
              onPress={() => {
                onClose()
              }}
              className="flex-1"
            >
              <ButtonText>Close</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}

export default DrawerDemo;