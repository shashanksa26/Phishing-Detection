# Phishing Classifier

This project is a **Phishing Detection System** that uses machine learning to classify URLs as either phishing or legitimate. It is built using Python and includes a Flask-based web application for user interaction.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Running the Project](#running-the-project)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

---

## Project Overview

The Phishing Classifier is designed to detect phishing URLs using a machine learning model. The project includes:
- **Data preprocessing**: Cleaning and preparing the dataset for training.
- **Model training**: Training a machine learning model on the preprocessed data.
- **Web application**: A Flask-based web app for users to upload CSV files containing URLs and get predictions.

---

## Project Structure

The repository is organized as follows:
Phising-classifier/
├── app.py # Flask application entry point
├── requirements.txt # Python dependencies
├── README.md # Project documentation
├── src/
│ ├── components/ # Data ingestion, validation, transformation, and model training
│ ├── pipeline/ # Training and prediction pipelines
│ ├── exception.py # Custom exception handling
│ ├── logger.py # Logging configuration
│ └── utils.py # Utility functions
├── artifacts/ # Saved models, logs, and other artifacts
├── config/ # Configuration files (e.g., schema, hyperparameters)
├── static/ # Static files (CSS, JS, images)
├── templates/ # HTML templates for the web app
└── upload_data_to_db/ # Scripts for uploading data to MongoDB

yaml
Copy code

---

## Installation

To set up the project locally, follow these steps:

### 1. Clone the Repository:
```bash
git clone https://github.com/shashanksa26/Phising-classifier.git
cd Phising-classifier
2. Create a Virtual Environment:
bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
3. Install Dependencies:
bash
Copy code
pip install -r requirements.txt
4. Set Up Environment Variables:
Create a .env file in the root directory.
Add the following variables (replace with your own values):
plaintext
Copy code
MONGO_DB_URL=mongodb://localhost:27017/
DATABASE_NAME=phishing_db
Running the Project
Start the Flask Application:
bash
Copy code
python app.py
Access the Web Application:
Open your browser and go to:
http://127.0.0.1:5000

You will see the Phishing Detection web interface.

Usage
Upload a CSV File:
The web app allows you to upload a CSV file containing URLs.
The file should have a column named url (case-sensitive).
Get Predictions:
After uploading the file, the app will process it and display the predictions (phishing or legitimate) for each URL.
Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Commit your changes and push to your branch.
Submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
This project was developed as part of a machine learning pipeline for phishing detection.

Special thanks to the open-source community for providing tools and libraries used in this project.
