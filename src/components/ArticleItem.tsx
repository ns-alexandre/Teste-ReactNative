import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Share } from 'react-native';
import { Article } from '../hooks/useSpaceNews';

interface Props {
  article: Article;
}

export const ArticleItem = ({ article }: Props) => {
// Compartilha a notícia usando o recurso nativo do sistema
  async function handleShare() {
    try {
      await Share.share({
        message: `${article.title}\n${article.url}`,
      });
    } catch (error) {
      console.log("Erro ao compartilhar:", error);
    }
  }

  return (
    <View style={styles.card}>
      <Image source={{ uri: article.image_url }} style={styles.image} />

      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.summary} numberOfLines={3}>
        {article.summary}
      </Text>

      <Pressable
        style={styles.shareButton}
        onPress={handleShare}>
        <Text style={styles.shareText}>Compartilhar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  summary: {
    fontSize: 14,
    marginTop: 4,
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 5,
  },
  shareText: {
    color: "#fff",
    fontWeight: "bold",
  },
});