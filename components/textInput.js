import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function CustomTextInput({ 
  label, 
  value, 
  onChangeText, 
  error = false, 
  placeholder = '', 
  theme, 
  style = {},
  editable = true
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={isFocused ? '' : placeholder} // Disappears when focused
      placeholderTextColor = {theme.colors.primary}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      editable={editable}
      mode = "outlined"
      outlineStyle={[
        {borderRadius:12},
        {borderColor : error ? theme.colors.error : theme.colors.outline},
        // {marginTop:0},
        // {padding:0}
      ]}
      activeOutlineColor={error ? theme.colors.error : theme.colors.secondary}
      textColor={theme.colors.onSurface}
      style={[styles.input, 
        { 
          backgroundColor: theme.colors.surface, 
          borderColor: error ? theme.colors.error : theme.colors.secondary , 
          marginTop:0
        },
        style
        ]}
      theme={{ colors: { primary: theme.colors.secondary } }}
    />
  );
}

// Styles

const styles = StyleSheet.create({
  input: {
    marginTop:0,
    paddingTop:0,
    // marginBottom: 0,
    borderRadius: 8
  },
});
