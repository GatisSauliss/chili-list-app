import { ListItem, ListItemButton, ListItemText, List } from "@mui/material";
import { Link } from "react-router-dom";

interface ResultsProps {
  results: {
    id: number;
    name: string;
    price: string;
    currency: string;
    category: string;
  }[];
}

const SearchResults = ({ results }: ResultsProps) => {
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      
      {results.map((result, id: number) => {
        return (
          <div
            key={id}
            className=" hover:bg-slate-200 p-2 w-1/2 text-center rounded transition-all duration-200"
          >
           
           <Link to={`/products/${result.id}`}>
            <p>text</p>
              </Link>
     
              
        

             <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
            <ListItem disablePadding>
              {/* <Link to={`/products/${result.id}`}>
              </Link> */}
              <ListItemButton  onClick={() => alert(`You click on ${result.name}`)}>
          <ListItemText inset primary={result.name + " " + result.price + " " + result.currency +" " + result.category} />
        </ListItemButton>

              
        
      </ListItem>
    </List>

          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
