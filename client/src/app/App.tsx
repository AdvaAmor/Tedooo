import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { StyledAppContainer } from './style/app.sc';
import Feed from '../feed/components/Feed';
import Navbar from './Navbar';
import Theme from '../common/theme';


function App() {
  return (
    <Theme> 
    <BrowserRouter>
    <StyledAppContainer>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
    </StyledAppContainer>
    </BrowserRouter>
 </Theme>
  );
}

export default App;
