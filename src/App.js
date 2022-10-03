import Nav from './Nav.js';
import {
  Routes,
  Route,
  Outlet,
  useParams,
  useOutletContext,
  useLocation,
  useNavigate,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <h1>React Router v6</h1>
      </header>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<User />} />
          <Route path="me" element={<UserMe />} />
        </Route>
        <Route path="/loc" element={<Loc />} />
        <Route path="*" element={<Dunno />} />
      </Routes>
    </div>
  );
}

function Loc() {
  const { pathname, search, hash, state } = useLocation();

  return (
    <main>
      <h2>{pathname}</h2>
      <h2>{search}</h2>
      <h3>{hash}</h3>
      <h3>{JSON.stringify(state)}</h3>
    </main>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <h2>This is Home</h2>
      <p>
        <a
          onClick={() => {
            navigate('/users');
          }}
        >
          Go to Users
        </a>
      </p>
    </main>
  );
}

function Users() {
  return (
    <main>
      <h2>This is Users</h2>

      <Outlet context={{ timmy: Date.now() }} />

      <Routes>
        <Route path=":id" element={<User />} />
        <Route path="me" element={<UserMe />} />
      </Routes>
    </main>
  );
}

function User() {
  const { id } = useParams();
  const context = useOutletContext();
  const timmy = context ? context.timmy : '';

  return (
    <main>
      <h2>This is For User {id}</h2>
      <p>The timmy data is {timmy}.</p>
    </main>
  );
}

function UserMe() {
  const context = useOutletContext();
  const timmy = context ? context.timmy : '';
  return (
    <main>
      <h2>This is all about me</h2>
      <p>The timmy data is {timmy}.</p>
    </main>
  );
}

function Dunno() {
  return (
    <main>
      <h2>No idea what page I should show.</h2>
    </main>
  );
}
export default App;
