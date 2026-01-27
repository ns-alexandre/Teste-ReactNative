import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, StatusBar, Pressable } from "react-native";

import { useSpaceNews } from './src/hooks/useSpaceNews';
import { ArticleItem } from './src/components/ArticleItem';

// Tela principal do app
export default function App() {
  const { news, loading, error, refetch } = useSpaceNews();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={{ marginTop: 10 }}>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Erro ao carregar dados!</Text>
        
        <Pressable style={styles.reloadButton} onPress={refetch}>
          <Text style={styles.reloadText}>Recarregar</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ArticleItem article={item} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  center: { 
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 16,
    marginBottom: 12,
    color: 'red',
    textAlign: 'center',
  },
  reloadButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  reloadText: {
    color: "#fff",
    fontWeight: "bold",
  },
});