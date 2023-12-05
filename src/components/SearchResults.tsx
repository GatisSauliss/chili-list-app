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
          <div key={id} className="w-full -mt-4">
             <List aria-label="products" className="flex pt-10 bg-zinc-50">
            <ListItem disablePadding className="flex hover:bg-orange-300 -mt-2">
            <Link to={`/products/${result.id}`} >
              <ListItemButton className="w-screen flex shadow-inner">
          <ListItemText className="w-auto flex-nowrap text-justify" inset primary={result.name + " ("+ result.category + ")"} />
          <ListItemText primaryTypographyProps={{fontSize: '14px'}} className="w-auto flex-nowrap ml-3 text-orange-800  text-right pr-20" primary={result.price + " " + result.currency}/>
        </ListItemButton>
        </Link>
      </ListItem>
    </List>

          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
