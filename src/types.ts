export interface Question {
  id: number;
  pregunta: string;
  opciones: string[];
  correcta: number; // Index of the correct option (0-3)
  explicacion: string;
  categoria?: string;
}

export type ExamStatus = 'idle' | 'exam' | 'study' | 'finished';

export interface ExamState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: (number | null)[];
  timeLeft: number; // in seconds
  status: ExamStatus;
}
