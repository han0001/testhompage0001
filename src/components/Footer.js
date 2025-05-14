import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">애플전당포</div>
            <p className="footer-description">
              애플 기기 담보대출 전문 서비스로, 빠르고 편리한 금융 솔루션을
              제공합니다.
            </p>
          </div>
          <div>
            <h4 className="footer-heading">서비스</h4>
            <ul className="footer-links">
              <li>
                <a href="#">아이폰 담보대출</a>
              </li>
              <li>
                <a href="#">맥북 담보대출</a>
              </li>
              <li>
                <a href="#">아이패드 담보대출</a>
              </li>
              <li>
                <a href="#">애플워치 담보대출</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">회사</h4>
            <ul className="footer-links">
              <li>
                <a href="#">회사 소개</a>
              </li>
              <li>
                <a href="#">이용약관</a>
              </li>
              <li>
                <a href="#">개인정보처리방침</a>
              </li>
              <li>
                <a href="#">자주 묻는 질문</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">고객센터</h4>
            <ul className="footer-links">
              <li>
                <a href="#">연락처: 02-123-4567</a>
              </li>
              <li>
                <a href="#">이메일: help@applepawn.co.kr</a>
              </li>
              <li>
                <a href="#">운영시간: 평일 9AM-6PM</a>
              </li>
              <li>
                <a href="#">문의하기</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2023 애플전당포. All rights reserved.</p>
          <div className="social-links">
            <a href="#">F</a>
            <a href="#">I</a>
            <a href="#">T</a>
            <a href="#">Y</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
