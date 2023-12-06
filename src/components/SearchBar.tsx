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
    <div className="flex p-5 px-20 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
        <TextField
            className='flex-auto'
            color="warning"
            id="standard-basic"
            label="Search"
            variant="standard"
            type="text"
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export default SearchBar;
