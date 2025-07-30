import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { ArrowLeft, Clock, CircleCheck as CheckCircle, BookOpen, Target } from 'lucide-react-native';
import Markdown from 'react-native-markdown-display';
import { Lesson } from '@/types/lesson';
import { colors, spacing, borderRadius, fontSize, fontWeight } from '@/styles';

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
      fontSize: fontSize.base,
      color: colors.text,
      lineHeight: 24,
    },
    heading1: {
      fontSize: fontSize['3xl'],
      fontWeight: fontWeight.bold,
      color: colors.primary,
      marginBottom: spacing.md,
      marginTop: spacing.lg,
    },
    heading2: {
      fontSize: fontSize['2xl'],
      fontWeight: fontWeight.semibold,
      color: colors.text,
      marginBottom: spacing.sm,
      marginTop: spacing.lg,
    },
    heading3: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.semibold,
      color: colors.text,
      marginBottom: spacing.sm,
      marginTop: spacing.md,
    },
    paragraph: {
      marginBottom: spacing.md,
      lineHeight: 24,
    },
    strong: {
      fontWeight: fontWeight.bold,
      color: colors.primary,
    },
    em: {
      fontStyle: 'italic',
      color: colors.accent,
    },
    list_item: {
      marginBottom: spacing.xs,
    },
    bullet_list: {
      marginBottom: spacing.md,
    },
    ordered_list: {
      marginBottom: spacing.md,
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
            <Text style={styles.badgeText}>Micro-Learning</Text>
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
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  backButtonText: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    color: colors.text,
  },
  headerBadges: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: colors.gray[100],
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  badgeText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.textSecondary,
  },
  completedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: colors.success,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  completedBadgeText: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color: colors.white,
  },
  progressContainer: {
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  progressLabel: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
  progressStep: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.gray[200],
    borderRadius: borderRadius.sm,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    padding: spacing.lg,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.md,
    lineHeight: 48,
  },
  description: {
    fontSize: fontSize.lg,
    color: colors.textSecondary,
    lineHeight: 28,
  },
  markdownContainer: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    marginTop: spacing.sm,
  },
  actionContainer: {
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'center',
    gap: spacing.md,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    minWidth: 200,
    justifyContent: 'center',
  },
  completedButton: {
    backgroundColor: colors.success,
  },
  actionButtonText: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.white,
  },
  actionHint: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 20,
  },
});