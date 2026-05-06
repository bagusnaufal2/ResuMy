import { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UploadSection from './components/UploadSection';
import DashboardResult from './components/ResultDashboard';
import './styles/style.css';

function App() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  function handleAnalyze(file) {
    if (!file) return;

    const mockResult = {
      score: 75,
      skillsHave: ["Node.js", "REST API", "PostgreSQL", "Express.js", "Docker"],
      skillsMissing: ["Kubernetes", "Redis", "gRPC"],
      improvements: [
        "Tambahkan keyword yang relevan dengan job description.",
        "Perjelas pengalaman backend pada project section.",
        "Tambahkan skill yang sering dicari recruiter.",
        "Rapikan format CV agar lebih ATS-friendly."
      ]
    };

    setResult(mockResult);
    navigate("/result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <HeroSection />
                <UploadSection onAnalyze={handleAnalyze} />
              </>
            )}
          />
          <Route
            path="/result"
            element={
              result ? (
                <main className="result-page">
                  <DashboardResult result={result} />
                </main>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </div>
    </div>
  )

}
export default App;
