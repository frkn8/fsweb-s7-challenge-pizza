import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Anasayfa from "./Anasayfa";
import Pizza from "./Pizza";
import Success from "./Success";

const App = () => {
  const [siparisler, setSiparisler] = useState([]);

  const handleSiparisEkle = (siparis) => {
    setSiparisler([...siparisler, siparis]);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Anasayfa />
          </Route>
          <Route path="/pizza">
            <Pizza addSiparis={handleSiparisEkle} />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
        
    <footer>
      <div className="footer">
        <div className="shrink">
          <div className="footer-column">
            <div className="footer-sol">
              <div className="column">
                <h2 className="footer-logo">Teknolojik <br />Yemekler</h2>
                <div className="adres">
                  <img src="https://github.com/frkn8/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/icons/icon-1.png?raw=true"></img>
                  <p>341 Londonderry Road, İstanbul/Türkiye</p>
                </div>
                <div className="mail">
                  <img src="https://github.com/frkn8/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/icons/icon-2.png?raw=true"></img>
                  <p>aciktim@teknolojikyemekler.com</p>
                </div>
                <div className="iletisim">
                  <img src="https://github.com/frkn8/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/icons/icon-3.png?raw=true"></img>
                  <p>+90 216 123 45 67</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <div className="sicacik">
              <h3>Sıccacık Menüler</h3>
              <div className="menulistesi">
                <p>Terminal Pizza</p>
                <p>5 kişilik Hackatlon Pizza</p>
                <p>useEffect Tavuklu Pizza</p>
                <p>Beyaz Console Frostly</p>
                <p>Position Absolute Acı Burger</p>
                <p>Testler Geçti Mutlu Burger</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shrink">
          <div className="footer-column">
            <div className="column-insta">
              <h3>İnstagram</h3>
              <div className="insta">
                <div className="insta1">
                  <img
                    src="https://github.com/frkn8/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/insta/li-0.png?raw=true"
                    width={50}
                  ></img>
                  <img
                    src="https://github.com/frkn8/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/insta/li-1.png?raw=true"
                    width={50}
                  ></img>
                  <img
                    src="https://github.com/frkn8/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/insta/li-2.png?raw=true"
                    width={50}
                  ></img>
                </div>
                <div className="insta2">
                  <img
                    src="https://github.com/frkn8/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/insta/li-3.png?raw=true"
                    width={50}
                  ></img>
                  <img
                    src="https://github.com/frkn8/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/insta/li-4.png?raw=true"
                    width={50}
                  ></img>
                  <img
                    src="https://github.com/frkn8/fsweb-s7-challenge-pizza/blob/main/Assets/adv-aseets/insta/li-5.png?raw=true"
                    width={50}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  


        
      </Router>
    </>
  );
};
export default App;