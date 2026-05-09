async function analyzeResume(req, res) {
  try {
    return res.json({
      success: true,
      data: {
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
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to analyze resume",
    });
  }
}

export default analyzeResume;
