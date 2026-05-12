async function analyzeResume(req, res) {
try {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Please upload a PDF, DOC, or DOCX file."
    })
  }

  return res.json({
    success: true,
    message: "Resume analyzed successfully.",
    data: {
    score: 75,
    skillsHave: ["Node.js", "Express.js"],
    skillsMissing: ["React", "SQL"],
    improvements: [
      "Tambahkan skill yang belum tercantum.",
      "Perjelas pengalaman project."
    ]},
    file: {
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      size: req.file.size,
    },
  });
} catch (error) {
  console.error(error);
  return res.status(500).json({
    success: false,
    message: "An error occurred while analyzing the resume."
  });
}
}

export default analyzeResume;