export default function StepList({ steps }) {
  return (
    <ol className="step-list">
      {steps.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  );
}
