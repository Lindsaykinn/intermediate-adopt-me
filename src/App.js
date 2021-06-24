import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Details from "./Details";

import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaton Terrier",
//     }),
//   ]);
// };

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div
        className="p-0 m-0"
        style={{
          background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg",
        }}
      >
        <Router>
          <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
            <Link to="/" className="text-6xl text-white hover:text-gray-300">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
