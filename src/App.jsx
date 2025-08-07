import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/header';
import Main1 from './components/Main1/main1';
import Main2 from './components/Main2/main2';
import Main3 from './components/Main3/main3';
import Main4 from './components/Main4/main4';
import Main5 from './components/Main5/main5';
import Main6 from './components/Main6/main6';
import Main7 from './components/Main7/main7';
import Main8 from './components/Main8/main8';
import Main9 from './components/Main9/main9';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import Courses from './components/Courses/courses';
import Events from './components/Events/events';
import Blog from './components/Blog/blog';
import Contacts from './components/Contacts/contacts';

function App() {
  return (
    <>
      <div className="bg">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main1 />
                <Main2 />
                <Main3 />
                <Main4 />
                <Main5 />
                <Main6 />
                <Main7 />
                <Main8 />
                <Main9 />
                <Footer />
              </>
            }
          />
          
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;