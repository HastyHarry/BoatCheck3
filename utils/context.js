import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS_LIST = 'keysList';

const addKeyToList = async (key) => {
    try {
        const existingKeysJson = await AsyncStorage.getItem(KEYS_LIST);
        const existingKeys = existingKeysJson != null ? JSON.parse(existingKeysJson) : [];
        const newKeys = [...existingKeys, key];
        await AsyncStorage.setItem(KEYS_LIST, JSON.stringify(newKeys));
    } catch (e) {
        console.error('Error updating keys list', e);
    }
};

const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        await addKeyToList(key);
    } catch (e) {
        console.error('Error saving data', e);
    }
};

const getAllData = async () => {
    try {
        const keysJson = await AsyncStorage.getItem(KEYS_LIST);
        const keys = keysJson != null ? JSON.parse(keysJson) : [];
        const stores = await AsyncStorage.multiGet(keys);
        return stores.map(([key, value]) => ({ key, value: JSON.parse(value) }));
    } catch (e) {
        console.error('Error retrieving all data', e);
    }
};

export const clearAllData = async (setAllData) => {
    try {
        // Get the list of keys you're managing
        const keysJson = await AsyncStorage.getItem(KEYS_LIST);
        const keys = keysJson != null ? JSON.parse(keysJson) : [];

        // Remove each key-value pair
        await AsyncStorage.multiRemove(keys);

        // Clear the list of keys
        await AsyncStorage.removeItem(KEYS_LIST);

        // Optionally, clear the local state
        setAllData([]);
        
        console.log('All data cleared');
    } catch (e) {
        console.error('Error clearing data', e);
    }
};

export const handleSave = async (key, dataToStore) => {
    try {
        await storeData(key, dataToStore)
        console.log('Data saved. Key:', key, " data:", dataToStore);
    }
    catch(err) {console.log('ERROR',err)}
}

export const handleLoadAll = async (setDataBuffer) => {
    const data = await getAllData();
    console.log('handleLoadAll', data)
    setDataBuffer(data);
}

