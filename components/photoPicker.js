import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';

import { Card } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    runOnJS,
} from 'react-native-reanimated';

const AnimatedView = Animated.createAnimatedComponent(View);

export default function PhotoPicker({ onImagesSelected, theme }) {
    const cardWidth = theme.cardWidth
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access the camera is required!');
            }
        })();
    }, []);

    const takePhoto = async () => {
        try {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaType,
                quality: 0.8,
            });

            if (!result.canceled) {
                const uri = result.assets[0].uri;
                setPhotos((prevPhotos) => {
                    const updatedPhotos = [...prevPhotos, uri];
                    onImagesSelected && onImagesSelected(updatedPhotos);
                    return updatedPhotos;
                });
            }
        } catch (error) {
            console.error('Error while taking photo:', error);
        }
    };

    const handleDeletePhoto = (photoUri) => {
        setPhotos((prevPhotos) => {
            const updatedPhotos = prevPhotos.filter((uri) => uri !== photoUri);
            onImagesSelected && onImagesSelected(updatedPhotos);
            return updatedPhotos;
        });
    };

    const SwipeablePhoto = ({ photoUri }) => {
        const translateX = useSharedValue(0);
        const threshold = -100;

        const panGesture = Gesture.Pan()
            .onUpdate((event) => {
                translateX.value = event.translationX < 0 ? event.translationX : 0;
            })
            .onEnd(() => {
                if (translateX.value < threshold) {
                    runOnJS(handleDeletePhoto)(photoUri);
                } else {
                    translateX.value = withSpring(0);
                }
            });

        const animatedStyle = useAnimatedStyle(() => ({
            transform: [{ translateX: translateX.value }],
        }));

        return (
            <View >
                {/* Фон с иконкой удаления */}
                <View style={[localStyles.deleteBackground, {width:Math.abs(threshold)}]}>
                    <MaterialCommunityIcons name="trash-can-outline" size={30} color="#fff" />
                    <Text style={localStyles.deleteText}>Delete</Text>
                </View>

                {/* Свайпаемый контент */}
                <GestureDetector gesture={panGesture}>
                    <AnimatedView style={[ animatedStyle]}>
                        <Card style={localStyles.card}>
                            <Card.Cover source={{ uri: photoUri }} style={[localStyles.imagePreview, {width:theme.cardWidth+32, height:200}]} />
                        </Card>
                    </AnimatedView>
                </GestureDetector>
            </View>
        );
    };

    return (
        <View styles = {{padding:0}}>
            {photos.map((photoUri, index) => (
                <SwipeablePhoto key={index} photoUri={photoUri} />
            ))}
            <TouchableOpacity onPress={takePhoto} style={localStyles.imagePlaceholder}>
                <Card style={[localStyles.card, {width:theme.cardWidth}]} onPress={takePhoto}>
                    <Card.Content style={localStyles.addPhotoContent}>
                        <MaterialCommunityIcons name="camera" size={50} color="gray" />
                        <Text style={localStyles.addPhotoText}>Add Photo</Text>
                    </Card.Content>
                </Card>
                {/* <MaterialCommunityIcons name="camera" size={50} color="gray" /> */}
            </TouchableOpacity>
        </View>
    );
}

const localStyles = StyleSheet.create({
    deleteBackground: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#ff4d4f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 8,
        marginBottom: 8,
    },
    deleteText: {
        color: '#fff',
        marginTop: 5,
        fontSize: 12,
    },
    card: {
        overflow: 'hidden',
        // backgroundColor: theme.colors.surface,
        marginVertical: 8,
        borderRadius: 12,
        padding: 0,
        // shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center',
      },
    addPhotoContent: {
        alignItems: 'center',
    },
    addPhotoText: {
        fontSize: 16,
        color: 'gray',
    },
    // photoContainer: {
    //     alignItems: 'center',
    //     marginVertical: 0,
    // },
    imageWrapper: {
        alignItems: 'center',
        // marginTop: 10,
    },
    imagePreview: {
        // width: '100%', height: '100%',
        // width: 200,
        // height: 200,
        borderRadius: 12,
        resizeMode: 'cover',  // Или 'contain'
        // backgroundColor: '#eee',
        // margin: 0,                // Убирает лишние отступы
        // padding: 0,
    },
    previewText: {
        color: 'gray',
        fontSize: 14,
    },
    imagePlaceholder: {
        // width: 200,
        // height: 200,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#f0f0f0',
        // borderColor: '#ccc',
    },

});
