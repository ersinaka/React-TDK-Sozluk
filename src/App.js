import theme from './theme'
import {ThemeProvider, CssBaseline, Grid} from '@mui/material'
import {BrowserRouter,Routes,Route} from "react-router-dom";
//
import Home from './components/Home'
import Bookmarks from './components/Bookmarks'
import Definition from './components/Definition'

const App = () => {
  return (
<ThemeProvider theme={theme}>
  <CssBaseline/>
  <Grid container>
    <Grid item xs={12} sx={{p:2}}>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/bookmarks" element={<Bookmarks />} />
    <Route path="/search/:kelime" element={<Definition />} />
    </Routes>
  </BrowserRouter>
  </Grid>
  </Grid>
</ThemeProvider>
  )
}

export default App