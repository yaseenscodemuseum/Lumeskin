DermaAI - AI-Powered Skin Diagnostic Platform
The official monorepo for DermaAI. This repository contains all source code and technical assets for the project, including the machine learning models, backend API, and frontend application.

🚀 Project Overview
DermaAI is a cutting-edge tool designed to provide "Precision dermatology at the speed of AI." By analyzing user-submitted images, our platform leverages advanced computer vision models to detect, classify, and provide information on various skin conditions. Our mission is to make initial skin analysis accessible, informative, and instantaneous.

📂 Repository Structure
This repository is structured as a monorepo to streamline development and ensure all components are synchronized. The main directories are outlined below.

🧠 /ml/ - Machine Learning & AI
This directory houses the core intelligence of our platform. All work related to data analysis, model training, experimentation, and evaluation resides here.

Purpose: To develop and iterate on the computer vision models that power our diagnostic engine.

Contents:

/notebooks: Experimental Jupyter/Colab notebooks for training and analysis.

/scripts: Reusable Python scripts for data processing or training.

/data: Configuration files (.yaml) that define our datasets and classes.

Primary Owners:

Yaseen (CTO)

Data Scientist

⚙️ /backend/ - API & Server Logic
This directory contains the server-side application that exposes our ML model's predictions to the outside world. It acts as the bridge between our AI engine and the user-facing application.

Purpose: To build a scalable, low-latency REST API that can process image requests and return structured diagnostic data.

Contents:

FastAPI application source code.

Model integration logic.

API testing scripts and documentation.

Primary Owner:

AK (CEO)

🖥️ /frontend/ - Web Application
This directory contains the user-facing web application. It is responsible for the user interface (UI) and user experience (UX), allowing users to upload images and view their results in a clear and intuitive way.

Purpose: To create a responsive, secure, and user-friendly web platform that interacts with our backend API.

Contents:

React / Next.js source code.

HTML, CSS, and component files.

Frontend deployment configurations.

Primary Owner:

Full Stack Developer

🎨 /design/ - UI/UX Assets
This directory contains all design files, mockups, and brand assets. It is the source of truth for the platform's visual identity and user experience.

Purpose: To house all visual design work, from initial wireframes to high-fidelity prototypes.

Contents:

Figma design files.

User flow diagrams.

Brand logos and style guides.

Primary Owner:

UI/UX Designer

📜 License
All code, models, and assets in this repository are proprietary and the exclusive intellectual property of DermaAI. Unauthorized use, reproduction, or distribution is strictly prohibited.
