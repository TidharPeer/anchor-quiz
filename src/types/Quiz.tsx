export type Answer = {
  text: string;
  isCorrect: boolean;
  isSelected?: boolean;
}

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
}

export type Quiz = {
  score?: number;
  questions: Question[];
  id: string;
  title: string;
}