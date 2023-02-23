// import logo from './logo.svg';
import './App.css';
import { NavLink,Link, Route, Routes,useParams,Outlet, Navigate} from 'react-router-dom';

// esto es un componente que renderiza un elemento
const Home=() =>{
  return <h1>Home</h1>
}
const SearchPage=() =>{
  const tacos=[
    "pastor",
    "suadero",
    "lengua",
    "quesadilla"
  ]
    console.log(tacos)
  return <div>
    <h1>SearchPage</h1>
    <ul>

    {tacos.map(taco => ( 
      <li>
        <Link key={taco} to={`/tacos/${taco}`}>{taco}</Link>
      </li>
      )
      )}
    </ul>
    </div>
}

const  Tacos= () => {
  // para :name
  const {name}=useParams()
  return ( <div>
    <h4>Tacos</h4>
    {name}
    <br></br>
    {/* navlink que active la clase active cuando esta en el link */}
    <NavLink to="details">Ver details</NavLink> 
    <Outlet></Outlet>
  </div>
  );
}
const  TacoDetails= () => {
  const {name}=useParams()
  return ( 
    <div>
      <h2>Taco details {name}</h2>
    </div>
   );
}

const  Login= () => {
  return ( <h1>Esto es el login</h1> );
}
const  Dashboard= () => {
  return ( <h1>Esto es el dashboard</h1> );
}

const  PrivateRoute= ({element:Elemento}) => {
  // return <Route path='/dashboard' element={props.element}></Route>
  const auth=true;
  return auth?<Elemento></Elemento>:<Navigate to="/login"></Navigate>
}
 

function App() {
  return (
    <div className="App">
      <header>
        <h4>Guilechollo</h4>
        <nav>
          {/* esto hace navegaciones no sirve para spas */}
        {/* <li><a href='/search-page'>Search Page</a></li> */}
        {/* <li><a href='/'>Home</a></li> */}
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search-Page">Search Page</Link></li>
        {/* <li><Link to="/tacos">Tacos</Link></li> */}
        </ul>


        </nav>  
      </header>      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/search-page' element={<SearchPage></SearchPage>}></Route>
        {/* especificad en rutas mas importanes */}
        <Route path='/tacos/super' element={<h2>Super taco</h2>}></Route>
        {/* rutas anidadas */}
        <Route path='/tacos/:name' element={<Tacos></Tacos>}>
          <Route path='details' element={<TacoDetails></TacoDetails>}></Route>
        </Route>
        {/*autenticacin*/}
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/dash' element={<Dashboard></Dashboard>}></Route> */}
        {/* <PrivateRoute element={Dashboard}></PrivateRoute> */}
        <Route path='/dashboard' element={<PrivateRoute element={Dashboard}></PrivateRoute>}></Route>
        {/* 404 soft   */}
        <Route path='/*' element={<h1>Not found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
