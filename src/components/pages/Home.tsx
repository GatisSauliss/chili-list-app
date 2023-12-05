import { useState } from 'react'
import SearchBar from "../SearchBar"
import SearchResults from '../SearchResults'


interface AppProps {
  setResults: (results: { name: string }[]) => void;
  // results: { name: string }[];
  results:any[];
}

const Home = () => {
  const [results, setResults] = useState<AppProps['results']>([])

  return (
    <div>
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
    </div>
  )
}

export default Home