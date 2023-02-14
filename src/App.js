import Context from './context/Context';
import Routes from './routes/Routes';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
    return (
    <>
        <Context>
            <Routes />
        </Context>
        <GlobalStyles />
    </>
    );
}

export default App;