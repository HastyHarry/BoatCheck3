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

export default function PhotoPicker({ onImagesSelected }) {
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
            <View style={styles.swipeContainer}>
                {/* Фон с иконкой удаления */}
                <View style={localStyles.deleteBackground}>
                    {/* <Card>
                        <Card.Cover source={{ uri: photoUri }} style={styles.imagePreview} />
                    </Card> */}

                    <MaterialCommunityIcons name="trash-can-outline" size={30} color="#fff" />
                    <Text style={localStyles.deleteText}>Delete</Text>
                </View>

                {/* Свайпаемый контент */}
                <GestureDetector gesture={panGesture}>
                    <AnimatedView style={[styles.card, animatedStyle]}>
                        <Card>
                            <Card.Cover source={{ uri: photoUri }} style={styles.imagePreview} />
                        </Card>
                    </AnimatedView>
                </GestureDetector>
            </View>
        );
    };

    return (
        <View style={styles.photoContainer}>
            {photos.map((photoUri, index) => (
                <SwipeablePhoto key={index} photoUri={photoUri} />
            ))}
            <TouchableOpacity onPress={takePhoto} style={styles.imagePlaceholder}>
                <Card style={localStyles.addPhotoCard} onPress={takePhoto}>
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
        width: 100,
        backgroundColor: '#ff4d4f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 9,
        marginBottom: 8,
    },
    deleteText: {
        color: '#fff',
        marginTop: 5,
        fontSize: 12,
    },
    addPhotoCard: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        marginVertical: 10,
        borderRadius: 16,
        backgroundColor: '#f0f0f0',
    },

    addPhotoContent: {
        alignItems: 'center',
    },

    addPhotoText: {
        marginTop: 8,
        fontSize: 16,
        color: 'gray',
    },
});
