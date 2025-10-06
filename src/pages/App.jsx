import FoodList from '../components/FoodList'
import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import SearchBar from '../components/SearchBar'

function App() {
  return (
    <>
      <MainHeader />
      <SearchBar />
      <FoodList source={"../datasets/food.json"} />
      <MainFooter />
    </>
  )
}

export default App
