import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((item,_) => <li key={_}><Link href={`/product/${item.id}`}>{item.title}</Link></li>)}
    </ul>
  );
}


export async function getStaticProps(){
  console.log('re-generating again')
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  console.log(data);
  return {  
    props: {
      products: data.products
    },
    revalidate: 10
  }
}

export default HomePage;
