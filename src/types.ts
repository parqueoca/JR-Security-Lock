export interface Question {
  id: number;
  pregunta: string;
  opciones: string[];
  correcta: number; // Index of the correct option (0-3)
  explicacion: string;
  categoria?: string;
}

export interface ExamAttempt {
  id: string;
  date: string;
  score: number;
  correct: number;
  total: number;
  passed: boolean;
  timeSpent: number; // in seconds
  mode: 'exam' | 'study';
}

export type ExamStatus = 'welcome' | 'idle' | 'exam' | 'study' | 'finished' | 'history';

export interface ExamState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: (number | null)[];
  timeLeft: number; // in seconds
  status: ExamStatus;
}
