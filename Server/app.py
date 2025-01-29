from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
from io import BytesIO

# Enable CORS for the entire app and allow requests from specific frontend (React app)
app = Flask(__name__)
CORS(app, origins="http://localhost:5173")  # Allow requests from your React frontend

# Load the saved model
try:
    model = tf.keras.models.load_model('brain_tumor_detection_model.keras')
    print("Model loaded successfully!")
except ValueError as e:
    print(f"Error loading model: {e}")

@app.route('/')
def home():
    return "Welcome to the Brain Tumor Detection API"

@app.route('/upload', methods=['POST'])
def upload_image():
   
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        

        # Convert file to BytesIO object and load the image
        img = image.load_img(BytesIO(file.read()), target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0) / 255.0  # Normalize image

        print("Image processed successfully")

        # Make prediction
        prediction = model.predict(img_array)
        print(f"Prediction: {prediction}")  # Log the prediction

        # Get the class with the highest probability
        predicted_class = np.argmax(prediction)  # Index of the class with the highest probability
        confidence = prediction[0][predicted_class] * 100  # Get the confidence for that class

        # Map the class index to the result (based on your model's output classes)
        class_map = ['Glioma Tumor', 'Meningioma Tumor', 'No Tumor', '  Pituitary Tumor']  
        result = class_map[predicted_class]  # Map the predicted class index to the actual label

        print(f"Result: {result}, Confidence: {confidence}")  # Log the result and confidence

        # Send back the response
        return jsonify({
            'prediction': result,
            'confidence': confidence
        })
    except Exception as e:
        print(f"Error processing the image: {e}")  # Log the error message
        return jsonify({'error': f'Error processing the image: {e}'}), 500

   



if __name__ == '__main__':
    app.run(port=5000)  # Start the server on port 5000

