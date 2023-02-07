import { Main, Catalog } from './Pages';
import { Header } from './Components';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

    
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />} />
                <Route path={`${process.env.PUBLIC_URL}/catalog`} element={<Catalog />} />
                <Route path='*' element={<Navigate to={`${process.env.PUBLIC_URL}/`} replace/>}/>
            </Routes>
            <div>App-page</div>
        </div>
    );
}

export default App;
