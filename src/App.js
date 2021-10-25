import Header from './components/header/Header';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Context from './context/Context';
import ArticleCardDetails from './components/home/SingleArticle/ArticleCardDetils/ArticleCardDetails';
import Footer from './components/footer/Footer';
import NotFound from './components/notfound/NotFound';
import DinamicRoute from './components/DinamicRoute/DinamicRoute';
import Cart from './components/Cart/Cart';




function App() {
  return (
    <div className="App">
 
<Context> 
<BrowserRouter>
<Header></Header>

<Switch>
  <Route exact path='/'>
    <Home></Home>
  </Route>
  <Route path='/home'>
    <Home></Home>
  </Route>
  <Route path='/login'>
  <Login></Login>
  </Route>
  <Route path='/singleArticle/:kam'>
<ArticleCardDetails></ArticleCardDetails>
  </Route>
  <Route path='/ServiceCard1/:dam'>
 <DinamicRoute />
  </Route>
  

  <Route path='/cart'>
  <Cart></Cart>
  </Route>
 

  <Route path='*'>
<NotFound />
  </Route>

</Switch>
<Footer></Footer>
</BrowserRouter>
</Context>
    </div>
  );
}

export default App;
