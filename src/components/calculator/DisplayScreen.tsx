type Props = {
  input: string;
  history: string[];
};

export default function DisplayArea({ input, history }: Props) {
  return (
    <section className="row-span-3 bg-dark-gray p-3 relative">
      <ul className="absolute inset-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-black overflow-y-scroll w-fit pr-2">
        {history.map((entry, index) => (
          <li key={index} className="text-lg text-white">{entry}</li>
        ))}
      </ul>
      <h1 className="text-white text-6xl absolute bottom-3 right-3">{input}</h1>
    </section>
  );
}
