import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LimitCalculator from "./pages/LimitCalculator";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <body>
        <header>
          <div className="container">
            <div className="header-content">
              <div className="logo">애플전당포</div>
              <Navigation />
            </div>
          </div>
        </header>
        <Routes>
          <Route
            path="/limit-calculator"
            element={
              <>
                <LimitCalculator />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <section className="hero">
                  <div className="container">
                    <h1>
                      애플 기기로
                      <br />
                      쉽고 빠르게
                      <br />
                      현금 마련하세요
                    </h1>
                    <p>
                      복잡한 서류 없이 내 애플 기기만으로 빠르게 담보대출을 받을
                      수 있습니다. 간편한 온라인 신청으로 최대 5분 내 심사 완료!
                    </p>
                    <a className="btn btn-primary" href="#cta">
                      지금 신청하기
                    </a>
                  </div>
                </section>
                <section className="features" id="features">
                  <div className="container">
                    <div className="section-title">
                      <h2>더 쉽고 편리한 담보대출</h2>
                      <p>
                        복잡한 절차와 서류 없이 당신의 애플 기기만으로 쉽고
                        빠르게 대출을 받으세요.
                      </p>
                    </div>
                    <div className="feature-grid">
                      <div className="feature-card">
                        <div className="feature-icon">💰</div>
                        <h3>빠른 현금화</h3>
                        <p>
                          온라인 신청 후 최대 5분 내 심사 완료, 당일 입금
                          가능합니다.
                        </p>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>모든 애플 기기 가능</h3>
                        <p>
                          아이폰, 맥북, 아이패드 등 모든 애플 기기로 담보대출이
                          가능합니다.
                        </p>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>안전한 관리</h3>
                        <p>
                          담보로 맡긴 기기는 전문 보관소에서 안전하게
                          관리됩니다.
                        </p>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">✅</div>
                        <h3>간편한 서류</h3>
                        <p>
                          신분증만 있으면 누구나 간편하게 신청할 수 있습니다.
                        </p>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">💼</div>
                        <h3>합리적인 금리</h3>
                        <p>
                          시중 대출보다 낮은 금리로 부담 없이 이용 가능합니다.
                        </p>
                      </div>
                      <div className="feature-card">
                        <div className="feature-icon">🔄</div>
                        <h3>유연한 상환</h3>
                        <p>
                          원하는 기간 내 자유롭게 상환할 수 있는 유연한 조건을
                          제공합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="how-it-works" id="how">
                  <div className="container">
                    <div className="section-title">
                      <h2>이용 방법</h2>
                      <p>간단한 3단계로 빠르게 대출을 받을 수 있습니다.</p>
                    </div>
                    <div className="steps">
                      <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                          <h3>온라인 신청</h3>
                          <p>
                            웹사이트나 앱에서 기기 정보와 함께 간단한 정보를
                            입력하여 신청합니다.
                          </p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                          <h3>기기 평가 및 심사</h3>
                          <p>
                            기기 상태와 모델에 따라 대출 가능 금액을 평가하고
                            빠르게 심사합니다.
                          </p>
                        </div>
                      </div>
                      <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                          <h3>담보 예치 및 입금</h3>
                          <p>
                            가까운 지점에 기기를 맡기고 즉시 계좌로 대출금을
                            받으세요.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="testimonials" id="testimonials">
                  <div className="container">
                    <div className="section-title">
                      <h2>고객 후기</h2>
                      <p>
                        애플전당포를 이용한 고객들의 생생한 후기를 확인해보세요.
                      </p>
                    </div>
                    <div className="testimonial-grid">
                      <div className="testimonial-card">
                        <p className="testimonial-text">
                          "급하게 돈이 필요했는데 애플전당포 덕분에 맥북으로
                          당일에 바로 대출받을 수 있었어요. 절차도 간단하고
                          직원분들도 친절해서 정말 만족스러웠습니다."
                        </p>
                        <div className="testimonial-author">
                          <div className="author-avatar"></div>
                          <div>
                            <div className="author-name">김민준</div>
                            <div className="author-role">직장인, 32세</div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-card">
                        <p className="testimonial-text">
                          "다른 대출은 신용등급 때문에 어려웠는데, 여기서는 제
                          아이폰만으로 대출이 가능해서 정말 도움이 됐어요. 상환
                          기간도 유연해서 부담 없이 이용했습니다."
                        </p>
                        <div className="testimonial-author">
                          <div className="author-avatar"></div>
                          <div>
                            <div className="author-name">이지은</div>
                            <div className="author-role">프리랜서, 28세</div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-card">
                        <p className="testimonial-text">
                          "학생이라 대출받기 어려웠는데 애플전당포에서는 제
                          아이패드로 필요한 만큼만 빌릴 수 있어서 좋았어요.
                          등록금 마련에 큰 도움이 되었습니다."
                        </p>
                        <div className="testimonial-author">
                          <div className="author-avatar"></div>
                          <div>
                            <div className="author-name">박서준</div>
                            <div className="author-role">대학생, 23세</div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-card">
                        <p className="testimonial-text">
                          "사업자금이 급하게 필요했는데 애플전당포를 통해 맥북
                          프로로 필요한 금액을 빠르게 마련할 수 있었습니다. 상환
                          후 기기도 깨끗하게 돌려받았어요."
                        </p>
                        <div className="testimonial-author">
                          <div className="author-avatar"></div>
                          <div>
                            <div className="author-name">최수민</div>
                            <div className="author-role">자영업자, 35세</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="cta" id="cta">
                  <div className="container">
                    <h2>지금 바로 신청하세요</h2>
                    <p>
                      복잡한 절차 없이 지금 바로 애플 기기로 쉽고 빠르게 현금을
                      마련하세요.
                    </p>
                    <a className="btn btn-primary" href="#">
                      대출 신청하기
                    </a>
                  </div>
                </section>
                <Footer />
              </>
            }
          />
        </Routes>
      </body>
    </Router>
  );
}

export default App;
