function CVPreview({ cvData }) {
    const contactItems = [
        cvData.location,
        cvData.email,
        cvData.phone,
        cvData.linkedin,
        cvData.github,
    ].filter(Boolean);

    const hasExperience = cvData.experience.some(
        (exp) =>
            exp.company.trim() ||
            exp.role.trim() ||
            exp.startDate.trim() ||
            exp.endDate.trim() ||
            exp.description.trim()
    );

    return (
        <div className="cv-preview-paper">
            <header className="cv-preview-header">
                <h1>{cvData.fullName || "YOUR NAME"}</h1>
                <p className="cv-preview-role">
                    {cvData.jobTitle || "Target Job Title"}
                </p>
                <p className="cv-preview-contact">
                    {contactItems.length > 0
                        ? contactItems.join(" | ")
                        : "City | email@example.com | 08xxxx | linkedin.com/in/username"}
                </p>
            </header>

            <section className="cv-preview-section">
                <h2>PROFESSIONAL SUMMARY</h2>
                <p>{cvData.summary || "Write your professional summary here."}</p>
            </section>

            {hasExperience && (
                <section className="cv-preview-section">
                    <h2>WORK EXPERIENCE</h2>
                    {cvData.experience.map((exp, index) => (
                        <div key={index} className="cv-preview-entry">
                            <div className="cv-preview-entry-head">
                                <div>
                                    <h3>{exp.role || "Job Title"}</h3>
                                    <p className="cv-preview-company">{exp.company || "Company Name"}</p>
                                </div>
                                <span>{exp.startDate || "Start"} - {exp.endDate || "End"}</span>
                            </div>
                            <p>{exp.description || "Describe your responsibilities and achievements here."}</p>
                        </div>
                    ))}
                </section>
            )}

            <section className="cv-preview-section">
                <h2>EDUCATION</h2>
                {cvData.education.map((edu, index) => (
                    <div key={index} className="cv-preview-entry">
                        <div className="cv-preview-entry-head">
                            <div>
                                <h3>{edu.major || "Major"}</h3>
                                <p className="cv-preview-company">{edu.school || "School Name"}</p>
                            </div>
                            <span>
                                {edu.startDate || "Start"} - {edu.endDate || "End"}
                            </span>
                        </div>
                        {edu.description.trim() && <p>{edu.description}</p>}
                    </div>
                ))}
            </section>

            <section className="cv-preview-section">
                <h2>SKILLS</h2>
                {cvData.skills.some((skill) => skill.name.trim() || skill.description.trim()) ? (
                    <ul className="cv-preview-list">
                        {cvData.skills
                            .filter((skill) => skill.name.trim() || skill.description.trim())
                            .map((skill, index) => (
                                <li key={index}>
                                    <strong>{skill.name || "Skill"}</strong>
                                    {skill.description.trim() ? `: ${skill.description}` : ""}
                                </li>
                            ))}
                    </ul>
                ) : (
                    <p>No skills listed.</p>
                )}
            </section>

            {cvData.certifications.filter(Boolean).length > 0 && (
                <section className="cv-preview-section">
                    <h2>CERTIFICATIONS</h2>
                    <ul className="cv-preview-list">
                        {cvData.certifications
                            .filter(Boolean)
                            .map((certificate, index) => <li key={index}>{certificate}</li>)}
                    </ul>
                </section>
            )}
        </div>
    );
}

export default CVPreview;
