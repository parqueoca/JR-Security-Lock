/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  BookOpen, 
  ChevronRight, 
  ChevronLeft, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Info,
  AlertTriangle,
  Award,
  ArrowLeft,
  User,
  History,
  Trash2,
  Calendar
} from 'lucide-react';
import { Question, ExamState, ExamStatus, ExamAttempt } from './types';
import { questionBank } from './questions';

const EXAM_TIME = 30 * 60; // 30 minutes in seconds
const QUESTIONS_PER_EXAM = 40;
const PASSING_SCORE = 70;

export default function App() {
  const [state, setState] = useState<ExamState>({
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    timeLeft: EXAM_TIME,
    status: 'idle',
  });

  const [showReview, setShowReview] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [history, setHistory] = useState<ExamAttempt[]>([]);
  const [nameInput, setNameInput] = useState('');

  // Load data from localStorage
  useEffect(() => {
    const savedName = localStorage.getItem('jr_security_user_name');
    const savedHistory = localStorage.getItem('jr_security_history');
    
    if (savedName) {
      setUserName(savedName);
    } else {
      setState(prev => ({ ...prev, status: 'welcome' }));
    }

    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error("Error parsing history", e);
      }
    }
  }, []);

  const formatName = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const saveName = () => {
    if (nameInput.trim()) {
      const formattedName = formatName(nameInput.trim());
      setUserName(formattedName);
      localStorage.setItem('jr_security_user_name', formattedName);
      setState(prev => ({ ...prev, status: 'idle' }));
    }
  };

  const saveAttempt = (results: any) => {
    const newAttempt: ExamAttempt = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      score: results.percentage,
      correct: results.correct,
      total: state.questions.length,
      passed: results.passed,
      timeSpent: EXAM_TIME - state.timeLeft,
      mode: state.status as 'exam' | 'study'
    };

    const newHistory = [newAttempt, ...history].slice(0, 50); // Keep last 50
    setHistory(newHistory);
    localStorage.setItem('jr_security_history', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    if (window.confirm('¿Estás seguro de que quieres borrar todo tu historial?')) {
      setHistory([]);
      localStorage.removeItem('jr_security_history');
    }
  };

  // Initialize exam
  const startExam = useCallback((mode: ExamStatus = 'exam') => {
    // Shuffle and pick 40 questions
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, QUESTIONS_PER_EXAM);
    
    setState({
      questions: selected,
      currentQuestionIndex: 0,
      userAnswers: new Array(QUESTIONS_PER_EXAM).fill(null),
      timeLeft: EXAM_TIME,
      status: mode,
    });
    setShowReview(false);
  }, []);

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state.status === 'exam' && state.timeLeft > 0) {
      timer = setInterval(() => {
        setState(prev => ({
          ...prev,
          timeLeft: prev.timeLeft - 1
        }));
      }, 1000);
    } else if (state.timeLeft === 0 && state.status === 'exam') {
      setState(prev => ({ ...prev, status: 'finished' }));
    }
    return () => clearInterval(timer);
  }, [state.status, state.timeLeft]);

  const handleAnswer = (optionIndex: number) => {
    const newUserAnswers = [...state.userAnswers];
    newUserAnswers[state.currentQuestionIndex] = optionIndex;
    setState(prev => ({ ...prev, userAnswers: newUserAnswers }));
  };

  const nextQuestion = () => {
    if (state.currentQuestionIndex < state.questions.length - 1) {
      setState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
    } else if (state.status === 'exam') {
      const results = calculateResults();
      saveAttempt(results);
      setState(prev => ({ ...prev, status: 'finished' }));
    }
  };

  const prevQuestion = () => {
    if (state.currentQuestionIndex > 0) {
      setState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex - 1 }));
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateResults = () => {
    const correct = state.userAnswers.reduce((acc, ans, idx) => {
      return ans === state.questions[idx].correcta ? acc + 1 : acc;
    }, 0);
    const total = state.questions.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= PASSING_SCORE;
    
    return { correct, incorrect: total - correct, percentage, passed };
  };

  // Render Welcome Screen
  if (state.status === 'welcome') {
    return (
      <div className="min-h-screen bg-[#F3F4F6] flex flex-col items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 space-y-6 text-center"
        >
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
            <User className="w-10 h-10 text-[#003876]" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-800">¡Bienvenido!</h1>
            <p className="text-gray-500 font-medium">Simulador para examen para licencia de conducir en RD</p>
            <p className="text-sm text-gray-400">Para personalizar tu experiencia, dinos tu nombre:</p>
          </div>
          <div className="space-y-4">
            <input 
              type="text" 
              value={nameInput}
              onChange={(e) => setNameInput(formatName(e.target.value))}
              placeholder="Escribe tu nombre aquí..."
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-[#003876] outline-none transition-all text-center font-bold text-lg"
              onKeyDown={(e) => e.key === 'Enter' && saveName()}
            />
            <button 
              onClick={saveName}
              disabled={!nameInput.trim()}
              className="w-full bg-[#003876] hover:bg-[#002a5a] disabled:opacity-50 text-white font-bold py-4 rounded-2xl transition-all shadow-lg"
            >
              COMENZAR
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Render Start Screen
  if (state.status === 'idle') {
    return (
      <div className="min-h-screen bg-[#F3F4F6] flex flex-col items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="bg-[#003876] p-8 text-white text-center relative">
            <button 
              onClick={() => setState(prev => ({ ...prev, status: 'welcome' }))}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              title="Cambiar nombre"
            >
              <User className="w-4 h-4" />
            </button>
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <img 
                src="https://picsum.photos/seed/driving/200/200" 
                alt="Logo" 
                className="w-12 h-12 rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-2xl font-bold mb-1">JR Security Lock</h1>
            <p className="text-blue-100 text-xs mb-1">Simulador para examen para licencia de conducir en RD</p>
            <p className="text-blue-200/60 text-[10px] mb-4 uppercase tracking-widest font-bold">República Dominicana</p>
            <div className="bg-white/10 py-2 px-4 rounded-full inline-block">
              <p className="text-sm font-medium">¡Hola, <span className="font-bold">{userName}</span>!</p>
            </div>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-50 p-2 rounded-lg">
                  <Timer className="w-5 h-5 text-[#003876]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">40 Preguntas</p>
                  <p className="text-sm text-gray-500">Seleccionadas aleatoriamente de un banco de 200+.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-50 p-2 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#003876]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Criterio de Aprobación</p>
                  <p className="text-sm text-gray-500">Mínimo 70% (28 respuestas correctas).</p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 pt-4">
              <button 
                onClick={() => startExam('exam')}
                className="w-full bg-[#003876] hover:bg-[#002a5a] text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
              >
                <Play className="w-5 h-5 fill-current" />
                INICIAR EXAMEN
              </button>
              <button 
                onClick={() => startExam('study')}
                className="w-full bg-white border-2 border-[#003876] text-[#003876] hover:bg-blue-50 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <BookOpen className="w-5 h-5" />
                MODO ESTUDIO
              </button>
              {history.length > 0 && (
                <button 
                  onClick={() => setState(prev => ({ ...prev, status: 'history' }))}
                  className="w-full bg-gray-50 text-gray-600 hover:bg-gray-100 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <History className="w-5 h-5" />
                  VER MI PROGRESO ({history.length})
                </button>
              )}
            </div>
          </div>
        </motion.div>
        <p className="mt-8 text-gray-400 text-xs text-center">
          Este es un simulador independiente para fines de práctica.<br/>
          No es el examen oficial del INTRANT.<br/>
          <span className="mt-2 block font-medium">Creado por Juan Ramon Esteban</span>
        </p>
      </div>
    );
  }

  // Render Exam/Study Screen
  if (state.status === 'exam' || state.status === 'study') {
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const progress = ((state.currentQuestionIndex + 1) / state.questions.length) * 100;
    const isAnswered = state.userAnswers[state.currentQuestionIndex] !== null;

    return (
      <div className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setState(prev => ({ ...prev, status: 'idle' }))}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h2 className="font-bold text-gray-800">Pregunta {state.currentQuestionIndex + 1} de {state.questions.length}</h2>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                    {currentQuestion.categoria}
                  </span>
                </div>
              </div>
            </div>
            
            {state.status === 'exam' && (
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono font-bold ${state.timeLeft < 300 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-gray-50 text-gray-700'}`}>
                <Timer className="w-4 h-4" />
                {formatTime(state.timeLeft)}
              </div>
            )}
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-3xl mx-auto mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-[#003876]"
            />
          </div>
        </header>

        <main className="flex-1 max-w-3xl w-full mx-auto p-4 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={state.currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Question Card */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight mb-8">
                  {currentQuestion.pregunta}
                </h3>

                <div className="space-y-3">
                  {currentQuestion.opciones.map((option, idx) => {
                    const isSelected = state.userAnswers[state.currentQuestionIndex] === idx;
                    const isCorrect = idx === currentQuestion.correcta;
                    const showFeedback = state.status === 'study' && isAnswered;

                    let buttonClass = "w-full p-4 rounded-2xl border-2 text-left transition-all flex items-center gap-4 group ";
                    
                    if (showFeedback) {
                      if (isCorrect) buttonClass += "bg-green-50 border-green-500 text-green-800";
                      else if (isSelected) buttonClass += "bg-red-50 border-red-500 text-red-800";
                      else buttonClass += "bg-white border-gray-100 text-gray-400";
                    } else {
                      if (isSelected) buttonClass += "bg-blue-50 border-[#003876] text-[#003876]";
                      else buttonClass += "bg-white border-gray-100 hover:border-gray-300 text-gray-700";
                    }

                    return (
                      <button
                        key={idx}
                        disabled={showFeedback}
                        onClick={() => handleAnswer(idx)}
                        className={buttonClass}
                      >
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                          isSelected ? 'bg-[#003876] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-base md:text-lg font-medium">{option}</span>
                        {showFeedback && isCorrect && <CheckCircle2 className="ml-auto w-6 h-6 text-green-500" />}
                        {showFeedback && isSelected && !isCorrect && <XCircle className="ml-auto w-6 h-6 text-red-500" />}
                      </button>
                    );
                  })}
                </div>

                {state.status === 'study' && isAnswered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-blue-50 rounded-2xl flex gap-3"
                  >
                    <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-blue-900 mb-1">Explicación:</p>
                      <p className="text-sm text-blue-800 leading-relaxed">{currentQuestion.explicacion}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer Navigation */}
        <footer className="bg-white border-t border-gray-200 p-4 sticky bottom-0">
          <div className="max-w-3xl mx-auto flex gap-3">
            <button
              onClick={prevQuestion}
              disabled={state.currentQuestionIndex === 0}
              className="flex-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 text-gray-700 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>
            <button
              onClick={nextQuestion}
              disabled={!isAnswered && state.status === 'exam'}
              className="flex-[2] bg-[#003876] hover:bg-[#002a5a] disabled:opacity-50 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              {state.currentQuestionIndex === state.questions.length - 1 ? 'Finalizar' : 'Siguiente'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </footer>
      </div>
    );
  }

  // Render Results Screen
  if (state.status === 'finished') {
    const results = calculateResults();

    return (
      <div className="min-h-screen bg-[#F3F4F6] p-4 md:p-8 font-sans">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Result Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className={`p-8 text-center text-white ${results.passed ? 'bg-green-600' : 'bg-red-600'}`}>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {results.passed ? <Award className="w-10 h-10" /> : <AlertTriangle className="w-10 h-10" />}
              </div>
              <h2 className="text-3xl font-black mb-1">
                {results.passed ? '¡APROBADO!' : 'REPROBADO'}
              </h2>
              <p className="text-white/80 font-medium">
                {results.passed 
                  ? 'Has demostrado conocimientos suficientes.' 
                  : 'Necesitas practicar un poco más.'}
              </p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Puntuación</p>
                  <p className={`text-2xl font-black ${results.passed ? 'text-green-600' : 'text-red-600'}`}>
                    {results.percentage}%
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Correctas</p>
                  <p className="text-2xl font-black text-gray-800">{results.correct}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Incorrectas</p>
                  <p className="text-2xl font-black text-gray-800">{results.incorrect}</p>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => setShowReview(!showReview)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  {showReview ? 'Ocultar Revisión' : 'Revisar Examen'}
                </button>
                <button 
                  onClick={() => startExam('exam')}
                  className="w-full bg-[#003876] hover:bg-[#002a5a] text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <RotateCcw className="w-5 h-5" />
                  INTENTAR DE NUEVO
                </button>
                <button 
                  onClick={() => setState(prev => ({ ...prev, status: 'idle' }))}
                  className="w-full bg-white border-2 border-gray-200 text-gray-600 hover:bg-gray-50 font-bold py-4 rounded-2xl transition-all"
                >
                  Volver al Inicio
                </button>
              </div>
            </div>
          </motion.div>

          {/* Review Section */}
          <AnimatePresence>
            {showReview && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-gray-800 px-2">Análisis Detallado</h3>
                {state.questions.map((q, idx) => {
                  const userAns = state.userAnswers[idx];
                  const isCorrect = userAns === q.correcta;
                  
                  return (
                    <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div className={`mt-1 p-1.5 rounded-full shrink-0 ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                          {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                        </div>
                        <div className="space-y-3 w-full">
                          <p className="font-bold text-gray-800 leading-tight">
                            <span className="text-gray-400 mr-2">{idx + 1}.</span>
                            {q.pregunta}
                          </p>
                          
                          <div className="grid gap-2">
                            <div className={`p-3 rounded-xl text-sm ${isCorrect ? 'bg-green-50 border border-green-100 text-green-800' : 'bg-red-50 border border-red-100 text-red-800'}`}>
                              <p className="font-bold mb-1">Tu respuesta:</p>
                              {userAns !== null ? q.opciones[userAns] : 'No respondida'}
                            </div>
                            {!isCorrect && (
                              <div className="p-3 rounded-xl text-sm bg-green-50 border border-green-100 text-green-800">
                                <p className="font-bold mb-1">Respuesta correcta:</p>
                                {q.opciones[q.correcta]}
                              </div>
                            )}
                          </div>

                          <div className="p-4 bg-blue-50 rounded-xl flex gap-3">
                            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-xs text-blue-800 leading-relaxed">
                              {q.explicacion}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Render History Screen
  if (state.status === 'history') {
    return (
      <div className="min-h-screen bg-[#F3F4F6] p-4 md:p-8 font-sans">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setState(prev => ({ ...prev, status: 'idle' }))}
                className="p-2 bg-white hover:bg-gray-100 rounded-full shadow-sm transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-2xl font-bold text-gray-800">Mi Progreso</h1>
            </div>
            <button 
              onClick={clearHistory}
              className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
              title="Borrar historial"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {history.map((attempt) => (
              <motion.div 
                key={attempt.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${attempt.passed ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {attempt.passed ? <Award className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-gray-800">{attempt.score}%</p>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${attempt.mode === 'exam' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                        {attempt.mode === 'exam' ? 'Examen' : 'Estudio'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(attempt.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Timer className="w-3 h-3" />
                        {formatTime(attempt.timeSpent)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Resultado</p>
                  <p className={`font-black ${attempt.passed ? 'text-green-600' : 'text-red-600'}`}>
                    {attempt.passed ? 'APROBADO' : 'FALLIDO'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
