


import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'
import client from '../../database/mongodb';

export async function GET(req : NextRequest, res : NextApiResponse) {
  try {
    const { searchParams } = new URL(req.nextUrl);

    const ProductsCollection = await client
        .db("RANA")
        .collection("Products");
    let products : any = []
    
 
    
 
    
    const ProductsQuery =
          await ProductsCollection.find().sort({_id: -1})
       
        .limit(1222)
    
    await ProductsQuery.forEach((doc : any) => {
    
        products.push(doc)
        
      });
      console.log('products: ', products?.length);
    if (!products || products?.length < 1  ) {
      throw 'ERROR: Could not find any products'
    }
    return NextResponse.json({
        success: true,
        data: {
            products
        }
    });
}

catch (error) {
    console.log('error get-cate: ', error);
    return NextResponse.json({
        success: false,
        data: {
            products : null,
            featuredProducts : null
        }
    });
}
}


export const dynamic = 'force-dynamic'