function Wavepool({ show }) {
  return (
    <>
       (
        <div className="box-content w-full h-full gb-gray-900 bg-opacity-80">
          <div className="container mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
            <p>I'm a modal</p>
          </div>
          <button type="submit" className="close" onClick={!show}>
            Close me
          </button>
        </div>
      )
    </>
  );
}

export default Wavepool;
