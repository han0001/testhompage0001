import React, { useState, useEffect } from "react";
import "./LimitCalculator.css";

function LimitCalculator() {
  const [productName, setProductName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [loadingText, setLoadingText] = useState(0);

  const loadingMessages = [
    "AI가 최적의 한도를 계산중입니다..",
    "시장 가격을 분석중입니다..",
    "대출 조건을 최적화중입니다..",
    "잠시만 기다려주세요..",
  ];

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingText((prev) => (prev + 1) % loadingMessages.length);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadingText(0);

    // AI API 호출 시뮬레이션
    setTimeout(() => {
      setResult({
        productName,
        estimatedLimit: "1,500,000원",
        conditions: "최대 6개월, 연 12%",
      });
      setIsLoading(false);
    }, 10000);
  };

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <div className="calculator-section">
        <div className="section-title">
          <h1>한도계산</h1>
          <p>보유하신 애플 기기의 대출 가능 한도를 간편하게 계산해보세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="calculator-form">
          <div className="input-group">
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="예: iPhone 14 Pro Max 256GB"
              required
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "계산중..." : "한도계산"}
            </button>
          </div>
        </form>

        {isLoading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">{loadingMessages[loadingText]}</p>
          </div>
        )}

        {result && !isLoading && (
          <div className="result-card">
            <h3>계산 결과</h3>
            <div className="result-content">
              <div className="result-item">
                <span className="label">상품명</span>
                <span className="value">{result.productName}</span>
              </div>
              <div className="result-item">
                <span className="label">예상 한도</span>
                <span className="value highlight">{result.estimatedLimit}</span>
              </div>
              <div className="result-item">
                <span className="label">대출 조건</span>
                <span className="value">{result.conditions}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LimitCalculator;
