import { createContext, useState, ReactNode } from 'react';

export interface QuizContextType {
  page: number;
  setPage: (page: number) => void;
  selectedAnswers: Record<number, number>;
  setSelectedAnswers: (page: number, answerIndex: number)=> void;
}

export const QuizContext = createContext<QuizContextType>({
  page: 0,
  setPage: () => {},
  selectedAnswers: {},
  setSelectedAnswers: () => {}
});

const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(0);
  const [selectedAnswers, setAnswers] = useState<Record<number, number>>({});

  const setSelectedAnswers = (page: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [page]: answerIndex
    }));
  };

  return (
    <QuizContext.Provider value={{ page, setPage, selectedAnswers, setSelectedAnswers }}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizProvider;