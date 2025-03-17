import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';
import { DatePickerModal, registerTranslation } from 'react-native-paper-dates';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { enUS } from 'date-fns/locale';

registerTranslation('en', {
    save: 'Save',
    selectSingle: 'Select date',
    selectMultiple: 'Select dates',
    selectRange: 'Select period',
    notAccordingToDateFormat: (inputFormat) => `Date format must be ${inputFormat}`,
    mustBeHigherThan: (date) => `Must be later than ${date}`,
    mustBeLowerThan: (date) => `Must be earlier than ${date}`,
    mustBeBetween: (startDate, endDate) => `Must be between ${startDate} and ${endDate}`,
    dateIsDisabled: 'Date is not allowed',
    previous: 'Previous',
    next: 'Next',
    typeInDate: 'Type in date', // 🛠️ Обязательное поле
    pickDateFromCalendar: 'Pick date from calendar',
    close: 'Close',
  });

export default function DateInput({ label, value, onChange, error, style = {} }) {
  console.log('Date value', value)
  // value = new Date()
  const parsedValue = value ? new Date(value) : value;
  const theme = useTheme();
  const [visible, setVisible] = useState(false);

  const onConfirm = ({ date }) => {
    setVisible(false);
    if (date) onChange(date);
  };

  return (
    <View>
      <TouchableOpacity 
    //   onPress={() => setVisible(true)}
      >
        <TextInput
          label={label}
          value={parsedValue ? parsedValue.toLocaleDateString() : ''}
          editable={false}
          mode= "outlined"
        //   outlineColor={error ? theme.colors.error : theme.colors.outline}
          outlineStyle={[
            {borderRadius:12},
            {borderColor : error ? theme.colors.error : theme.colors.outline },
            {margin:0}
          ]}
          activeOutlineColor={error ? theme.colors.error : theme.colors.primary}
          textColor={theme.colors.onSurface}
          placeholderTextColor={theme.colors.onSurfaceVariant}
          right={<TextInput.Icon icon="calendar" iconColor={theme.colors.primary} onPress={() => setVisible(true)} />}
          style={[{ backgroundColor: theme.colors.surface }, {marginTop:8}, style]}
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
