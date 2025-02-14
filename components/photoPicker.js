import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';
import * as ImagePicker from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles';

export default function PhotoPicker({ onImageSelected }) {
    const [photo, setPhoto] = useState(null);

    const pickImage = () => {
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 0.8,
                includeBase64: false,
            },
            (response) => {
                if (!response.didCancel && !response.error && response.assets) {
                    setPhoto(response.assets[0].uri);
                    if (onImageSelected) {
                        onImageSelected(response.assets[0].uri);
                    }
                }
            }
        );
    };

    return (
        <View style={styles.photoContainer}>
            {photo ? (
                <Image source={{ uri: photo }} style={styles.imagePreview} />
            ) : (
                <TouchableOpacity onPress={pickImage} style={styles.imagePlaceholder}>
                    <MaterialCommunityIcons name="camera" size={50} color="gray" />
                    <Text>Select a Photo</Text>
                </TouchableOpacity>
            )}
            {photo && (
                <Button mode="contained" onPress={() => setPhoto(null)} style={styles.button}>
                    Remove Photo
                </Button>
            )}
        </View>
    );
}
