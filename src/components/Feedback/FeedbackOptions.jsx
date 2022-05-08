const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(option => (
      <li key={option}>
        <button onClick={onLeaveFeedback}>{option}</button>
      </li>
    ))}
  </ul>
);
export default FeedbackOptions;
