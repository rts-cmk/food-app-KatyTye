import FoodList from '../components/FoodList'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import SearchBar from '../components/SearchBar'

function App() {
  return (
    <>
      <MainHeader />
      <main className="page-content">
        <SearchBar />
        <FoodList source={"../datasets/food.json"} />
      </main>
      <MainFooter />
    </>
  )
}

export default App
