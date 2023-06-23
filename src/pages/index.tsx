import Demo from "./components/demo"
import Header from "./components/header"
import Intro from "./components/intro"
import Library from "./components/library"

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Library />
      <Demo />
      <h1>Hello World</h1>
    </div>
  )
}
