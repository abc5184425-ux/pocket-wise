import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen } from "lucide-react";
import { Course } from "@/types/lesson";

interface CourseCardProps {
  course: Course;
  progress?: number;
  onStartCourse: (courseId: string) => void;
}

export const CourseCard = ({ course, progress = 0, onStartCourse }: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-hover hover:-translate-y-1 transition-all duration-500 bg-gradient-card border border-border/50 overflow-hidden backdrop-blur-sm">
      <CardHeader className="pb-6 relative">
        <div className="absolute inset-0 bg-gradient-content opacity-50 rounded-t-lg" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <Badge variant="secondary" className="text-xs font-semibold px-3 py-1 rounded-full">
              {course.lessons.length} Lessons
            </Badge>
          </div>
          <CardTitle className="text-2xl font-bold mb-3 leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            {course.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base leading-relaxed">
            {course.description}
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 pb-6">
        <div className="space-y-5">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/30">
            <div className="p-1.5 rounded-lg bg-accent/10">
              <Clock className="h-4 w-4 text-accent" />
            </div>
            <span className="text-sm font-medium text-foreground">{course.totalDuration} minutes total</span>
          </div>
          
          {progress > 0 && (
            <div className="space-y-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Progress</span>
                <span className="text-sm font-bold text-primary">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2.5" />
            </div>
          )}
          
          <Button 
            onClick={() => onStartCourse(course.id)}
            className="w-full h-12 bg-gradient-primary hover:shadow-lg hover:scale-105 transition-all duration-300 text-base font-semibold rounded-xl"
          >
            {progress > 0 ? 'Continue Learning' : 'Start Course'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};