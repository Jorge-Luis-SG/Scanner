import { useEffect, useState } from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export default function ProductData({ barCode }: { barCode: string }) {
    
    const url = 'http:www.prueba.com/'
    const [product, setProduct] = useState({title: barCode, desc: barCode})
    const getProductData = async ()=>{
        try {
            const response = await fetch(url + barCode);
            // const data = await response.json();
            setProduct({title: barCode, desc: barCode})
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        getProductData()
    }, [barCode])
    
  return <ThemedView>
    <ThemedText>
        {product.title}
    </ThemedText>
  </ThemedView>;
}
