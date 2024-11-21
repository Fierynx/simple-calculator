type Props = {
  message: string;
  onClose: () => void;
}

export default function Modal ({
   message, 
   onClose 
} : Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-black p-6 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Error</h2>
        <p className="mb-6">{message}</p>
        <button className="bg-orange-400 font-medium rounded-md px-4 py-2 hover:opacity-80" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};