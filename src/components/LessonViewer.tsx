import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, CheckCircle, BookOpen, Target, TrendingUp } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background-secondary to-background">
      <div className="max-w-6xl mx-auto space-y-6 p-6">
        {/* Enhanced Header Navigation */}
        <div className="glass-effect rounded-2xl p-6 shadow-elegant border border-border/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Button 
                variant="outline" 
                onClick={onBack} 
                className="flex items-center gap-3 h-12 px-6 rounded-xl border-border/50 hover:bg-gradient-card-hover hover:shadow-hover transition-all duration-300 font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Course</span>
              </Button>
              
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-secondary text-secondary-foreground">
                  <Clock className="h-4 w-4" />
                  {lesson.duration} min read
                </Badge>
                
                <Badge variant="outline" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border-primary/30">
                  <BookOpen className="h-4 w-4" />
                  Micro-Learning
                </Badge>
              </div>
            </div>
            
            {isCompleted && (
              <Badge className="flex items-center gap-2 bg-gradient-accent px-6 py-3 rounded-full text-sm font-semibold shadow-accent">
                <CheckCircle className="h-4 w-4" />
                Completed
              </Badge>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="glass-effect rounded-xl p-4 border border-border/30">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Lesson Progress</span>
            <span>Step {lesson.order}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="h-2 bg-gradient-primary rounded-full transition-all duration-500" 
              style={{ width: isCompleted ? '100%' : '0%' }}
            />
          </div>
        </div>

        {/* Enhanced Main Content */}
        <Card className="card-gradient border-border/40 shadow-elegant overflow-hidden rounded-2xl">
          <CardHeader className="pb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-content opacity-20 rounded-t-2xl" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-accent opacity-10 rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <CardTitle className="text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gradient">
                    {lesson.title}
                  </CardTitle>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {lesson.description}
                  </p>
                </div>
                
                <div className="hidden lg:flex flex-col items-center gap-2 bg-gradient-card rounded-xl p-4 border border-border/50">
                  <Target className="h-8 w-8 text-primary" />
                  <span className="text-xs font-medium text-center">Focus &<br />Learn</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-1 w-24 bg-gradient-primary rounded-full" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span>Build your financial knowledge</span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <div className="bg-gradient-card rounded-2xl p-8 border border-border/20 shadow-sm">
              <div className="lesson-content">
                <ReactMarkdown 
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                        <div className="w-2 h-8 bg-gradient-primary rounded-full" />
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-gradient-secondary rounded-full" />
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground flex items-center gap-2">
                        <div className="w-1 h-5 bg-gradient-accent rounded-full" />
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="mb-4 leading-relaxed text-foreground/90 text-base">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="mb-6 space-y-3 ml-4">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="mb-6 space-y-3 ml-4">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-foreground/90 leading-relaxed flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                        <span>{children}</span>
                      </li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-primary bg-primary/5 px-1 rounded">
                        {children}
                      </strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-accent font-medium">
                        {children}
                      </em>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary/40 pl-6 my-8 bg-muted/40 py-6 rounded-r-xl relative">
                        <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full" />
                        <div className="text-muted-foreground leading-relaxed">
                          {children}
                        </div>
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

        {/* Enhanced Action Section */}
        <div className="flex flex-col items-center gap-4">
          <Button 
            onClick={onComplete}
            disabled={isCompleted}
            className={`h-14 px-10 text-lg font-semibold rounded-2xl transition-all duration-300 ${
              isCompleted 
                ? 'bg-gradient-accent text-accent-foreground shadow-accent' 
                : 'btn-gradient hover:shadow-glow hover:scale-105'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="h-5 w-5 mr-3" />
                Lesson Completed
              </>
            ) : (
              <>
                <Target className="h-5 w-5 mr-3" />
                Mark as Complete
              </>
            )}
          </Button>
          
          {!isCompleted && (
            <p className="text-sm text-muted-foreground text-center max-w-md">
              Take your time to absorb this knowledge. Click complete when you're ready to move forward.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};