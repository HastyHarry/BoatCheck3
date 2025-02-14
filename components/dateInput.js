import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles';

export default function DateInput({ label, value, onChange, error }) {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  const onConfirm = ({ date }) => {
    setVisible(false);
    if (date) onChange(date);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <TextInput
          label={label}
          value={value ? value.toLocaleDateString() : ''}
          editable={false}
          mode= "outlined"
          outlineColor={error ? theme.colors.error : theme.colors.outline}
          activeOutlineColor={error ? theme.colors.error : theme.colors.primary}
          textColor={theme.colors.onSurface}
          placeholderTextColor={theme.colors.onSurfaceVariant}
          right={<TextInput.Icon icon="calendar" onPress={() => setVisible(true)} />}
          style={[styles.input, { backgroundColor: theme.colors.surface }]}
        />
      </TouchableOpacity>

      <DatePickerModal
        locale="en"
        mode="single"
        visible={visible}
        onDismiss={() => setVisible(false)}
        date={value}
        onConfirm={onConfirm}
      />
    </View>
  );
}
