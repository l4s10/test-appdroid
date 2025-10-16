import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tareas',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Acerca de',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="information-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
