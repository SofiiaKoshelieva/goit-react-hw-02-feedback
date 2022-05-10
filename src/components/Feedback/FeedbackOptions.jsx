import s from './Feedback.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(option => (
      <li key={option}>
        <button className={s.button} onClick={onLeaveFeedback}>
          {option}
        </button>
      </li>
    ))}
  </ul>
);
export default FeedbackOptions;
