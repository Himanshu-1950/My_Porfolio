A comprehensive productivity application that uses AI-powered emotion detection to provide personalized task recommendations and productivity insights.
=======
# 🚀 Smart Productivity System

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Project-blue?style=for-the-badge)](https://your-frontend-domain.com)
[![Backend API](https://img.shields.io/badge/API-Django%20REST-green?style=flat-square)](https://your-backend-domain.com/api)
[![Frontend](https://img.shields.io/badge/Frontend-React-blue?style=flat-square)](https://your-frontend-domain.com)

> **Final Year Project** - AI-powered productivity application with real-time emotion detection and personalized recommendations

A comprehensive productivity application that uses AI-powered emotion detection to provide personalized task recommendations and productivity insights. Built with Django REST Framework and React, featuring CNN-based emotion recognition and intelligent analytics.

## ✨ Features

### 🤖 AI-Powered Emotion Detection
- **Real-time emotion recognition** using CNN model
- **7 emotion categories**: Happy, Sad, Angry, Fear, Surprise, Neutral, Disgust
- **High accuracy** emotion prediction with confidence scores

### 📊 Advanced Analytics & Insights
- **Emotion History Tracking** - Complete timeline of user emotions
- **Productivity Correlation** - "You are most productive when happy" insights
- **Time-based Patterns** - Morning/afternoon/evening emotion analysis
- **Personalized Recommendations** - Context-aware productivity tips

### 🎯 Smart Task Management
- **Personalized Recommendations** based on current emotional state
- **Task Prioritization** using emotion-driven insights
- **Progress Tracking** with completion analytics

### 🔐 Secure Authentication
- **JWT-based authentication** with secure token management
- **User registration/login** with validation
- **Protected API endpoints** with proper authorization

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Frontend│    │ Django REST API │    │   PostgreSQL    │
│                 │◄──►│                 │◄──►│   Database      │
│ - Dashboard     │    │ - Emotion API   │    │                 │
│ - Analytics     │    │ - Task API      │    │ - Users         │
│ - Task Manager  │    │ - Analytics API │    │ - Tasks         │
│ - Auth System   │    │ - Auth System   │    │ - Emotions      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🛠️ Tech Stack

### Backend
- **Django 4.2** - Web framework
- **Django REST Framework** - API development
- **PostgreSQL** - Production database
- **TensorFlow/Keras** - CNN emotion detection
- **OpenCV** - Image processing
- **JWT** - Authentication
- **Gunicorn** - WSGI server

### Frontend
- **React 18** - UI framework
- **Axios** - HTTP client
- **React Router** - Navigation
- **CSS3** - Styling
- **Chart.js** - Data visualization

### Deployment
- **Render/Railway** - Backend hosting
- **Vercel/Netlify** - Frontend hosting
- **PostgreSQL** - Cloud database
- **Cloudinary** - Media storage

## 📸 Screenshots

### Dashboard Overview
![Dashboard](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Dashboard+Screenshot)

### Emotion Detection
![Emotion Detection](https://via.placeholder.com/800x400/50C878/FFFFFF?text=Emotion+Detection)

### Analytics Dashboard
![Analytics](https://via.placeholder.com/800x400/FF6B6B/FFFFFF?text=Analytics+Dashboard)

### Task Management
![Task Management](https://via.placeholder.com/800x400/9B59B6/FFFFFF?text=Task+Management)

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- PostgreSQL (production) / SQLite (development)

### Backend Setup
```bash
cd smart-productivity-system/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Environment variables
cp .env.example .env
# Edit .env with your settings

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

### Frontend Setup
```bash
cd smart-productivity-system/frontend

# Install dependencies
npm install

# Start development server
npm start
```

## 📊 API Documentation

### Authentication Endpoints
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - User login
- `POST /api/auth/refresh/` - Token refresh

### Task Management
- `GET /api/tasks/` - List user tasks
- `POST /api/tasks/` - Create new task
- `PUT /api/tasks/{id}/` - Update task
- `DELETE /api/tasks/{id}/` - Delete task

### Emotion Detection
- `POST /api/emotion-detect/` - Detect emotion from image
- `GET /api/emotion-history/` - Get emotion history
- `GET /api/emotion-analytics/` - Get analytics insights

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
DEBUG=False
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=your-domain.com
DATABASE_URL=postgresql://user:password@host:port/db
CORS_ALLOWED_ORIGINS=https://frontend-domain.com
```

#### Frontend (.env)
```env
REACT_APP_API_BASE_URL=https://backend-domain.com/api
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
python manage.py test
```

### API Testing
```bash
# Test emotion detection
curl -X POST http://localhost:8000/api/emotion-detect/ \
  -H "Authorization: Bearer <token>" \
  -F "image=@image.jpg"
```

## 📈 Performance Metrics

- **Emotion Detection Accuracy**: 85%+ across 7 emotions
- **API Response Time**: <500ms for emotion detection
- **Database Query Optimization**: Indexed queries
- **Frontend Load Time**: <3 seconds

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TensorFlow/Keras** for CNN implementation
- **OpenCV** for computer vision capabilities
- **FER2013 Dataset** for emotion recognition training
- **Django Community** for excellent documentation

## 📞 Contact

**Project Author**: [Your Name]
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

**Project Links**:
- **Live Demo**: https://your-frontend-domain.com
- **API Documentation**: https://your-backend-domain.com/api/docs
- **Source Code**: https://github.com/yourusername/smart-productivity-system

---

**⭐ Star this repository if you found it helpful!**

*Built with ❤️ for final year project submission*
