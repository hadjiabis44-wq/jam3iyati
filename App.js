import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

const sections = [
  { icon: '👥', title: 'إدارة الأعضاء', sub: 'ملفات المنخرطين' },
  { icon: '💳', title: 'الاشتراكات', sub: 'متابعة اشتراكات الأعضاء' },
  { icon: '📅', title: 'الاجتماعات', sub: 'الجلسات ومحاضر الاجتماعات' },
  { icon: '🎯', title: 'الأنشطة', sub: 'البرامج والأنشطة الجمعوية' },
  { icon: '📊', title: 'المالية', sub: 'المداخيل والمصاريف والمنح' },
  { icon: '📚', title: 'الأرشيف', sub: 'الوثائق والتقارير' },
  { icon: '📄', title: 'التقارير السنوية', sub: 'الأدبي والمالي' },
  { icon: '⚙️', title: 'الإعدادات', sub: 'إعدادات الجمعية والمستخدمين' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#174D3A" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.logo}>جَمْعِيَّتِي</Text>
        <Text style={styles.subtitle}>نظام تسيير الجمعيات</Text>
        <Text style={styles.association}>
          جمعية المستقبل الشبانية للتراث
        </Text>
        <Text style={styles.location}>بنورة - غرداية</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcome}>مرحباً بك 👋</Text>
        <Text style={styles.description}>لوحة التحكم الرئيسية</Text>

        <View style={styles.grid}>
          {sections.map((item, index) => (
            <View style={styles.card} key={index}>
              <Text style={styles.icon}>{item.icon}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub}>{item.sub}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>جَمْعِيَّتِي © 2026</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F3EA' },
  header: {
    backgroundColor: '#174D3A',
    paddingTop: 55,
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logo: { color: '#E6C47A', fontSize: 32, fontWeight: 'bold' },
  subtitle: { color: '#FFFFFF', fontSize: 15, marginTop: 5 },
  association: { color: '#FFFFFF', fontSize: 17, marginTop: 18 },
  location: { color: '#E6C47A', fontSize: 13, marginTop: 5 },
  content: { padding: 18 },
  welcome: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#174D3A',
    textAlign: 'right',
  },
  description: {
    color: '#777',
    textAlign: 'right',
    marginTop: 5,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    marginBottom: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8DFC9',
  },
  icon: { fontSize: 30, marginBottom: 10 },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#174D3A',
  },
  cardSub: {
    fontSize: 11,
    color: '#777',
    marginTop: 7,
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
    marginBottom: 25,
  },
});
