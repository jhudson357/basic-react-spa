import { Link, useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  function navigateHandler() {
    navigate('/products')
  }
  
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to='/products'>the list of products.</Link>
      </p>
      {/* Should not create buttons and then navigate programatically (Navigate button below). You could just use link (Products button below). Example is to show how useNavigate works */}
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
      {/* <Link to='/products'>
        <button>Products</button>
      </Link> */}
    </>
  )
}

export default Home