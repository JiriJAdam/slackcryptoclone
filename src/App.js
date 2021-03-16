import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>Hello Bitcoin</h1>

      {/* Header */}
      <Header />

      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* React-Router -> Chat Screen */}
      </div>
    </div>
  );
}

export default App;
