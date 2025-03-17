import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Текущее состояние инспекции
  const [state, setState] = useState({
    // checkboxObj: { value: false },
    // Добавим метаданные для текущей инспекции
    metadata: {
      startTime: null,
      name: '',
      isCompleted: false
    }
  });
  
  // Список сохраненных инспекций
  const [savedInspections, setSavedInspections] = useState([]);

  // Загрузка текущего состояния
  useEffect(() => {
    const loadState = async () => {
      try {
        const storedState = await AsyncStorage.getItem('appState');
        if (storedState) {
          setState(JSON.parse(storedState));
        }
      } catch (error) {
        console.error('Error loading state:', error);
      }
    };

    loadState();
  }, []);

  // Загрузка списка сохраненных инспекций
  useEffect(() => {
    const loadSavedInspections = async () => {
      try {
        const inspectionsData = await AsyncStorage.getItem('savedInspections');
        if (inspectionsData) {
          setSavedInspections(JSON.parse(inspectionsData));
        }
      } catch (error) {
        console.error('Error loading saved inspections:', error);
      }
    };

    loadSavedInspections();
  }, []);

  // Сохранение текущего состояния
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

  // Обновление поля в состоянии
  const updateField = (key, value) => {
    setState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  // Начать новую инспекцию
  const startNewInspection = (name = '') => {
    setState({
      // checkboxObj: { value: false },
      metadata: {
        startTime: new Date().toISOString(),
        name: name,
        isCompleted: false
      }
    });
  };

  // Сохранить завершенную инспекцию
  const saveInspection = async () => {
    try {
      // Создаем копию текущего состояния с обновленными метаданными
      const completedInspection = {
        ...state,
        metadata: {
          ...state.metadata,
          isCompleted: true,
          completionTime: new Date().toISOString()
        },
        id: Date.now().toString() // Уникальный идентификатор для инспекции
      };
      
      // Добавляем в список сохраненных инспекций
      const updatedInspections = [...savedInspections, completedInspection];
      await AsyncStorage.setItem('savedInspections', JSON.stringify(updatedInspections));
      setSavedInspections(updatedInspections);
      
      // Очищаем текущее состояние для новой инспекции
      startNewInspection();
      
      return true; // Возвращаем успешный результат
    } catch (error) {
      console.error('Error saving inspection:', error);
      return false; // Возвращаем ошибку
    }
  };
  
  // Получить список сохраненных инспекций
  const getSavedInspections = () => {
    return savedInspections;
  };
  
  // Загрузить сохраненную инспекцию в текущее состояние (для просмотра)
  const loadInspection = (inspectionId) => {
    const inspection = savedInspections.find(insp => insp.id === inspectionId);

    console.log('Loaded inspection:', {inspection,inspectionId});

    if (inspection) {
      setState(inspection);
      return true;
    }
    return false;
  };

  // Удалить сохраненную инспекцию
  const deleteInspection = async (inspectionId) => {
    try {
      const updatedInspections = savedInspections.filter(insp => insp.id !== inspectionId);
      await AsyncStorage.setItem('savedInspections', JSON.stringify(updatedInspections));
      setSavedInspections(updatedInspections);
      return true;
    } catch (error) {
      console.error('Error deleting inspection:', error);
      return false;
    }
  };

  // Очистка всех данных
  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
      setState({
        checkboxObj: { value: false },
        metadata: {
          startTime: null,
          name: '',
          isCompleted: false
        }
      });
      setSavedInspections([]);
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  };

  return (
    <GlobalContext.Provider value={{ 
      state, 
      updateField, 
      clearAllData,
      startNewInspection,
      saveInspection,
      getSavedInspections,
      loadInspection,
      deleteInspection,
      savedInspections
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);