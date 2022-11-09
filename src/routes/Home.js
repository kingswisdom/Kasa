/* ############## - Imports - ############# */

import productList from './../data/productList.json';
import Thumb from './../components/Thumb';
import Banner from './../components/Banner'
import './../styles/Home.css'


/* ############## - Route - ############# */

function Home() {
  return (
    <main className='homepage'>
      <Banner origin="homepage"></Banner>
      <section className='lodging__section'>
        {productList.map((item, index) => (
            <Thumb title={item.title} cover={item.cover} key={item.id} id={item.id} ></Thumb>
        ))}
      </section>
    </main>   
  )
}


/* ############## - Exports - ############# */

export default Home