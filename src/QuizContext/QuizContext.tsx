import { createContext, useState, ReactNode } from 'react';

interface QuizContextType {
  page: number;
  setPage: (page: number) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(0);

  return (
    <QuizContext.Provider value={{ page, setPage }}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizProvider;