const ApplicationLogo = (props: { className?: string }) => {
  const { className = "" } = props;
  return (
    <span
      className={`self-center text-3xl font-extrabold whitespace-nowrap theme-text-shadow tracking-tighter ${className}`}
    >
      AM
    </span>
  );
};

export default ApplicationLogo;
