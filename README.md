# ResuMy IT ATS Matcher Skill Gap Analyzer

## AI integration

The web app calls a local Python AI service that combines the two Colab models:

- The NER model extracts skills from the CV and job description.
- The MicroMLP model calculates the ATS matching score from lexical CV/JD
  features.

The NER notebook saves these files:

```text
ai-service/models/resumy_ner_skill_model.keras
ai-service/models/resumy_ner_skill_artifacts.json
```

The MicroMLP notebook saves these files:

```text
ai-service/models/resumy_micro_mlp.keras
ai-service/models/tfidf_vectorizer.pkl
ai-service/models/scaler.pkl
```

After running each notebook export cell in Colab, download those files from the
notebook model directory and place them in `ai-service/models`.

The datasets are not required to run the web app. They are only needed when you
train the models again or regenerate the exported artifacts.

The current Colab exports were saved with Keras 3.13.x. Use Python 3.12 or
Python 3.13 for the AI service so that its Keras runtime can load those files.
Python 3.10 and Python 3.14 are not suitable for this AI-service environment.

## Run locally

Start the AI service:

```powershell
cd ai-service
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

If the Windows Python launcher is unavailable, make sure `python --version`
prints Python 3.12.x or 3.13.x before creating the venv.

In Git Bash:

```bash
python -m venv .venv
source .venv/Scripts/activate
python -m pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Start the Node backend:

```powershell
cd back-end
npm install
npm run dev
```

Start the React frontend:

```powershell
cd front-end
npm install
npm run dev
```

The backend calls `http://127.0.0.1:8000` by default. Set `AI_SERVICE_URL` for
the backend when the Python service runs at another address.
