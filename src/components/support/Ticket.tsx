export default function Ticket(){
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return(
    <div className="w-[60rem] max-w-full text-center flex flex-col justify-center items-center gap-5 mt-10">
      <h2 className="max-w-[30rem] text-xl text-orange-300 font-bold">Thank you for sending us your report, we will track the problem now</h2>
      <p className="text-lg text-gray-500 font-medium">
        ticket number: 
        <span className="text-lg text-white">
          {randomNumber}
        </span>
      </p>
    </div>
  )
}