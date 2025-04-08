import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import CustomTextInput from '../components/textInput';
import DateInput from '../components/dateInput';
import CheckboxItem from '../components/checkboxItem';
import CounterCard from '../components/counterCard';
import PhotoPicker from '../components/photoPicker2';
import NaviTableOfContent from '../components/naviTableOfContent';
import NaviTitle from '../components/naviTitle';
import History from '../components/history';
import { useGlobalState } from './globalContext';

export const assignIds = (items, parentId = '', level = 0) => {
  return items.map((item, index) => {
    const id = `${parentId}${item.title.replace(/\s+/g, '')}${index}`;
    const newItem = { ...item, id };

    if (item.items) {
      newItem.items = assignIds(item.items, `${id}_`, level + 1);
    }

    return newItem;
  });
};

export const parseScreen = (screenConfig, theme, navigation) => {
  const { 
    activeInspection, 
    updateField, 
    getOrCreateInspection, 
    saveInspection,
    rootRouteName,
    restorePreviousInspection
  } = useGlobalState();
  

  const state = activeInspection.data || {};

  const checkEmail = (string) => !(string.includes("@") && string.includes("."));

  // Add a view mode banner if we're viewing a historical inspection
  const viewBanner = activeInspection.isViewMode ? (
    <View key="view-mode-banner" style={{
      backgroundColor: theme.colors.primaryContainer,
      padding: 8,
      marginBottom: 16,
      borderRadius: 8,
      alignItems: 'center'
    }}>
      <Text style={{ 
        color: theme.colors.onPrimaryContainer,
        fontWeight: 'bold'
      }}>
        Viewing saved inspection (Read-only)
      </Text>
    </View>
  ) : null;

  // Map through items and render appropriate components
  const renderedItems = screenConfig.items.map((item, index) => {
    switch (item.type) {
      case "saveButton":
        // Show back button if in view mode, otherwise show save button
        return activeInspection.isViewMode ? (
          <Button
            key={item.id}
            mode="contained"
            onPress={() => {
              console.log('Back button pressed from history view');
              restorePreviousInspection(); // Restore the previous active inspection
              // Navigate back to main screen using the stored root route name
              try {
                if (rootRouteName) {
                  // If we have a root route name, navigate to it
                  navigation.navigate(rootRouteName);
                } else {
                  // Fallback to popToTop if no root route name
                  navigation.popToTop();
                }
              } catch (error) {
                console.error('Navigation error:', error);
                // Last resort - try to reset the navigation stack
                navigation.reset({
                  index: 0,
                  routes: [{ name: navigation.getState().routes[0].name }]
                });
              }
            }}
            style={[localStyles.gap, {borderRadius:12, marginTop: 8}]}
            title="Back to History"
            textColor={theme.colors.onPrimary}
            borderColor={theme.colors.primary}
          > 
            Back to History
          </Button>
        ) : (
          <Button
            key={item.id}
            mode="contained"
            onPress={() => {
              console.log('Save button pressed');
              saveInspection();
              // Navigate back to main screen using the stored root route name
              try {
                if (rootRouteName) {
                  // If we have a root route name, navigate to it
                  navigation.navigate(rootRouteName);
                } else {
                  // Fallback to popToTop if no root route name
                  navigation.popToTop();
                }
              } catch (error) {
                console.error('Navigation error:', error);
                // Last resort - try to reset the navigation stack
                navigation.reset({
                  index: 0,
                  routes: [{ name: navigation.getState().routes[0].name }]
                });
              }
            }}
            style={[localStyles.gap, {borderRadius:12, marginTop: 8}]}
            title={item.title}
            textColor={theme.colors.onPrimary}
            borderColor={theme.colors.primary}
          > 
            {item.title}
          </Button>
        );
      case 'section':
        return (
          <NaviTableOfContent
            key={item.id}
            title={item.title}
            subTitle={item.subTitle || ''}
            onPress={() => navigation.navigate(item.id)}
            theme={theme}
          />
        );
      case 'mainSection':
        return (
          <NaviTitle
            key={item.id}
            title={item.title}
            icon={item.icon}
            onPress={() => {
              // If this section is an inspection type, get or create inspection
              // This is the ONLY place we should be calling getOrCreateInspection
              if (item.inspectionType) {
                console.log('Creating new inspection of type:', item);
                getOrCreateInspection(item.inspectionType, item.title, item.id);
              }
              navigation.navigate(item.id);
            }}
            theme={theme}
          />
        );
      case 'textInput':
        return (
          <CustomTextInput
            key={item.id}
            label={item.title}
            value={state[item.id]?.value}
            onChangeText={val => !activeInspection.isViewMode && updateField(item.id, { value: val })}
            theme={theme}
            placeholder={item.placeholder}
            style={localStyles.gap}
            editable={!activeInspection.isViewMode}
          />
        );
      case 'textInputEmail':
        return (
          <CustomTextInput
            key={item.id}
            label={item.title}
            value={state[item.id]?.value}
            onChangeText={val => !activeInspection.isViewMode && updateField(item.id, { value: val, error: checkEmail(val) })}
            theme={theme}
            placeholder={item.placeholder}
            error={state[item.id]?.error}
            style={localStyles.gap}
            editable={!activeInspection.isViewMode}
          />
        );
      case 'counterInput':
        return (
          <CounterCard
            key={item.id}
            title={item.title}
            theme={theme}
            cardWidth={theme.cardWidth}
            initialCount={1}
            value={state[item.id]?.value || 0}
            onValueChange={val => !activeInspection.isViewMode && updateField(item.id, { value: val })}
            style={localStyles.gap}
            disabled={activeInspection.isViewMode}
          />
        );
      case 'checkbox':
        return (
          <CheckboxItem
            key={item.id}
            label={item.title}
            theme={theme}
            checked={state[item.id]?.value  || false}
            onValueChange={val => !activeInspection.isViewMode && updateField(item.id, { value: val })}
            style={localStyles.gap}
            disabled={activeInspection.isViewMode}
          />
        );
      case 'dateInput':
        return (
          <DateInput
            key={item.id}
            label={item.label || item.title}
            value={state[item.id]?.value || state[item.id]?.value}
            onChange={val => !activeInspection.isViewMode && updateField(item.id, { value: val })}
            style={localStyles.gap}
            disabled={activeInspection.isViewMode}
          />
        );
      case 'photoPicker':
        return (
          <PhotoPicker
            key={item.id}
            title={item.title}
            theme={theme}
            onValueChange={(updatedPhotos) => !activeInspection.isViewMode && updateField(item.id, { value: updatedPhotos })}
            photos={state[item.id]?.value || []}
            style={localStyles.gap}
            disabled={activeInspection.isViewMode}
          />
        );
      case 'historyScreen':
        return (
          <History 
            theme={theme} 
            key={item.id} 
            navigation={navigation}
          />
        );
      default:
        return <Text key={item.id} style={localStyles.gap}>Unknown item type</Text>;
    }
  });
  
  // Return the banner at the top followed by the rendered items
  return [viewBanner, ...renderedItems];
};

const localStyles = StyleSheet.create({
  gap: {
    marginBottom: 8,
  },
});