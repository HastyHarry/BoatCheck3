import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Создание контекста
export const GlobalContext = createContext();

// Провайдер контекста
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    checkboxObj: { value: false }, // Начальные значения
  });

  // Загрузка сохраненных значений при запуске приложения
  useEffect(() => {
    const loadState = async () => {
      try {
        const storedState = await AsyncStorage.getItem('appState');
        if (storedState) {
          setState(JSON.parse(storedState)); // Восстановление сохраненного состояния
        }
      } catch (error) {
        console.error('Error loading state:', error);
      }
    };

    loadState();
  }, []);

  // Сохранение состояния в AsyncStorage при каждом изменении
  useEffect(() => {
    const saveState = async () => {
      try {
        await AsyncStorage.setItem('appState', JSON.stringify(state));
      } catch (error) {
        console.error('Error saving state:', error);
      }
    };

    saveState();
  }, [state]);

  // Функция для обновления поля в состоянии
  const updateField = (key, value) => {
    setState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  // Функция для очистки всех данных
  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
      setState({});
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  };

  return (
    <GlobalContext.Provider value={{ state, updateField, clearAllData }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Пользовательский хук для использования контекста
export const useGlobalState = () => useContext(GlobalContext);