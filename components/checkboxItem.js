import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CheckboxCard({ label = 'Check item', hint = "", theme, style = {} }) {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
  };

  return (
    <Card
      onPress={handlePress}
      style={[
        localStyles.card,
        { backgroundColor: checked ? (theme?.colors?.surfaceVariant || '#C8E6C9') : (theme?.colors?.surface || '#fff') },
        style,
      ]}
    >
      <Card.Content style={localStyles.content}>
        <Text style={[localStyles.label, { color: theme?.colors?.onSurfaceVariant || '#000' }]}>{label}</Text>
        {checked && (
            <MaterialCommunityIcons name="check-circle" size={18} color = {theme?.colors?.primary || "#fff"} />
        //   <IconButton
        //     icon="check-circle"
        //     size={24}
        //     iconColor={theme?.colors?.primary || '#4CAF50'}
        //   />
        )}
      </Card.Content>
    </Card>
  );
}

// localStyles
const localStyles = StyleSheet.create({
  card: {
    marginBottom: 0,
    marginTop: 6,
    borderRadius: 12,
    elevation: 2, // For Android shadow
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
  },
});
