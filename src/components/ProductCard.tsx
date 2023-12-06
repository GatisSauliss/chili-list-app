import { Card, CardContent, Typography, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom"

interface iResponse{
  id: number;
  name: string;
  price: number;
  currency: string;
  category: string;
  description: string
};

const ProductCard = () => {
  const {id} = useParams();
  const idNumber = Number(id);
  const[pros, setPro] = useState<iResponse[] | null>(null);
useEffect(() =>{
axios.get('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd').then((res) =>{
    setPro(res.data.products);
});
}, []);
const filteredProduct= (pros?.filter(products => products.id === idNumber));

  return(
  <div className="App">

     {filteredProduct
     ? filteredProduct.map((pro)=>{
      return (
        <>
        <Card sx={{ minWidth: 275 }}className=" mt-10" >
            <CardContent className="border-2 rounded-lg border-orange-300  ml-20 mr-20 mb-10 bg-gradient-to-b from-blue-300 via-blue-100 to-blue-300">
                  <Typography sx={{ mb: 1.5 }} className="text-orange-600">
                  {pro.category +": " + pro.name}
                  </Typography>
                  <Typography sx={{ mb: 2.5 }} variant="body2">
                    {pro.description}
                  </Typography>
                  <Typography  variant="body2" className="text-orange-800">
                    {"Price: " + pro.price + " "+ pro.currency}
                  </Typography>
            </CardContent>
    </Card>
        <div className="ml-20">
            <Link to={'/'} >
                <Button  size="medium"  >
                  Return to list
                </Button>
            </Link>
        </div>
        </>
      )
    })
    : null}
    </div>
  );
}

export default ProductCard

