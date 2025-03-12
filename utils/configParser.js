import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import CustomTextInput from '../components/textInput';
import DateInput from '../components/dateInput';
import CheckboxItem from '../components/checkboxItem';
import CounterCard from '../components/counterCard';
import PhotoPicker from '../components/photoPicker2';
import NaviTableOfContent from '../components/naviTableOfContent';
import NaviTitle from '../components/naviTitle'
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
  const { state, updateField, startNewInspection, saveInspection } = useGlobalState();

  const checkEmail = (string) => !(string.includes("@") && string.includes("."));

  return screenConfig.items.map((item, index) => {
    // console.log('item/index', {item,index});
    switch (item.type) {
      case "saveButton":
        return (
          <Button
            key={item.id}
            mode="contained"
            onPress={() => {
              console.log('Save button pressed')
              saveInspection()
              navigation.navigate('0')
            }}
            style={[localStyles.gap, {borderRadius:12, marginTop: 8}]}
            title={item.title}
            textColor={theme.colors.onPrimary}
            borderColor={theme.colors.primary}
            outlineStyle={[
              ]}
          > {item.title}
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
            // cardWidth={theme.cardWidth}
          />
        );
      case 'mainSection':
        return (
          <NaviTitle
            key={item.id}
            title={item.title}
            icon={item.icon}
            onPress={() => navigation.navigate(item.id)}
            theme={theme}></NaviTitle>
        );
      case 'textInput':
        return (
          <CustomTextInput
          key={item.id}
            label={item.title}
            value={state[item.objectName]?.value}
            onChangeText={val => updateField(item.objectName, { value: val })}
            theme={theme}
            placeholder={item.placeholder}
            style={localStyles.gap}
          />
        );
      case 'textInputEmail':
        return (
          <CustomTextInput
          key={item.id}
            label={item.title}
            value={state[item.objectName]?.value}
            onChangeText={val => updateField(item.objectName, { value: val, error: checkEmail(val) })}
            theme={theme}
            placeholder={item.placeholder}
            error={state[item.objectName]?.error}
            style={localStyles.gap}
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
            value={state[item.objectName]?.value || 0}
            onValueChange={val => updateField(item.objectName, { value: val })}
            style={localStyles.gap}
          />
        );
      case 'checkbox':
        return (
          <CheckboxItem
          key={item.id}
            label={item.title}
            theme={theme}
            checked={state[item.objectName]?.value || false}
            onValueChange={val => updateField(item.objectName, { value: val })}
            style={localStyles.gap}
          />
        );
      case 'dateInput':
        return (
          <DateInput
          key={item.id}
            label={item.label}
            value={state[item.objectName]?.value}
            onChange={val => updateField(item.objectName, { value: val })}
            style={localStyles.gap}
          />
        );
      case 'photoPicker':
        return (
          <PhotoPicker
            key={item.id}
            title={item.title}
            theme={theme}
            onValueChange={(updatedPhotos) => updateField(item.objectName, { value: updatedPhotos })}
            photos={state[item.objectName]?.value || []}
            style={localStyles.gap}
          />
        );
      case 'historyScreen':
        return (
          <History theme={theme}></History>);
      default:
        return <Text key={item.id} style={localStyles.gap}>Unknown item type</Text>;
    }
  });
};

const localStyles = StyleSheet.create({
  gap: {
    marginBottom: 8,
  },
});