import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import NavigationBar from './routes/navigation/navigation.cpmponent';
import SignIn from './routes/sign-in/signIn.component';

const Shop = () => {
  return (
    <div>
      <h1>I an in shop</h1>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
