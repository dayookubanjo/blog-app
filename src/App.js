import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route 
            path="/" 
            element={
            <Home />
            }>
          </Route>
          <Route 
            path="/post" 
            element={
              <NewPost />
              }>
          </Route> 
          <Route 
            path="/post/:id" 
            element={
            <PostPage/>
            }>
          </Route>
          <Route 
            path="/edit/:id" 
            element={
            <EditPost/>
            }>
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Missing />}></Route>
        </Routes>
      </DataProvider>  
      <Footer />
    </div>
  );
}

export default App;
