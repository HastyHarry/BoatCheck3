import React, { useState } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
import { Card, Chip } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useGlobalState } from '../utils/globalContext';
import NaviTableOfContent from './naviTableOfContent';

export default function History({ theme, navigation }) {
    const { getSavedInspections, loadInspection, deleteInspection } = useGlobalState();
    const [activeFilter, setActiveFilter] = useState(null);

    // Get all inspections
    const allInspections = getSavedInspections();
    console.log('allInspections', JSON.stringify(allInspections));
    
    // Get unique inspection types for filtering
    const inspectionTypes = [...new Set(allInspections.map(insp => 
        insp.type || 'unknown'
    ))];
    
    // Apply filter if active
    const inspections = activeFilter 
        ? allInspections.filter(insp => insp.type === activeFilter)
        : allInspections;

    const handleDeleteItem = (id) => {
        Alert.alert(
            'Delete',
            'Are you sure you want to delete?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        deleteInspection(id);
                    },
                },
            ]
        );
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Filter chips */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
                <Chip
                    mode={activeFilter === null ? 'flat' : 'outlined'}
                    selected={activeFilter === null}
                    onPress={() => setActiveFilter(null)}
                    style={styles.filterChip}
                >
                    All
                </Chip>
                {inspectionTypes.map((type, index) => (
                    <Chip
                        key={index}
                        mode={activeFilter === type ? 'flat' : 'outlined'}
                        selected={activeFilter === type}
                        onPress={() => setActiveFilter(type)}
                        style={styles.filterChip}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </Chip>
                ))}
            </ScrollView>

            {/* List of inspections */}
            {inspections.length === 0 ? (
                <View style={styles.emptyState}>
                    <Text style={{ color: theme.colors.onSurfaceVariant }}>
                        {activeFilter 
                            ? `No ${activeFilter} inspections found`
                            : 'No inspections found'}
                    </Text>
                </View>
            ) : (
                inspections.map((inspection, index) => {
                    // Format date for readability
                    const dateStr = inspection.data?.metadata?.completionTime 
                        ? new Date(inspection.data.metadata.completionTime).toLocaleString()
                        : 'No date';
                    
                        console.log('inspection.data', inspection.data);
                    // Get boat name or default
                    const boatName = inspection.data?.boatNameObj?.value || 'No boat name';
                    
                    // Get inspection type for display
                    const typeDisplay = inspection.type 
                        ? `${inspection.type.charAt(0).toUpperCase() + inspection.type.slice(1)}` 
                        : '';

                    return (
                        <NaviTableOfContent
                            key={inspection.id}
                            // title={`${boatName} (${typeDisplay})`}
                            title={`${typeDisplay}`}
                            subTitle={dateStr}
                            onPress={() => {
                                const startScreen = inspection.data?.metadata?.startingPoint || '0';
                                loadInspection(inspection.id);
                                navigation.navigate(startScreen);
                            }}
                            onLongPress={() => handleDeleteItem(inspection.id)}
                            theme={theme}
                        />
                    );
                })
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    filterContainer: {
        padding: 8,
        flexDirection: 'row',
    },
    filterChip: {
        marginRight: 8,
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
});