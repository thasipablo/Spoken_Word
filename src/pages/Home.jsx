import LeftZone from "./layouts/LeftZone"
import MainZone from "./layouts/MainZone"

const Home = () => {
  return (
    <main className="flex">
      <section>
        <LeftZone />
      </section>
      <section>
        <MainZone />
      </section>
    </main>
  )
}

export default Home