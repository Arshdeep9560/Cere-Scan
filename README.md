# Cere Scan: Brain Tumor Diagnostic Tool

## Overview
Cere Scan is a machine learning-powered web application designed to assist radiologists and healthcare professionals in diagnosing brain tumors from MRI scans. The project classifies brain MRI images into four categories: **Glioma Tumor**, **Meningioma Tumor**, **Pituitary Tumor**, or **No Tumor**, providing quick and preliminary diagnostic insights.

---

## Features
- **Image Upload**: Users can upload MRI scans for tumor classification.
- **Machine Learning Model**: Utilizes Convolutional Neural Networks (CNNs) and ResNet50 for accurate tumor detection.
- **User Authentication**: Supports user login and signup, storing details in a secure database.
- **Contact Form**: Allows users to submit queries, with details saved for follow-up.

---

## Technology Stack

### Frontend
- **React.js**: User interface development.
- **Tailwind CSS**: Styling.

### Backend
- **Flask**: API for model predictions.
- **Node.js & Express.js**: Backend server for handling requests.
- **SQL Database**: Stores user details and form submissions.

### Machine Learning
- **ResNet50**: Pretrained model for image classification.
- **TensorFlow & Keras**: Frameworks for developing the CNN model.
- **Data Augmentation**: Enhances model robustness by generating diverse training samples.

---

## Dataset
The project uses the **Brain Tumor MRI Dataset** from Kaggle, provided by Masoud Nickparvar. It includes four categories of images:
1. Glioma Tumor
2. Meningioma Tumor
3. No Tumor
4. Pituitary Tumor

---

## Installation

### Prerequisites
- **Python 3.8+**
- **Node.js 14+**
- **React.js 18+**

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/cere-scan.git
   cd cere-scan
   ```

2. **Set Up the Backend**:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   pip install -r requirements.txt
   flask run
   ```

3. **Set Up the Frontend**:
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Configure Database**:
   - Ensure SQL is running and update connection details in the backend configuration file.

---

## Usage
1. Start the backend server using Flask.
2. Launch the frontend application.
3. Navigate to `http://localhost:5173`.
4. Login or sign up to access the features.
5. Upload MRI scans to receive tumor classification results.
6. Use the contact form for queries or support.

---

## Project Methodology
1. **Problem Identification**: Focus on improving diagnostic support for brain tumors.
2. **Dataset Preparation**: Preprocessed MRI images and applied data augmentation.
3. **Model Development**: Built a CNN-based classifier using ResNet50.
4. **Web Application Development**: Integrated Flask API with React frontend.
5. **Testing**: Conducted unit, integration, and usability testing to ensure robustness.

---

## Contributions
Cere Scan enhances diagnostic support for radiologists, particularly in underserved areas, by providing a fast and reliable tool for tumor classification. This tool aids in preliminary diagnosis, improving patient outcomes and supporting healthcare technology advancement.

---

## Limitations
- The model provides preliminary diagnostic insights and should not replace professional medical evaluation.
- Currently supports only the four specified tumor categories.

---

## Future Enhancements
- Add support for more tumor categories.
- Include a **Report Generation** feature for detailed diagnostics.
- Deploy the project to a cloud platform for accessibility.

---


