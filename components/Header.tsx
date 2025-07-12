    import { View, Text,SafeAreaView ,Pressable, TextInput} from 'react-native'
    import React from 'react'
    import { HStack } from './ui/hstack';
    import { FaAlignJustify } from "react-icons/fa";
    import { Avatar,AvatarBadge,AvatarFallbackText,AvatarImage } from './ui/avatar';
    const Header = ({ onMenuPress }: {onMenuPress: () => void}) => {
    return (
        <SafeAreaView>
            <HStack className='flex items-center justify-between p-4 bg-gray-400'>
                <Pressable onPress={onMenuPress}>
                    <Text>
                        <FaAlignJustify />
                    </Text>
                </Pressable>
                <HStack>
                    <TextInput className='rounded-2xl bg-white w-[300px] p-3 mr-7' placeholder='Search stores, sales, sales ids, or products' />
                    <Avatar size="md">
                        <AvatarFallbackText>Jane Doe</AvatarFallbackText>

                        <AvatarImage
                            source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
        />
        <AvatarBadge />
        </Avatar>
            </HStack>
            </HStack>
        </SafeAreaView>
    )
    }

    export default Header