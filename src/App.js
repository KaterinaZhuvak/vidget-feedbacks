import { useState } from "react";
import FeedbackOptions from "./components/FeedBackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";
import './App.css';

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeedback = (option) => {
    setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((feedback.good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <div className="App">
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
    </div>
  );
}

export default App;
