import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
    return (
        <div className="Home" >
            <h1>Home components</h1>
            <div>
                <img className='img-cart' src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" />
            </div>

            <div className="card text-center" style={{ width: '18rem', margin: 'auto' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTtX43CXpYqHRRdj5waRCoxzoMOg2iw3s3g&s" className="card-img-top" alt="Card image" />
                <div className="card-body">
                    <h3 className="card-title">Mobile Shop</h3>
                    <h3 className="card-title">Lorem ipsum dolor sit amet.</h3>
                    <button className="bg-blue-500 text-white font-medium py-2 px-4 hover:px-5 rounded hover:bg-blue-700 hover:text-gray-200 hover:font-bold ">Click Me</button>
                </div>
            </div>
        </div>
    )
}
export default Home;