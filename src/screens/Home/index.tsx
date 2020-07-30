import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../types/Navigation';
import { Header } from '../../components';

export default function Home() {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <Header>
        <Text>Home</Text>
      </Header>
      <View style={styles.content}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});
