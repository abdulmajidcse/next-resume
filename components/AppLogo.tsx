const AppLogo = (props: { className?: string }) => {
  return (
    <div className={`bg-black p-1 rounded-lg ${props.className}`}>
      <span className="self-center text-3xl font-extrabold whitespace-nowrap theme-text-shadow tracking-tighter">
        AM
      </span>
    </div>
  );
};

export default AppLogo;
