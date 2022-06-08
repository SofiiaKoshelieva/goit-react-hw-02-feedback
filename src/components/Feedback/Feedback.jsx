import { useState } from 'react';
import Notification from './Notification';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  function positivePercentage() {
    const sum = good + neutral + bad;
    const percentage = (good / total) * 100;
    return sum ? Math.round(percentage) + '%' : 0;
  }
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedbackGood={() => {
            setGood(prevState => prevState + 1);
          }}
          onLeaveFeedbackNeutral={() => {
            setNeutral(prevState => prevState + 1);
          }}
          onLeaveFeedbackBad={() => {
            setBad(prevState => prevState + 1);
          }}
        />
      </Section>

      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
