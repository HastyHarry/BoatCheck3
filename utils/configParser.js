import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import CustomTextInput from '../components/textInput';
import DateInput from '../components/dateInput';
import CheckboxItem from '../components/checkboxItem';
import CounterCard from '../components/counterCard';
import PhotoPicker from '../components/photoPicker2';
import NaviTableOfContent from '../components/naviTableOfContent';
import NaviTitle from '../components/naviTitle'
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
  const { state, updateField } = useGlobalState();

  const checkEmail = (string) => !(string.includes("@") && string.includes("."));

  return screenConfig.items.map((item, index) => {
    switch (item.type) {
      case 'section':
        return (
          <NaviTableOfContent
            key={index}
            title={item.title}
            onPress={() => navigation.navigate(item.id)}
            theme={theme}
            cardWidth={theme.cardWidth}
          />
        );
      case 'mainSection':
        return (
          <NaviTitle
            title={item.title}
            icon={item.icon}
            onPress={() => navigation.navigate(item.id)}
            theme={theme}></NaviTitle>
        );
      case 'textInput':
        return (
          <CustomTextInput
            key={index}
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
            key={index}
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
            key={index}
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
            key={index}
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
            key={index}
            label={item.label}
            value={state[item.objectName]?.value}
            onChange={val => updateField(item.objectName, { value: val })}
            style={localStyles.gap}
          />
        );
      case 'photoPicker':
        return (
          <PhotoPicker
            key={index}
            title={item.title}
            theme={theme}
            onValueChange={(updatedPhotos) => updateField(item.objectName, { value: updatedPhotos })}
            photos={state[item.objectName]?.value || []}
            style={localStyles.gap}
          />
        );
      default:
        return <Text key={index} style={localStyles.gap}>Unknown item type</Text>;
    }
  });
};

const localStyles = StyleSheet.create({
  gap: {
    marginBottom: 8,
  },
});