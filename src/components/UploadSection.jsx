import { useState } from "react";
import { FaCloudUploadAlt, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const techList = [
  {
    icon: <FaReact />,
    label: "React",
    description: "Builds a responsive and interactive user interface.",
  },
  {
    icon: <FaNodeJs />,
    label: "Node.js",
    description: "Handles backend logic and service communication.",
  },
  {
    icon: <FaPython />,
    label: "Python",
    description: "Supports parsing and intelligent resume analysis.",
  },
  {
    icon: <SiPostgresql />,
    label: "PostgreSQL",
    description: "Stores structured resume and scoring data securely.",
  },
];

function UploadSection({ onAnalyze }) {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  function handleAnalyzeClick() {
    if (file) {
      onAnalyze(file);
    }
  }
  return (
    <section className="upload-section" id="upload-cv">
      <div className="section-heading">
        <span className="section-kicker">Resume Upload</span>
        <h2 className="upload-title">
          Upload your resume and get a match report
        </h2>
        <p className="upload-subtitle">
          Drop a PDF or DOCX file and let ResuMy check ATS compatibility,
          highlight missing skills, and prepare your next revision.
        </p>
      </div>

      <label className="upload-box">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          hidden
        />
        <div className="upload-icon">
          <FaCloudUploadAlt />
        </div>
        <p>
          <strong>Click to Upload</strong>{" "}
        </p>
        <br />
        input your cv or select from your computer.
        <br />
        PDF, DOC, DOCX
        {file && <span className="file-name">{file.name}</span>}
      </label>
      <div className="upload-actions">
        <button
          className="primary-button"
          onClick={handleAnalyzeClick}
          disabled={!file}
        >
          Analyze Your CV
        </button>
      </div>

      <div className="tech-strip" id="tech">
        <p className="tech-strip-description">
          Built with a modern stack for lightning-fast analysis and seamless
          resume processing.
        </p>
        <div className="tech-logos">
          {techList.map((tech) => (
            <div
              className="tech-logo-item"
              key={tech.label}
              aria-label={tech.label}
              title={tech.label}
            >
              <span className="tech-logo-icon">{tech.icon}</span>
              <div className="tech-logo-copy">
                <span className="tech-logo-text">{tech.label}</span>
                <span className="tech-logo-description">
                  {tech.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UploadSection;
