import s from './Feedback.module.css';
const FeedbackOptions = ({
  onLeaveFeedbackGood,
  onLeaveFeedbackNeutral,
  onLeaveFeedbackBad,
}) => (
  <ul>
    <li>
      <button type="button" className={s.button} onClick={onLeaveFeedbackGood}>
        good
      </button>
    </li>
    <li>
      <button
        type="button"
        className={s.button}
        onClick={onLeaveFeedbackNeutral}
      >
        neutral
      </button>
    </li>
    <li>
      <button type="button" className={s.button} onClick={onLeaveFeedbackBad}>
        bad
      </button>
    </li>
  </ul>
);
export default FeedbackOptions;
