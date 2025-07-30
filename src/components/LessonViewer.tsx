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
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      {/* Header Navigation */}
      <div className="flex items-center justify-between bg-gradient-card border border-border/50 rounded-2xl p-6 shadow-soft">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={onBack} 
            className="flex items-center gap-2 h-11 px-6 rounded-xl border-border/50 hover:shadow-hover transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Back to Course</span>
          </Button>
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold">
            <Clock className="h-4 w-4" />
            {lesson.duration} min read
          </Badge>
        </div>
        {isCompleted && (
          <Badge className="flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-sm font-semibold">
            <CheckCircle className="h-4 w-4" />
            Completed
          </Badge>
        )}
      </div>

      {/* Main Content */}
      <Card className="bg-gradient-card border border-border/50 shadow-elegant overflow-hidden">
        <CardHeader className="pb-8 relative">
          <div className="absolute inset-0 bg-gradient-content opacity-30 rounded-t-lg" />
          <div className="relative">
            <CardTitle className="text-4xl font-bold mb-4 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {lesson.title}
            </CardTitle>
            <div className="h-1 w-20 bg-gradient-primary rounded-full" />
          </div>
        </CardHeader>
        
        <CardContent className="px-8 pb-8">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <div className="bg-gradient-content rounded-xl p-8 border border-border/30">
              <ReactMarkdown 
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 text-primary">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">{children}</h3>,
                  p: ({ children }) => <p className="mb-4 leading-relaxed text-foreground/90">{children}</p>,
                  ul: ({ children }) => <ul className="mb-4 pl-6 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="mb-4 pl-6 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="text-foreground/90 leading-relaxed">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
                  em: ({ children }) => <em className="italic text-accent">{children}</em>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary/30 pl-6 my-6 italic text-muted-foreground bg-muted/30 py-4 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {lesson.content}
              </ReactMarkdown>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Button */}
      <div className="flex justify-center">
        <Button 
          onClick={onComplete}
          className="h-12 px-8 bg-gradient-primary hover:shadow-lg hover:scale-105 transition-all duration-300 text-base font-semibold rounded-xl"
          disabled={isCompleted}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="h-5 w-5 mr-2" />
              Completed
            </>
          ) : (
            'Mark as Complete'
          )}
        </Button>
      </div>
    </div>
  );
};