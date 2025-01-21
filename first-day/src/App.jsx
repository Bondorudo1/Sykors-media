
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import nextIcon from "/icons/pointer.svg";
import CustomCheckbox from "./components/Shared/CustomCheckbox";

function App() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: 0 }}>
        <h1 className="title x-border">КАЛЬКУЛЯТОР СТОИМОСТИ ДОМА</h1>
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
        <section className="materials x-border mt-4">
          <div className="materials-container-titles">
            <div className="upper">
              <h1 className="title" style={{ marginTop: 0 }}>
                СИЛОВОЙ КАРКАС
              </h1>
            </div>
            <h2>Выберите материал, из которого будут составлены стены</h2>
          </div>
          <div className="materials-container-grid">
            <div className="materials-single-container">
              <div className="materials-single">
                <div className="materials-single-img">
                  <img
                    src="./images/house1.png"
                    alt="Brick"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="materials-single-description">
                <div className="materials-single-text">БЛОЧНЫЕ</div>
                <div className="materials-single-type d-flex flex-column">
                  <CustomCheckbox text="Под ключ" />
                  <CustomCheckbox text="Под отделку" />
                </div>
              </div>
            </div>
            <div className="materials-single-container">
              <div className="materials-single">
                <div className="materials-single-img">
                  <img
                    src="./images/house1.png"
                    alt="Brick"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="materials-single-description">
                <div className="materials-single-text">БЛОЧНЫЕ</div>
                <div className="materials-single-type d-flex flex-column">
                  <CustomCheckbox text="Под ключ" />
                  <CustomCheckbox text="Под отделку" />
                </div>
              </div>
            </div>
          </div>
          <div className="materials-buttons d-flex justify-content-between mt-4">
            <button className="btn btn-secondary backward">НАЗАД</button>
            <button className="btn btn-primary forward">ДАЛЛЕЕ</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
