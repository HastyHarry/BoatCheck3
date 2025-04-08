import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Store the root navigation route name
  const [rootRouteName, setRootRouteName] = useState(null);
  
  // Current active inspection state
  const [activeInspection, setActiveInspection] = useState({
    type: null, // 'sailboat', 'catamaran', etc.
    data: {
      metadata: {
        startTime: null,
        name: '',
        isCompleted: false
      }
    },
    isViewMode: false // Flag to indicate if inspection is being viewed from history
  });
  
  // Store previous active inspection when viewing history
  const [previousActiveInspection, setPreviousActiveInspection] = useState(null);
  
  // List of saved inspections
  const [savedInspections, setSavedInspections] = useState([]);

  // Load saved inspections from storage
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

  // Get or create an inspection of specific type
  const getOrCreateInspection = (type, name = '', startingPoint) => {
    // Check if we already have an active inspection of this type
    if (activeInspection.type === type) {
      console.log('Using existing inspection of type:', type);
      return activeInspection; // Return the existing inspection
    }
    
    // Otherwise, create a new inspection
    console.log('Creating new inspection of type:', type);
    const newInspection = {
      type: type,
      data: {
        metadata: {
          startTime: new Date().toISOString(),
          name: name,
          inspectionType: type,
          isCompleted: false,
          startingPoint, // This will store the initial screen ID
        }
      }
    };
    
    setActiveInspection(newInspection);
    return newInspection;
  };

  // Update a field in the current active inspection WITHOUT triggering setActiveInspection
  const updateField = (key, value) => {

    // Instead of setting the entire state, just update the specific field
    // This will prevent full re-renders and keyboard dismissal
    
    setActiveInspection(prev => {
      const newData = {
        ...prev.data,
        [key]: value,
      };
      
      return {
        ...prev,
        data: newData
      };
    });
  };

  // Save the completed active inspection
  const saveInspection = async () => {
    try {
      if (!activeInspection.type) {
        console.error('No active inspection type to save');
        return false;
      }
      
      // Create a copy of current state with updated metadata
      const completedInspection = {
        ...activeInspection,
        data: {
          ...activeInspection.data,
          metadata: {
            ...activeInspection.data.metadata,
            isCompleted: true,
            completionTime: new Date().toISOString()
          }
        },
        id: Date.now().toString() // Unique identifier for the inspection
      };
      
      // Add to the list of saved inspections
      const updatedInspections = [...savedInspections, completedInspection];
      await AsyncStorage.setItem('savedInspections', JSON.stringify(updatedInspections));
      setSavedInspections(updatedInspections);
      
      // Clear the current active inspection
      setActiveInspection({
        type: null,
        data: {
          metadata: {
            startTime: null,
            name: '',
            isCompleted: false
          }
        },
        isViewMode: false
      });
      
      return true; // Return success
    } catch (error) {
      console.error('Error saving inspection:', error);
      return false; // Return error
    }
  };
  
  // Get list of saved inspections, optionally filtered by type
  const getSavedInspections = (type = null) => {
    if (type) {
      return savedInspections.filter(inspection => inspection.type === type);
    }
    return savedInspections;
  };
  
  // Load a saved inspection into the active state
  const loadInspection = (inspectionId) => {
    const inspection = savedInspections.find(insp => insp.id === inspectionId);

    if (inspection) {
      // Save the current inspection state before loading the historical one
      setPreviousActiveInspection(activeInspection);
      
      setActiveInspection({
        ...inspection,
        isViewMode: true // Set to view mode when loading from history
      });
      return true;
    }
    return false;
  };
  
  // Restore the previous active inspection when leaving history view
  const restorePreviousInspection = () => {
    if (previousActiveInspection) {
      setActiveInspection(previousActiveInspection);
      setPreviousActiveInspection(null);
      return true;
    }
    return false;
  };

  // Delete a saved inspection
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

  // Clear all data
  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
      setActiveInspection({
        type: null,
        data: {
          metadata: {
            startTime: null,
            name: '',
            isCompleted: false
          }
        }
      });
      setSavedInspections([]);
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  };

  // Set starting point for navigation (to be used when a section is opened)
  const setStartingPoint = (screenId) => {
    if (activeInspection.type) {
      setActiveInspection(prev => ({
        ...prev,
        data: {
          ...prev.data,
          metadata: {
            ...prev.data.metadata,
            startingPoint: screenId
          }
        }
      }));
    }
  };

  return (
    <GlobalContext.Provider value={{ 
      activeInspection, 
      updateField, 
      clearAllData,
      getOrCreateInspection,
      saveInspection,
      getSavedInspections,
      loadInspection,
      restorePreviousInspection,
      deleteInspection,
      savedInspections,
      rootRouteName,
      setRootRouteName,
      setStartingPoint
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);