const AppLogo = (props: { className?: string }) => {
  return (
    <span
      className={`self-center text-3xl font-extrabold whitespace-nowrap theme-text-shadow tracking-tighter ${props.className}`}
    >
      AM
    </span>
  );
};

export default AppLogo;
