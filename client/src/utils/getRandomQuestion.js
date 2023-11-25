import { QUESTION_LIST } from '../data/questionList';

const getRandomQuestion = () => {
  return QUESTION_LIST[Math.floor(Math.random() * (QUESTION_LIST.length + 1))];
};

export default getRandomQuestion;
