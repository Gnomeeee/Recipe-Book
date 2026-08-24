export default function Section({ title, children }) {
  return (
    <div className="section-wrap">
      <h3 className="section-title">{title}</h3>
      {children}
    </div>
  );
}
