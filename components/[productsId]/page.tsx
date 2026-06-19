export default async function productdetailes({params}:
    {
        params:Promise<{productId:string}>;
    }){
   const productId=(await params).productId
    return<h1>product Detailes{productId}</h1>
    
}