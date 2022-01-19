const Balance = () => {
  return (
    <div className="w-full mb-6 text-gray-100 h-40  border-transparent rounded-3xl flex items-center justify-between p-6 space-x-4">
      <div className="w-full bg-[#2F8652] text-gray-100 h-40  border-transparent rounded-3xl flex flex-col items-center justify-between p-2 ">
        <div className="underline">APR</div>
      </div>
      <div className="w-full bg-[#2F8652] text-gray-100 h-40  border-transparent rounded-3xl flex flex-col items-center justify-between p-2 ">
        <div className="underline">TVL</div>
      </div>
      <div className="w-full bg-[#2F8652] text-gray-100 h-40  border-transparent rounded-3xl flex flex-col items-center justify-between p-2 ">
        <div className="underline">REWARDS</div>
      </div>
    </div>
  )
}

export default Balance
