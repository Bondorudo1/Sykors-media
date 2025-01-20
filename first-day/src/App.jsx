import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import nextIcon from "/icons/pointer.svg";

function App() {
  return (
    <>
      <Header />
      <h1 className="title leftspace mt-5">КАЛЬКУЛЯТОР СТОИМОСТИ ДОМА</h1>
      <section className="steps">
        <div className="steps-container">
          <div className="step">
            <div className="all">
              <div className="upper">
                <div className="counter">1</div>
                <div className="icon-wrap">
                  <img
                    src={nextIcon}
                    alt="Next"
                    className="next-icon"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
              <div className="lower">Проект</div>
            </div>
          </div>

          <div className="step">
            <div className="all">
              <div className="upper">
                <div className="counter">2</div>
                <div className="icon-wrap">
                  <img
                    src={nextIcon}
                    alt="Next"
                    className="next-icon"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
              <div className="lower">Фундамент</div>
            </div>
          </div>

          <div className="step">
            <div className="all">
              <div className="upper">
                <div className="counter">3</div>
                <div className="icon-wrap">
                  <img
                    src={nextIcon}
                    alt="Next"
                    className="next-icon"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
              <div className="lower">Каркас и стены</div>
            </div>
          </div>

          <div className="step">
            <div className="all">
              <div className="upper">
                <div className="counter">4</div>
                <div className="icon-wrap">
                  <img
                    src={nextIcon}
                    alt="Next"
                    className="next-icon"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
              <div className="lower"> Коммуникации</div>
            </div>
          </div>

          <div className="step">
            <div className="all">
              <div className="upper">
                <div className="counter">5</div>
                <div className="icon-wrap">
                  <img
                    src={nextIcon}
                    alt="Next"
                    className="next-icon"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
              <div className="lower">Крыша</div>
            </div>
          </div>

          <div className="step">
            <div className="all">
              <div className="upper">
                <div className="counter">6</div>
                <div className="icon-wrap">
                  <img
                    src={nextIcon}
                    alt="Next"
                    className="next-icon"
                    style={{ color: "black" }}
                  />
                </div>
              </div>
              <div className="lower">Данные</div>
            </div>
          </div>
        </div>
      </section>
      <section className="materials">
        <div className="materials-container-titles">
          <div className="upper">
            <h1 className="title">СИЛОВОЙ КАРКАС</h1>
          </div>
            <h2>Выберите материал, из которого будут составлены стены</h2>
        </div>
        <div className="materials-container-grid">
          <div className="materials-single-container">
            <div className="materials-single">
              <div className="materials-single-img">
                <img src="./images/house1.svg" alt="Brick" className="img-fluid" />
              </div>
              <div className="materials-single-text">Блочные</div>
              <div className="materials-single-type">
                <label>
                  <input type="checkbox" name="example" />
                  Под ключ
                </label>
                <label>
                  <input type="checkbox" name="example" />
                  Под отделку
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
