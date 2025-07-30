import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { ArrowLeft, Clock, CircleCheck as CheckCircle, BookOpen, Target, Award } from 'lucide-react-native';
import Markdown from 'react-native-markdown-display';
import { Lesson } from '@/types/lesson';

const colors = {
  primary: '#3B82F6',
  primaryLight: '#60A5FA',
  secondary: '#10B981',
  accent: '#8B5CF6',
  background: '#FFFFFF',
  backgroundSecondary: '#F8FAFC',
  text: '#1F2937',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  success: '#10B981',
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
  }
};

interface LessonViewerProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete: () => void;
  isCompleted?: boolean;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({ 
  lesson, 
  onBack, 
  onComplete, 
  isCompleted 
}) => {
  const markdownStyles = {
    body: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
    },
    heading1: {
      fontSize: 28,
      fontWeight: '700',
      color: colors.primary,
      marginBottom: 16,
      marginTop: 24,
    },
    heading2: {
      fontSize: 22,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 12,
      marginTop: 20,
    },
    heading3: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 8,
      marginTop: 16,
    },
    paragraph: {
      marginBottom: 16,
      lineHeight: 24,
    },
    strong: {
      fontWeight: '700',
      color: colors.primary,
    },
    em: {
      fontStyle: 'italic',
      color: colors.accent,
    },
    list_item: {
      marginBottom: 8,
    },
    bullet_list: {
      marginBottom: 16,
    },
    ordered_list: {
      marginBottom: 16,
    },
    blockquote: {
      backgroundColor: colors.gray[50],
      borderLeftWidth: 4,
      borderLeftColor: colors.primary,
      paddingLeft: 16,
      paddingVertical: 12,
      marginVertical: 16,
      fontStyle: 'italic',
    },
    code_inline: {
      backgroundColor: colors.gray[100],
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 4,
      fontSize: 14,
      fontFamily: 'monospace',
    },
    code_block: {
      backgroundColor: colors.gray[100],
      padding: 16,
      borderRadius: 8,
      marginVertical: 16,
      fontSize: 14,
      fontFamily: 'monospace',
    },
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <ArrowLeft size={20} color={colors.text} />
          <Text style={styles.backButtonText}>Back to Course</Text>
        </TouchableOpacity>
        
        <View style={styles.headerBadges}>
          <View style={styles.badge}>
            <Clock size={16} color={colors.textSecondary} />
            <Text style={styles.badgeText}>{lesson.duration} min read</Text>
          </View>
          
          <View style={styles.badge}>
            <BookOpen size={16} color={colors.textSecondary} />
            <Text style={styles.badgeText}>Lesson {lesson.order}</Text>
          </View>
          
          <View style={[styles.badge, { backgroundColor: colors.accent + '15' }]}>
            <Award size={16} color={colors.accent} />
            <Text style={[styles.badgeText, { color: colors.accent }]}>Expert Content</Text>
          </View>
        </View>
        
        {isCompleted && (
          <View style={styles.completedBadge}>
            <CheckCircle size={16} color={colors.white} />
            <Text style={styles.completedBadgeText}>Completed</Text>
          </View>
        )}
      </View>

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>Lesson Progress</Text>
          <Text style={styles.progressStep}>Step {lesson.order}</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[
            styles.progressFill, 
            { width: isCompleted ? '100%' : '0%' }
          ]} />
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{lesson.title}</Text>
          <Text style={styles.description}>{lesson.description}</Text>
        </View>
        
        <View style={styles.markdownContainer}>
          <Markdown style={markdownStyles}>
            {lesson.content}
          </Markdown>
        </View>

        {/* Key Takeaways */}
        {lesson.keyTakeaways && (
          <View style={styles.takeawaysContainer}>
            <Text style={styles.takeawaysTitle}>Key Takeaways</Text>
            {lesson.keyTakeaways.map((takeaway, index) => (
              <View key={index} style={styles.takeawayItem}>
                <View style={styles.takeawayBullet} />
                <Text style={styles.takeawayText}>{takeaway}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Action Button */}
      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={[
            styles.actionButton,
            isCompleted && styles.completedButton
          ]}
          onPress={onComplete}
          disabled={isCompleted}
        >
          {isCompleted ? (
            <>
              <CheckCircle size={20} color={colors.white} />
              <Text style={styles.actionButtonText}>Lesson Completed</Text>
            </>
          ) : (
            <>
              <Target size={20} color={colors.white} />
              <Text style={styles.actionButtonText}>Mark as Complete</Text>
            </>
          )}
        </TouchableOpacity>
        
        {!isCompleted && (
          <Text style={styles.actionHint}>
            Take your time to absorb this knowledge. Click complete when you're ready to move forward.
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    paddingVertical: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  headerBadges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.gray[100],
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  completedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.success,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  completedBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  progressContainer: {
    padding: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  progressStep: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.gray[200],
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
    lineHeight: 40,
  },
  description: {
    fontSize: 18,
    color: colors.textSecondary,
    lineHeight: 26,
  },
  markdownContainer: {
    backgroundColor: colors.white,
    padding: 20,
    marginTop: 8,
  },
  takeawaysContainer: {
    backgroundColor: colors.gray[50],
    margin: 20,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  takeawaysTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  takeawayItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  takeawayBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginTop: 8,
    marginRight: 12,
  },
  takeawayText: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },
  actionContainer: {
    padding: 20,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'center',
    gap: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    minWidth: 220,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  completedButton: {
    backgroundColor: colors.success,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  actionHint: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 20,
  },
});