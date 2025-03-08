import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Alert, Image, Modal } from 'react-native';
import { Card, Text, IconButton, Divider } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const gapBetweenImages = 8;
const numColumns = 3;

export default function PhotoPicker({ title, onImagesSelected, theme, onValueChange, photos }) {
    const defaultCardWidth = theme.workingAreaWidth;
    const cardSideSize = Math.floor((defaultCardWidth - gapBetweenImages * (numColumns + 1)) / numColumns);
    const gridWidth = cardSideSize * numColumns + gapBetweenImages * (numColumns + 1);
    const marginLeft = 0;

    const [selectedPhoto, setSelectedPhoto] = useState(null); // For preview
    const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility

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
                const updatedPhotos = [...photos, uri];
                onImagesSelected && onImagesSelected(updatedPhotos);
                onValueChange && onValueChange(updatedPhotos); // Highlighted change
            }
        } catch (error) {
            console.error('Error while taking photo:', error);
        }
    };

    const handleDeletePhoto = (photoUri) => {
        Alert.alert(
            'Delete',
            'Are you sure you want to delete?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        const updatedPhotos = photos.filter((uri) => uri !== photoUri);
                        onImagesSelected && onImagesSelected(updatedPhotos);
                        onValueChange && onValueChange(updatedPhotos); // Highlighted change
                    },
                },
            ]
        );
    };

    const handlePhotoPress = (photoUri) => {
        setSelectedPhoto(photoUri);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedPhoto(null);
    };

    return (
        <View>
            <Divider></Divider>
                <Text variant="titleLarge" style={[{
                    fontSize: 18,
                    fontWeight: 'light',
                    alignItems: "flex-start",
                    color: theme.colors.primary,
                    marginLeft: 16
                }]}>
                    {title}
                </Text>
            
            <View style={[localStyles.centeredContainer, { marginLeft: marginLeft, marginBottom:8 }, { alignItems: 'center' }]}>
                <View style={[localStyles.gridContainer, { width: "100%" }]}>
                    {photos.map((photoUri, index) => (
                        <TouchableOpacity
                            key={index}
                            onLongPress={() => handleDeletePhoto(photoUri)}
                            onPress={() => handlePhotoPress(photoUri)}
                            style={localStyles.cardWrapper}
                        >
                            <Card style={[localStyles.card, { width: cardSideSize, height: cardSideSize }]}>
                                <Image
                                    source={{ uri: photoUri }}
                                    style={[localStyles.imagePreview, { width: "100%", height: "100%" }]}
                                />
                            </Card>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity onPress={takePhoto} style={localStyles.cardWrapper}>
                        <Card style={[localStyles.card, { width: cardSideSize, height: cardSideSize }]}>
                            <Card.Content style={localStyles.addPhotoContent}>
                                <MaterialCommunityIcons name="camera" size={50} color="gray" />
                                <Text style={localStyles.addPhotoText}>Add Photo</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={closeModal}
            >
                <View style={[localStyles.modalBackground, ]}>
                    <TouchableOpacity style={localStyles.modalCloseArea} onPress={closeModal} />
                    <View style={[localStyles.modalContent,{backgroundColor: theme.colors.secondary}]}>
                        <Image source={{ uri: selectedPhoto }} style={localStyles.fullImage} resizeMode='cover' />
                        <IconButton
                            icon="close"
                            size={28}
                            style={localStyles.closeButton}
                            onPress={closeModal}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const localStyles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingEnd: 0,
        paddingStart: 0
    },
    cardWrapper: {
        marginBottom: gapBetweenImages / 2,
        marginTop: gapBetweenImages / 2,
        marginEnd: gapBetweenImages / 2,
        marginStart: gapBetweenImages / 2
    },
    card: {
        overflow: 'hidden',
        borderRadius: 12,
        elevation: 4,
        margin: 0
    },
    imagePreview: {
        resizeMode: 'cover',
        borderRadius: 12,
    },
    addPhotoCard: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        padding: 0,
        margin: 0,
        overflow: 'hidden',
    },
    addPhotoContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    addPhotoText: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
    },
    centeredContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCloseArea: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    modalContent: {
        width: '90%',
        height: '80%',
        borderRadius: 16,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
    },
    fullImage: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    }
});