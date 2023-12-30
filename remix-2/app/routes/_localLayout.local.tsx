export default function LocalHomepage() {
  return (
    <div>
      <section className="flex">
        <h1 className="flex flex-1 justify-center items-center text-8xl text-blue-800">
          Axios Local
        </h1>
        <img
          src={"/assets/local_postcards.png"}
          width={540}
          height={360}
          alt="Axios Local Postcards"
          className="flex-1"
        />
      </section>
    </div>
  )
}
