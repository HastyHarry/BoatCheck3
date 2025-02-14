import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

export default function CustomTextInput({ 
  label, 
  value, 
  onChangeText, 
  error = false, 
  placeholder = '', 
  theme, 
  style = {} 
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={isFocused ? '' : placeholder} // Disappears when focused
      placeholderTextColor = {theme.colors.onSecondary}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      mode = "outlined"
      outlineColor={error ? theme.colors.error : theme.colors.outline}
      activeOutlineColor={error ? theme.colors.error : theme.colors.secondary}
      textColor={theme.colors.onSurface}
      style={[styles.input, 
        { backgroundColor: theme.colors.surface, 
        borderColor: error ? theme.colors.error : theme.colors.secondary }, style]}
      theme={{ colors: { primary: theme.colors.secondary } }}
    />
  );
}

// Styles
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
});
