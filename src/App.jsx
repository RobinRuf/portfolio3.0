import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import PrivacyPolicy from "./components/apps/policies/privacy/chinchin";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <Contact />
            <StarsCanvas />
          </div>
        </Route>
        <Route
          path="/apps/policies/privacy/chinchin"
          component={PrivacyPolicy}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
