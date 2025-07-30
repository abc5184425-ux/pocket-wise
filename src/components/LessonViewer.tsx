import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";
import { Lesson } from "@/types/lesson";
import ReactMarkdown from 'react-markdown';

interface LessonViewerProps {
  lesson: Lesson;
  onBack: () => void;
  onComplete: () => void;
  isCompleted?: boolean;
}

export const LessonViewer = ({ lesson, onBack, onComplete, isCompleted }: LessonViewerProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Course
        </Button>
        <Badge variant="secondary" className="flex items-center gap-2">
          <Clock className="h-3 w-3" />
          {lesson.duration} min
        </Badge>
        {isCompleted && (
          <Badge className="flex items-center gap-2 bg-secondary">
            <CheckCircle className="h-3 w-3" />
            Completed
          </Badge>
        )}
      </div>

      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{lesson.title}</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <ReactMarkdown>{lesson.content}</ReactMarkdown>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button 
          onClick={onComplete}
          className="bg-gradient-primary hover:opacity-90"
          disabled={isCompleted}
        >
          {isCompleted ? 'Completed' : 'Mark as Complete'}
        </Button>
      </div>
    </div>
  );
};