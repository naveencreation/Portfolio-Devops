export default function AmbientBackdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__grid" />
      <div className="backdrop__glow" />
      <div className="backdrop__grain" />
    </div>
  );
}
