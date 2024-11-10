
import {connect} from 'react-redux'
import Home from "../components/Home";
import {addToCart} from '../Services/Actions/Action'
import {removeToCart} from '../Services/Actions/Action'

const mapStateToProps=state=>({
//    data:state
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home;