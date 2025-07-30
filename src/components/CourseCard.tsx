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
    <Card className="group hover:shadow-soft transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <Badge variant="secondary" className="text-xs font-medium">
                {course.lessons.length} Lessons
              </Badge>
            </div>
            <CardTitle className="text-xl font-bold mb-2">{course.title}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {course.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{course.totalDuration} minutes total</span>
          </div>
          
          {progress > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
          
          <Button 
            onClick={() => onStartCourse(course.id)}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            {progress > 0 ? 'Continue Learning' : 'Start Course'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};