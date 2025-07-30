import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  SafeAreaView,
  Image,
  Dimensions 
} from 'react-native';
import { GraduationCap, Target, TrendingUp, Calculator } from 'lucide-react-native';
import { CourseCard } from '@/components/CourseCard';
import { LessonViewer } from '@/components/LessonViewer';
import { courses } from '@/data/lessons';
import { Course, Lesson, Progress } from '@/types/lesson';
import { colors, spacing, borderRadius, fontSize, fontWeight } from '@/styles';

const { width } = Dimensions.get('window');

export default function Index() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [progress, setProgress] = useState<Progress[]>([]);

  const handleStartCourse = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
      setSelectedLesson(course.lessons[0]);
    }
  };

  const handleLessonComplete = () => {
    if (selectedLesson && selectedCourse) {
      // Update progress logic here
      const nextLessonIndex = selectedCourse.lessons.findIndex(l => l.id === selectedLesson.id) + 1;
      if (nextLessonIndex < selectedCourse.lessons.length) {
        setSelectedLesson(selectedCourse.lessons[nextLessonIndex]);
      }
    }
  };

  const getProgressForCourse = (courseId: string) => {
    const courseProgress = progress.find(p => p.courseId === courseId);
    if (!courseProgress) return 0;
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    return (courseProgress.completedLessons.length / course.lessons.length) * 100;
  };

  if (selectedLesson && selectedCourse) {
    return (
      <SafeAreaView style={styles.container}>
        <LessonViewer
          lesson={selectedLesson}
          onBack={() => {
            setSelectedLesson(null);
            setSelectedCourse(null);
          }}
          onComplete={handleLessonComplete}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Master Your Financial Future</Text>
            <Text style={styles.heroDescription}>
              Learn essential financial skills through bite-sized lessons designed for busy people. 
              From budgeting basics to advanced investment strategies.
            </Text>
            
            <View style={styles.heroFeatures}>
              <View style={styles.featureItem}>
                <GraduationCap size={20} color={colors.white} />
                <Text style={styles.featureText}>Expert-crafted curriculum</Text>
              </View>
              <View style={styles.featureItem}>
                <Target size={20} color={colors.white} />
                <Text style={styles.featureText}>Practical strategies</Text>
              </View>
              <View style={styles.featureItem}>
                <TrendingUp size={20} color={colors.white} />
                <Text style={styles.featureText}>Build wealth systematically</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Courses Section */}
        <View style={styles.coursesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Choose Your Learning Path</Text>
            <Text style={styles.sectionDescription}>
              Each course is designed to build your financial knowledge step by step, 
              with practical lessons you can complete in 15 minutes or less.
            </Text>
          </View>

          <View style={styles.coursesGrid}>
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                progress={getProgressForCourse(course.id)}
                onStartCourse={handleStartCourse}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.xxxl,
    paddingHorizontal: spacing.lg,
  },
  heroContent: {
    alignItems: 'center',
    maxWidth: width - (spacing.lg * 2),
  },
  heroTitle: {
    fontSize: fontSize['5xl'],
    fontWeight: fontWeight.bold,
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.lg,
    lineHeight: 56,
  },
  heroDescription: {
    fontSize: fontSize.xl,
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.xl,
    lineHeight: 28,
    opacity: 0.9,
  },
  heroFeatures: {
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  featureText: {
    fontSize: fontSize.base,
    color: colors.white,
    opacity: 0.8,
  },
  coursesSection: {
    paddingVertical: spacing.xxxl,
    paddingHorizontal: spacing.lg,
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.bold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  sectionDescription: {
    fontSize: fontSize.xl,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 28,
    maxWidth: width - (spacing.lg * 2),
  },
  coursesGrid: {
    gap: spacing.lg,
  },
});