function CVPreview({ cvData }) {
    const formatDate = (dateString) => {
        if (!dateString) return "";

        const date = new Date(dateString);
        if (Number.isNaN(date.getTime())) return dateString;

        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
        }).format(date);
    };

    const contactItems = [
        cvData.location && <span key="location">{cvData.location}</span>,
        cvData.email && <span key="email">{cvData.email}</span>,
        cvData.phone && <span key="phone">{cvData.phone}</span>,
        cvData.linkedin && (
            <a key="linkedin" href={cvData.linkedin} target="_blank" rel="noreferrer">
                {cvData.linkedin}
            </a>
        ),
        cvData.github && (
            <a key="github" href={cvData.github} target="_blank" rel="noreferrer">
                {cvData.github}
            </a>
        ),
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
        <div id="cv-preview" className="cv-preview-paper">
            <header className="cv-preview-header">
                <h1>{cvData.fullName || "YOUR NAME"}</h1>
                <p className="cv-preview-role">
                    {cvData.jobTitle || "Target Job Title"}
                </p>
                <p className="cv-preview-contact">
                    {contactItems.length > 0 ? (
                        contactItems.map((item, index) => (
                            <span key={index}>
                                {index > 0 && " | "}
                                {item}
                            </span>
                        ))
                    ) : (
                        "City | email@example.com | 08xxxx | linkedin.com/in/username"
                    )}
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
                                <span>
                                    {formatDate(exp.startDate) || "Start"} - {exp.isCurrent ? "Present" : formatDate(exp.endDate) || "End"}
                                </span>
                            </div>
                            <p className="cv-preview-description">
                                {exp.description || "Describe your responsibilities and achievements here."}
                                </p>
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
                                {edu.gpa && <p className="cv-preview-meta">GPA: {edu.gpa}</p>}
                            </div>
                            <span>
                                {formatDate(edu.startDate) || "Start"} - {edu.isCurrent ? "Present" : formatDate(edu.endDate) || "End"}
                            </span>
                        </div>
                        {edu.description.trim() && <p>{edu.description}</p>}
                    </div>
                ))}
            </section>

            <section className="cv-preview-section">
                <h2>SKILLS</h2>
                {cvData.skills.some((skill) => skill.name.trim() || skill.description.trim()) ? (
                    <div className="cv-preview-skill-block">
                        {cvData.skills
                            .filter((skill) => skill.name.trim() || skill.description.trim())
                            .map((skill, index) => (
                                <p key={index}>
                                    <strong>{skill.name || "Skill"}</strong>
                                    {skill.description.trim() ? `: ${skill.description}` : ""}
                                </p>
                            ))}
                    </div>
                ) : (
                    <p>No skills listed.</p>
                )}
            </section>

            {cvData.certifications.some(
                (certificate) => certificate.name.trim() || certificate.description.trim()
            ) && (
                <section className="cv-preview-section">
                    <h2>CERTIFICATIONS</h2>
                    {cvData.certifications
                        .filter(
                            (certificate) =>
                                certificate.name.trim() || certificate.description.trim()
                        )
                        .map((certificate, index) => (
                            <div key={index} className="cv-preview-entry">
                                <div className="cv-preview-entry-head">
                                    <div>
                                        <h3>{certificate.name || "Certification"}</h3>
                                    </div>
                                    {(certificate.startDate || certificate.endDate) && (
                                        <span>
                                            {formatDate(certificate.startDate) || "Start"} - {certificate.isCurrent ? "Present" : formatDate(certificate.endDate) || "End"}
                                        </span>
                                    )}
                                </div>
                                {certificate.description.trim() && <p>{certificate.description}</p>}
                            </div>
                        ))}
                </section>
            )}
        </div>
    );
}

export default CVPreview;
