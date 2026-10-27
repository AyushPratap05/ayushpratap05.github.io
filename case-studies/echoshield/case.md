## Full write-up

### My role
Team lead for product management on an 8th-semester major project at IMS Engineering College, Ghaziabad. I led a team of four over a three to four month project and owned research, timelines and delivery.

### Objectives
- Detect real versus fake audio using deep learning
- Train a BiLSTM model on the SceneFake dataset
- Extract MFCC features for audio analysis
- Provide real-time prediction with a confidence score
- Develop a user-friendly web interface
- Integrate transcription and an AI assistant

### Research gap
Recent work shows that large, diverse datasets help models generalize, and benchmarks like ASVspoof show real progress. But detection systems still struggle on unseen datasets, speakers and synthesis tools. Most stay offline, with no real-time use, no friendly interface and no explanation of the result. EchoShield targets that gap with a web platform that takes live audio, shows a confidence score and guides the user.

### How it works
The system accepts audio by file upload or live recording, converts it to a standard format and extracts speech features. A deep learning model analyzes the audio patterns and classifies the input as real or fake, with a confidence score. The result appears in a simple web interface.

### Architecture
- **Frontend (HTML, CSS, JavaScript):** audio upload and recording, and the results display
- **Backend (Flask):** API handling, audio processing and model inference
- **ML model:** BiLSTM neural network
- **Audio processor:** MFCC extraction and audio normalization
- **Transcriber:** speech-to-text
- **Chatbot:** context-aware AI assistant

### Methodology
The user layer is the browser, where audio is uploaded or recorded. In the application layer the audio goes through noise reduction and normalization, then feature extraction (MFCCs, spectrograms and pitch analysis), then the detection engine. The output layer returns real or fake with a confidence percentage. A database layer stores datasets, logs and results.

### Testing and validation
- Dataset validation on unseen test audio
- Functional testing of upload, live recording, prediction and result display
- Input validation across audio formats, file sizes and durations
- API testing for request handling, responses and errors
- Integration testing across the frontend, backend, audio processing and model
- Performance testing of average processing time
- Usability testing for clarity and accessibility
- Cross-browser and device testing
- Error handling for invalid, missing or corrupted audio

### Results
- 93.8% accuracy with the BiLSTM model
- Average processing time under 1 second
- Robust detection with minimal false negatives
- A responsive, mobile-optimized interface

### Conclusion
EchoShield is a working full-stack deepfake audio detector with transcription and an AI chatbot. It contributes towards combating misinformation and digital fraud.

### Future scope
Multi-language support, a transformer-based model, a model ensemble for higher accuracy, real-time streaming analysis, a mobile app (Android and iOS), public API access and GPU acceleration.
