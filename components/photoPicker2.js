import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, Alert, Image } from 'react-native';
import { Card } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

export default function PhotoPicker({ onImagesSelected, theme }) {
    const defaultCardWidth = theme.cardWidth;
    const cardHeight = Math.ceil(defaultCardWidth / 1)
    const cardWidth = Math.ceil(defaultCardWidth / 1.5)

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
                mediaTypes: ImagePicker.MediaTypes,
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
        Alert.alert(
            'Удалить фото',
            'Вы уверены, что хотите удалить это фото?',
            [
                { text: 'Отмена', style: 'cancel' },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: () => {
                        setPhotos((prevPhotos) => {
                            const updatedPhotos = prevPhotos.filter((uri) => uri !== photoUri);
                            onImagesSelected && onImagesSelected(updatedPhotos);
                            return updatedPhotos;
                        });
                    },
                },
            ]
        );
    };

    return (
        <View>
            <View style={[localStyles.gradientWrapper]}>
                {/* Левый градиент */}
                <LinearGradient
                    colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={[localStyles.gradient, localStyles.leftGradient]}
                    pointerEvents="none"
                />

                {photos.length !== 0
                    ? (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={localStyles.scrollContainer}>
                            {photos.map((photoUri, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onLongPress={() => handleDeletePhoto(photoUri)}
                                    style={localStyles.cardWrapper}
                                >
                                    <Card style={[localStyles.card, { width: cardWidth, height: cardHeight }]}>
                                        <Image
                                            source={{ uri: photoUri }}
                                            style={[localStyles.imagePreview, { width: cardWidth, height: cardHeight }]}
                                        />
                                    </Card>
                                </TouchableOpacity>
                            ))}

                            <TouchableOpacity onPress={takePhoto} style={localStyles.cardWrapper}>
                                <Card style={[localStyles.addPhotoCard, { width: 120, height: cardHeight }]}>
                                    <Card.Content style={localStyles.addPhotoContent}>
                                        <MaterialCommunityIcons name="camera" size={50} color="gray" />
                                        <Text style={localStyles.addPhotoText}>Add Photo</Text>
                                    </Card.Content>
                                </Card>
                            </TouchableOpacity>
                        </ScrollView>
                    )
                    : (<View style={[{
                        justifyContent: 'center',         // Центрируем по вертикали
                        alignItems: 'center',
                    }]}>
                        <TouchableOpacity onPress={takePhoto} style={[localStyles.cardWrapper, { height: 120 }]}>
                            <Card style={[localStyles.card, { width: cardWidth, height: 120, backgroundColor: 'transparent', borderColor: 'transparent' }]}>
                                <Card.Content style={[localStyles.addPhotoContent, { justifyContent: 'center', alignItems: 'center' }]}>
                                    <MaterialCommunityIcons name="camera" size={50} color="gray" />
                                    <Text style={localStyles.addPhotoText}>Add Photo</Text>
                                </Card.Content>
                            </Card>
                        </TouchableOpacity>
                    </View>)
                }

                {/* Правый градиент */}
                <LinearGradient
                    colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={[localStyles.gradient, localStyles.rightGradient]}
                    pointerEvents="none"
                />
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    gradientWrapper: {
        position: 'relative',
        // paddingHorizontal: 0, // Отступы для градиентов
    },
    gradient: {

        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 16, // Ширина размытия
        zIndex: 1,
    },
    leftGradient: {
        left: 0,
    },
    rightGradient: {
        right: 0,
    },
    scrollContainer: {
        paddingLeft: 16,
        paddingVertical: 8,
    },
    cardWrapper: {
        marginRight: 8,
    },
    card: {
        overflow: 'hidden',
        borderRadius: 12,
        elevation: 4,
    },
    imagePreview: {
        resizeMode: 'cover',
    },
    addPhotoContent: {

        flexDirection: 'column',          // Контент будет выстроен вертикально
        justifyContent: 'center',         // Центрируем по вертикали
        alignItems: 'center',             // Центрируем по горизонтали
        height: '100%',
    },
    addPhotoText: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
    },
    addPhotoCard: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: 'transparent',   // Сделаем карточку прозрачной
        borderColor: 'transparent',       // Убираем рамку
        padding: 0,                       // Убираем отступы
        margin: 0,                        // Убираем внешние отступы
        overflow: 'hidden',               // Чтобы ничего не выходило за пределы
    },
});