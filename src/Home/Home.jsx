import Video from "../Assets/Autumn.mp4"

const Home = () => {
  return (
    <div className="relative flex items-center justify-center h-screen mb-12 overflow-y-hidden">
      <video
        src={Video}
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        controls="controls"
        autoplay="true"
      />
      <div>
        <a
          href="/products"
          className="relative cursor-pointer z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
        >
          Puff puff pass
        </a>
      </div>
    </div>
  )
}

export default Home
