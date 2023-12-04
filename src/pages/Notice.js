import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const notices = [
  { id: 1, sender: 'Alice', text: 'Sana yeni bir mesaj gönderdi.' },
  { id: 2, sender: 'Sistem Güncellemesi', text: 'Yeni bir güncelleme mevcut.' },
  { id: 3, sender: 'Etkinlik Takvimi', text: 'Yarınki etkinliği kaçırma!' },
];

const Notice = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bildirimler</Text>
        {notices.map((notice) => (
          <View key={notice.id} style={styles.noticeItem}>
            <Text style={styles.sender}>{notice.sender}</Text>
            <Text style={styles.noticeText}>{notice.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F9',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundPattern: 'radial-gradient(circle at 50% 50%, #5B5B6C, transparent)', // Örnek bir arka plan deseni
  },
  content: {
    width: screenWidth - 40,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    shadowColor: '#5B5B6C',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5B5B6C',
    marginBottom: 25,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  noticeItem: {
    backgroundColor: '#5B5B6C',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  sender: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  noticeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'normal',
  }
});

export default Notice;
