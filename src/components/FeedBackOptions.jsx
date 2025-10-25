

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}    