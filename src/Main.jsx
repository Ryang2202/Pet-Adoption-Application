import Home from './Home';
import Articles from './Articles';
import Cats from './Cats';
import Registration from './Registration';


function Main({ page, setPage }) {


    return (
        <main>
            {(page === 'Home') && <Home />}
            {(page === 'Articles') && <Articles />}
            {(page === 'Cats') && <Cats setPage={setPage} />}
            {(page === 'Registration') && <Registration />}
        </main>
    );
}

export default Main;