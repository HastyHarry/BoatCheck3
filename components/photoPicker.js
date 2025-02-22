import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles';

export default function PhotoPicker({ onImageSelected }) {
    const [photo, setPhoto] = useState(null);
    console.log('photo', photo)

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            // const { statusLib } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access the camera is required!');
            }
            // if (statusLib !== "granted") {
            //     alert('Permission to access photo lib is required!');
            // }
        })();
    }, []);

    const takePhoto = async () => {
        try {

            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaType, // Используем ImagePicker.MediaType вместо устаревшего MediaTypeOptions
                quality: 0.8,
            });

            console.log('RESULT IMAGE', result)

            if (!result.canceled) {

                const uri = result.assets[0].uri;
                console.log('resultURI', uri)
                setPhoto(uri);
                onImageSelected && onImageSelected(uri);
            }
        } catch (error) {
            console.error('Error while taking photo:', error);
        }
    };

    return (
        <View style={styles.photoContainer}>
            {photo ? (
                <View style={styles.imageWrapper}>
                    <Card>
                        <Card.Cover source={{ uri: photo }} style={styles.imagePreview} />
                    </Card>
                    {/* <Text style={styles.previewText}>Photo Attached</Text> */}
                </View>
            ) : (
                <TouchableOpacity onPress={takePhoto} style={styles.imagePlaceholder}>
                    <MaterialCommunityIcons name="camera" size={50} color="gray" />
                    <Text>Take a Photo</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}