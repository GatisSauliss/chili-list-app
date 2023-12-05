import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

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
   <h1 className="ml-20 mt-10 mb-3 text-lg ">Product details:</h1>
     {filteredProduct
     ? filteredProduct.map((pro)=>{
      return (
        <>
        <Card sx={{ minWidth: 275 }}>
      <CardContent className="border-4 ml-20 mr-20 mb-20 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">

        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {pro.category +": " + pro.name}
        </Typography>
        <Typography sx={{ mb: 2.5 }} variant="body2">
          {pro.description}
        </Typography>
        <Typography  variant="body2">
          {pro.price + " "+ pro.currency}
        </Typography>
      </CardContent>
    </Card>
        </>
      )
    })
    : null}
    </div>
  );
}

export default ProductCard

