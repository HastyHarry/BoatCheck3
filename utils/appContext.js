import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    checkboxObj: { value: false }, // Default values
  });

  // ✅ Load stored values on app startup
  useEffect(() => {
    const loadState = async () => {
      try {
        const storedState = await AsyncStorage.getItem('appState');
        if (storedState) {
          setState(JSON.parse(storedState)); // Restores saved state
        }
      } catch (error) {
        console.error('Error loading state:', error);
      }
    };

    loadState();
  }, []);

  // ✅ Save state to AsyncStorage whenever it changes
  useEffect(() => {
    console.log('Saving state:', state);
    const saveState = async () => {
      try {
        await AsyncStorage.setItem('appState', JSON.stringify(state));
      } catch (error) {
        console.error('Error saving state:', error);
      }
    };

    saveState();
  }, [state]);

  // ✅ Ensure `updateField` still works
  const updateField = (key, value) => {
    setState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <GlobalContext.Provider value={{ state, updateField }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for using the context
export const useGlobalState = () => useContext(GlobalContext);