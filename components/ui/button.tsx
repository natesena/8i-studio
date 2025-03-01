const Button = ({ text }: { text: string }) => {
  return (
    <button className="text-primary text-2xl hover:bg-primary/10 transition-colors rounded-md font-[400] border border-[#40FD8C] px-2 w-80 py-2 pointer-events-auto">
      {text}
    </button>
  );
};

export { Button };
