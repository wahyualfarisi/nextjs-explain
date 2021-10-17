import path from 'path';
import fs from 'fs/promises';

const { Fragment } = require("react");

function ProductDetailPage(props){
    const { loadedProduct } = props;

    if( !loadedProduct ){
        return <p>Loading...</p>
    }

    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>DESCRIPTION</p>
        </Fragment>
    )
}

async function getData(){
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticProps( context ){
    const { params } = context;
    const productId = params.pid;
    const data = await getData();

    const product = data.products.find(product => product.id === productId);

    if(!product){
        return {
            notFound: true
        }
    }
    return {
        props: {
            loadedProduct: product
        }
    }
}

export async function getStaticPaths(){
    const data = await getData();

    const params = data.products.map((item,_) => {
        return {
            params: {
                pid: item.id
            }
        }
    })

    return {
        paths: params,
        fallback: true
    }
}

export default ProductDetailPage;