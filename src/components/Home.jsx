import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(props) {
    console.warn("home",props)
    return (
        <div >
            <h1>Home components</h1>
            <div className="card text-center" style={{ width: '18rem', margin: 'auto' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTtX43CXpYqHRRdj5waRCoxzoMOg2iw3s3g&s" className="card-img-top" alt="Card image" />
                <div className="card-body">
                    <h3 className="card-title">Iphone 14pro</h3>
                    <h3 className="card-title">Price: $1400.00</h3>
                    <button onClick={()=>{props.addToCartHandler({price:1400, name:'Iphone 14pro'}) }
                } className="bg-blue-500 text-white font-medium my-1  py-2 px-4 hover:px-5 rounded hover:bg-blue-700 hover:text-gray-200 hover:font-bold ">Add to Cart</button>
                    <button onClick={()=>{props.removeToCartHandler() }
                } className="bg-yellow-500 text-white font-medium  py-2 px-2  hover:px-5 rounded hover:bg-red-700 hover:text-white-200 hover:font-bold ">Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;