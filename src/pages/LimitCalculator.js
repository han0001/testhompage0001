import React, { useState, useEffect } from "react";
import "./LimitCalculator.css";

function ChartAnimation() {
  const [currentData, setCurrentData] = useState(0);

  const chartData = [
    {
      title: "iPhone 14 Pro Max 시세",
      stats: {
        volume: "+12.5%",
        price: "1,450,000원",
        trend: "상승",
      },
      points: [35, 42, 38, 45, 50, 48, 55, 52],
    },
    {
      title: "MacBook Pro M2 시세",
      stats: {
        volume: "+8.3%",
        price: "2,150,000원",
        trend: "안정",
      },
      points: [40, 38, 42, 41, 39, 43, 40, 42],
    },
    {
      title: "iPad Pro 시세",
      stats: {
        volume: "+15.2%",
        price: "950,000원",
        trend: "급등",
      },
      points: [30, 35, 40, 45, 50, 55, 60, 65],
    },
    {
      title: "Apple Watch 시세",
      stats: {
        volume: "+5.7%",
        price: "350,000원",
        trend: "하락",
      },
      points: [50, 45, 40, 35, 30, 25, 20, 15],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData((prev) => (prev + 1) % chartData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart-container">
      <div className="chart-title">{chartData[currentData].title}</div>
      <div className="chart">
        <div className="chart-line"></div>
        <div className="chart-points">
          {chartData[currentData].points.map((height, i) => (
            <div
              key={i}
              className="chart-point"
              style={{
                animationDelay: `${i * 0.15}s`,
                height: `${height}px`,
              }}
            ></div>
          ))}
        </div>
        <div className="chart-labels">
          <span>1월</span>
          <span>2월</span>
          <span>3월</span>
          <span>4월</span>
          <span>5월</span>
          <span>6월</span>
        </div>
      </div>
      <div className="chart-stats">
        <div className="stat-item">
          <span className="stat-label">최근 거래량</span>
          <span className="stat-value">
            {chartData[currentData].stats.volume}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">평균 가격</span>
          <span className="stat-value">
            {chartData[currentData].stats.price}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">시장 동향</span>
          <span className="stat-value">
            {chartData[currentData].stats.trend}
          </span>
        </div>
      </div>
    </div>
  );
}

function LimitCalculator() {
  const [productName, setProductName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [loadingText, setLoadingText] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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

        <ChartAnimation />
      </div>
    </div>
  );
}

export default LimitCalculator;
