import QuizPage from "./Pages/Quiz/QuizPage";
import QuizProvider from "./QuizContext/QuizContext";

const App = () => {
  return (
    <QuizProvider>
      <QuizPage />
    </QuizProvider>
  );
}

export default App;
