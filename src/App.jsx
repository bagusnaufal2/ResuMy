import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UploadSection from "./components/UploadSection";
import DashboardResult from "./components/ResultDashboard";
import "./styles/style.css";

const RESULT_STORAGE_KEY = "analysis-result";

function App() {
  const [result, setResult] = useState(() => {
    const savedResult = sessionStorage.getItem(RESULT_STORAGE_KEY);
    return savedResult ? JSON.parse(savedResult) : null;
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzeError, setAnalyzeError] = useState("");
  const navigate = useNavigate();

  async function handleAnalyze(file) {
    if (!file) return;

    try {
      setIsAnalyzing(true);
      setAnalyzeError("");

      const mockResult = await Promise.resolve({
        score: 75,
        skillsHave: [
          "Node.js",
          "REST API",
          "PostgreSQL",
          "Express.js",
          "Docker",
        ],
        skillsMissing: ["Kubernetes", "Redis", "gRPC"],
        improvements: [
          "Tambahkan keyword yang relevan dengan job description.",
          "Perjelas pengalaman backend pada project section.",
          "Tambahkan skill yang sering dicari recruiter.",
          "Rapikan format CV agar lebih ATS-friendly.",
        ],
      });

      setResult(mockResult);
      sessionStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(mockResult));
      navigate("/result");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setAnalyzeError("Resume analysis failed. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
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
                <UploadSection
                  onAnalyze={handleAnalyze}
                  isAnalyzing={isAnalyzing}
                  analyzeError={analyzeError}
                />
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
  );
}

export default App;
