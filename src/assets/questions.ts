import { Quiz } from "./../types/Quiz";

export const quiz: Quiz = {
  id: "1",
  title: "Anchor Quiz",
  questions: [{
    id: "1",
    text: "What is the name of the king in the Lion King movie?",
    answers: [{
      text: "Mufasa",
      isCorrect: false
    },
      {
        text: "Simba",
        isCorrect: false
      },
      {
        text: "Scar",
        isCorrect: false
      },
      {
        text: "All of the above",
        isCorrect: true
      }]
  },
    {
      id: "2",
      text: "What is water boiling temperature on the moon?",
      answers: [{
        text: "32°C",
        isCorrect: false
      },
        {
          text: "61°C",
          isCorrect: true
        },
        {
          text: "82°C",
          isCorrect: false
        },
        {
          text: "100°C",
          isCorrect: false
        }]
    },
    {
      id: "3",
      text: "What is escape velocity of Earth's gravity?",
      answers: [{
        text: "6.6 km/s",
        isCorrect: false
      },
        {
          text: "11.2 km/s",
          isCorrect: true
        },
        {
          text: "17.4 km/s",
          isCorrect: false
        },
        {
          text: "20.2 km/s",
          isCorrect: false
        }]
    },
    {
      id: "4",
      text: "In what year does this quiz written?",
      answers: [{
        text: "2023",
        isCorrect: false
      },
        {
          text: "2024",
          isCorrect: true
        },
        {
          text: "2025",
          isCorrect: false
        },
        {
          text: "2026",
          isCorrect: false
        }]
    },
    {
      id: "5",
      text: "In what year was Google founded?",
      answers: [{
        text: "1998",
        isCorrect: true
      },
        {
          text: "2000",
          isCorrect: false
        },
        {
          text: "2002",
          isCorrect: false
        },
        {
          text: "2004",
          isCorrect: false
        }]
    }
  ]
}