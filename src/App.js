import { Main, Catalog } from './Pages';
import { Header } from './Components';
import { Routes, Route } from 'react-router-dom';

function App() {
    const routes = {
        main: '/give-a-tree/dist/',
        catalog: '/give-a-tree/dist/catalog',
    };
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path={routes.main} element={<Main />} />
                <Route exact path={routes.catalog} element={<Catalog />} />
            </Routes>
            <div>App-page</div>
        </div>
    );
}

export default App;
