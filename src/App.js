import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { DarkTheme, lightTheme } from "./components/Themes"
import GlobalStyle  from "./globalStyles"
import SoundBar from "./subComponent/SoundBar"

//components ->

import Main  from "./components/Main" ;
import AboutPage  from "./components/AboutPage" ;
import BlogPage  from "./components/BlogPage" ;
import WorkPage  from "./components/WorkPage" ;
import MySkillsPage  from "./components/MySkillsPage" ;
import { AnimatePresence } from "framer-motion";


function App() {
  
  const location = useLocation();
  return <>

  <GlobalStyle/>

    <ThemeProvider theme={lightTheme}>

    <SoundBar />

      {/* using animatepresence for framer motion  */}
    <AnimatePresence exitBeforeEnter>

    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/blog" component={BlogPage}/>
      <Route exact path="/work" component={WorkPage}/>
      <Route exact path="/MySkills" component={MySkillsPage}/>
    </Switch>
    </AnimatePresence>

    </ThemeProvider>


    </>
    
}

export default App

