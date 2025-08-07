<h1>DermaAI - AI-Powered Skin Diagnostic Platform</h1>
The official monorepo for DermaAI. This repository contains all source code and technical assets for the project, including the machine learning models, backend API, and frontend application.
<br>

<h2>🚀 Project Overview</h2>
DermaAI is a cutting-edge tool designed to provide "<b>Precision dermatology at the speed of AI</b>." By analyzing user-submitted images, our platform leverages advanced computer vision models to detect, classify, and provide information on various skin conditions. Our mission is to make initial skin analysis accessible, informative, and instantaneous.
<br>

<h2>📂 Repository Structure</h2>
This repository is structured as a monorepo to streamline development and ensure all components are synchronized. The main directories are outlined below.

<h2>🧠 /ml/ - Machine Learning & AI</h2>
This directory houses the core intelligence of our platform. All work related to data analysis, model training, experimentation, and evaluation resides here.
<br>

<br><b>Purpose:</b> To develop and iterate on the computer vision models that power our diagnostic engine.

<br>

<b>Contents:</b>
<ul>
<li>/notebooks: Experimental Jupyter/Colab notebooks for training and analysis.</li><br>
<li>/scripts: Reusable Python scripts for data processing or training.</li><br>
<li>/data: Configuration files (.yaml) that define our datasets and classes.</li>
</ul>
<br>

<b>Primary Owners:</b>
<ul>
<li><b>Yaseen (CTO)</b></li><br>
<li><b>Data Scientist</b></li>
</ul>

<h2>⚙️ /backend/ - API & Server Logic</h2>
This directory contains the server-side application that exposes our ML model's predictions to the outside world. It acts as the bridge between our AI engine and the user-facing application.
<br>

<br><b>Purpose:</b> To build a scalable, low-latency REST API that can process image requests and return structured diagnostic data.

<br>

<b>Contents:</b>
<ul>
<li>FastAPI application source code.</li><br>
<li>Model integration logic.</li><br>
<li>API testing scripts and documentation.</li>
</ul>
<br>

<b>Primary Owner:</b>
<ul>
<li><b>AK (CEO)</b></li>
</ul>

<h2>🖥️ /frontend/ - Web Application</h2>
This directory contains the user-facing web application. It is responsible for the user interface (UI) and user experience (UX), allowing users to upload images and view their results in a clear and intuitive way.
<br>

<br><b>Purpose:</b> To create a responsive, secure, and user-friendly web platform that interacts with our backend API.

<br>

<b>Contents:</b>
<ul>
<li>React / Next.js source code.</li><br>
<li>HTML, CSS, and component files.</li><br>
<li>Frontend deployment configurations.</li>
</ul>
<br>

<b>Primary Owner:</b>
<ul>
<li><b>Full Stack Developer</b></li>
</ul>

<h2>🎨 /design/ - UI/UX Assets</h2>
This directory contains all design files, mockups, and brand assets. It is the source of truth for the platform's visual identity and user experience.
<br>

<br><b>Purpose:</b> To house all visual design work, from initial wireframes to high-fidelity prototypes.

<br>

<b>Contents:</b>
<ul>
<li>Figma design files.</li><br>
<li>User flow diagrams.</li><br>
<li>Brand logos and style guides.</li>
</ul>
<br>

<b>Primary Owner:</b>
<ul>
<li><b>UI/UX Designer</b></li>
</ul>

<h2>📜 License</h2>
All code, models, and assets in this repository are proprietary and the exclusive intellectual property of DermaAI. Unauthorized use, reproduction, or distribution is strictly prohibited.
