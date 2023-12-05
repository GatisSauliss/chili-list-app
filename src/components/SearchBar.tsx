import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  setResults: (results: { name: string }[]) => void;
}

const SearchBar = ({ setResults }: SearchBarProps) => {
  const [input, setInput] = useState('');

  const fetchData = (value: string) => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://run.mocky.io/v3/ab197c98-1e2f-4502-aa26-0e76d32f3c2b')
      .then((response) => response.json())
      .then((json) => {
        if (value === ""){
          setResults(json)
        }
          else{
            const results = json.filter((user: { name: string }) => {
              return (
                value &&
                user &&
                user.name &&
                user.name.toLowerCase().includes(value)
              );
            });

            setResults(results);
          }

      });

  };

  useEffect(() => {
    fetchData("");
  }, []);

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div
      className="flex-row flex justify-center content-center p-4
     bg-green-600 rounded shadow-lg shadow-slate-300 w-full"
    >
  <TextField 
  id="standard-basic" 
  label="Search" 
  variant="standard" 
  type="text"
  placeholder="Type to search..."
  value={input}
  onChange={(e) => handleChange(e.target.value)} />

      {/* <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className="p-2 rounded-e focus:outline-none placeholder-green-600 font-semibold"
      /> */}
    </div>
  );
};

export default SearchBar;
