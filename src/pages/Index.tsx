import { useState } from "react";
import { CourseCard } from "@/components/CourseCard";
import { LessonViewer } from "@/components/LessonViewer";
import { courses } from "@/data/lessons";
import { Course, Lesson, Progress } from "@/types/lesson";
import heroImage from "@/assets/hero-finance.jpg";
import { GraduationCap, Target, TrendingUp, Calculator } from "lucide-react";

const Index = () => {
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
      <div className="min-h-screen bg-background p-6">
        <LessonViewer
          lesson={selectedLesson}
          onBack={() => {
            setSelectedLesson(null);
            setSelectedCourse(null);
          }}
          onComplete={handleLessonComplete}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-gradient-hero">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl font-bold text-white mb-6">
                Master Your Financial Future
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Learn essential financial skills through bite-sized lessons designed for busy people. From budgeting basics to advanced investment strategies.
              </p>
              <div className="flex flex-wrap gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>Expert-crafted curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  <span>Practical strategies</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Build wealth systematically</span>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <img 
                src={heroImage} 
                alt="Financial Education" 
                className="rounded-xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each course is designed to build your financial knowledge step by step, with practical lessons you can complete in 15 minutes or less.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                progress={getProgressForCourse(course.id)}
                onStartCourse={handleStartCourse}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
