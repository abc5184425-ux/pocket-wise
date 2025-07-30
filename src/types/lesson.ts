export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  duration: number; // in minutes
  order: number;
  completed?: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  color: string;
  icon: string;
  totalDuration: number;
}

export interface Progress {
  courseId: string;
  completedLessons: string[];
  currentLesson?: string;
}