import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { COLORS } from '../../../../assets/theme/Theme';
import { Responsive } from '../../../../assets/theme/Layout';

const skills = [
  "React Native", "JavaScript", "TypeScript", "Redux Toolkit",
  "Push Notifications", "REST API", "Socket.io", "Google Sign-In"
];

const projects = [
  { title: "Officedel App", description: "E-commerce platform with Razorpay payment integration." },
  { title: "Indian Politics League", description: "Rating & voting platform for MLAs & MPs with multilingual support." },
  { title: "Telepsych App", description: "Doctor appointment booking with Zoom meeting integration." },
  { title: "Network306", description: "Blockchain-based marketplace with real-time chat." }
];

const Info = () => {
  return (
    <ScrollView contentContainerStyle={{paddingBottom:Responsive.height(20)}} style={styles.container}>
      
      {/* Skills Section */}
      <Text style={styles.heading}>Tech Stack & Skills 🚀</Text>
      <View style={styles.skillContainer}>
        {skills.map((skill, index) => (
          <Text key={index} style={styles.skillBadge}>{skill}</Text>
        ))}
      </View>

      {/* Projects Section */}
      <Text style={styles.heading}>Notable Projects 📱</Text>
      <FlatList
        data={projects}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>{item.title}</Text>
            <Text style={styles.projectDesc}>{item.description}</Text>
          </View>
        )}
      />

      {/* Contact Section */}
      <Text style={styles.heading}>Let's Connect 🤝</Text>
      <Text style={styles.text}>📩 Email: anwar@example.com</Text>
      <Text style={styles.text}>🔗 LinkedIn: linkedin.com/in/anwar</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20,backgroundColor:COLORS.white },
  heading: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  text: { fontSize: 16, marginVertical: 5 },
  skillContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  skillBadge: { backgroundColor: '#ddd', padding: 8, margin: 5, borderRadius: 8 },
  projectCard: { backgroundColor: '#f9f9f9', padding: 10, marginVertical: 5, borderRadius: 8 },
  projectTitle: { fontSize: 16, fontWeight: 'bold' },
  projectDesc: { fontSize: 14, color: '#666' }
});

export default Info;
