import FlexColumn from "./../../components/common/FlexColumn";
import FlexRow from "./../../components/common/FlexRow";
import { QuizContext, QuizContextType } from "./../../QuizContext/QuizContext";
import { useContext, useMemo } from "react";
import { quiz } from "./../../assets/questions";
import ConditionalRender from "./../../components/common/ConditinalRender";
import { Answer } from "./../../types/Quiz";

const QuizPage = () => {
  const { page, setPage, selectedAnswers, setSelectedAnswers } = useContext<QuizContextType>(QuizContext);
  const quizLength = quiz.questions.length;
  const question = useMemo(() => page < quizLength ? quiz.questions[page] : null, [page]);

  const calculateScore = () => {
    const singleQuestionScore = 100 / quizLength;
    return quiz.questions.reduce((acc: number, curr, index) => {
      const correctAnswerIndex = curr.answers.findIndex((answer) => answer.isCorrect);
      if (selectedAnswers[index] === correctAnswerIndex) {
        return acc + singleQuestionScore;
      }

      return acc;
    }, 0);
  }

  return (
      <FlexColumn width="100vw" height="100vh">
        <FlexRow height="80px" flex="0 0 80px" justify="center" alignItems="center">
          <h1>{ quiz.title } - {page < quizLength ? `page ${page + 1}` : `Score`}</h1>
        </FlexRow>
        <FlexColumn width="100%" flex="1 1 auto" justify="center" alignItems="center">
          <ConditionalRender condition={page < quizLength}>
            <FlexColumn gap="20px">
              <h2>{question?.text}</h2>
              {question?.answers.map((answer: Answer, index: number) => (
                <label key={index}>
                  <input
                    type="radio"
                    name={`question-${page}`}
                    value={index}
                    checked={selectedAnswers[page] === index}
                    onChange={() => setSelectedAnswers(page, index)}
                  />
                  {answer.text}
                </label>
              ))}
            </FlexColumn>
          </ConditionalRender>
          <ConditionalRender condition={page === quizLength}>
            <FlexColumn gap="20px">
              <h2>Your score is {calculateScore().toFixed(0)}</h2>
            </FlexColumn>
          </ConditionalRender>
        </FlexColumn>
        <FlexRow height="80px" flex="0 0 80px" justify="space-around" alignItems="center">
          <ConditionalRender condition={page > 0 && page < quizLength}>
            <button onClick={() => setPage(page - 1)}>Prev</button>
          </ConditionalRender>
          <ConditionalRender condition={page < quizLength - 1}>
            <button onClick={() => setPage(page + 1)}>Next</button>
          </ConditionalRender>
          <ConditionalRender condition={page === quizLength - 1}>
            <button onClick={() => setPage(page + 1)}>Submit</button>
          </ConditionalRender>
        </FlexRow>
      </FlexColumn>
  );
};

export default QuizPage;