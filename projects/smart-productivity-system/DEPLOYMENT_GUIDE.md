# Smart Productivity System - Deployment Guide

This guide provides step-by-step instructions for deploying the Smart Productivity System to production.

## 🚀 Quick Deployment Options

### Option 1: Render (Recommended for Beginners)
- **Backend**: Free tier available
- **Frontend**: Netlify free tier
- **Database**: SQLite (included) or PostgreSQL add-on

### Option 2: Railway
- **Backend + Database**: All-in-one platform
- **Frontend**: Netlify or Vercel
- **Scaling**: Automatic scaling available

### Option 3: AWS/Heroku
- **Full Control**: Complete infrastructure control
- **Scaling**: Advanced scaling options
- **Cost**: Pay-as-you-go pricing

---

## 📋 Pre-Deployment Checklist

### Backend Preparation
- [ ] Environment variables configured
- [ ] DEBUG=False in production
- [ ] ALLOWED_HOSTS set correctly
- [ ] CORS origins configured
- [ ] SECRET_KEY changed from default
- [ ] Static files collected
- [ ] Database migrations run

### Frontend Preparation
- [ ] API base URL configured
- [ ] Build optimized for production
- [ ] Environment variables set
- [ ] HTTPS enabled
- [ ] Domain configured

### Security Checklist
- [ ] No sensitive data in code
- [ ] Environment variables used for secrets
- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] CSRF protection enabled

---

## 🔧 Backend Deployment (Render)

### 1. Prepare Backend for Production

```bash
cd smart-productivity-system/backend

# Create production requirements
pip freeze > requirements.txt

# Collect static files
python manage.py collectstatic --noinput

# Run migrations
python manage.py migrate
```

### 2. Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Connect your repository

### 3. Deploy Backend
1. Click "New" → "Web Service"
2. Connect your GitHub repository
3. Configure build settings:
   - **Runtime**: Python 3
   - **Build Command**: `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate`
   - **Start Command**: `python manage.py runserver 0.0.0.0:$PORT`

### 4. Environment Variables
Add these environment variables in Render dashboard:

```
SECRET_KEY=your-very-long-random-secret-key-here
DEBUG=False
ALLOWED_HOSTS=your-render-app.onrender.com
CORS_ALLOWED_ORIGINS=https://your-frontend-domain.netlify.app
```

### 5. Deploy
- Click "Create Web Service"
- Wait for deployment to complete
- Note the backend URL (e.g., `https://your-app.onrender.com`)

---

## 🎨 Frontend Deployment (Netlify)

### 1. Prepare Frontend for Production

```bash
cd smart-productivity-system/frontend

# Create production build
npm run build

# The build files will be in the 'build' folder
```

### 2. Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Connect your repository

### 3. Deploy Frontend
1. Click "Add new site" → "Import an existing project"
2. Connect your GitHub repository
3. Configure build settings:
   - **Base directory**: `smart-productivity-system/frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `build`

### 4. Environment Variables
Add environment variable in Netlify dashboard:

```
REACT_APP_API_BASE_URL=https://your-backend.onrender.com
```

### 5. Deploy
- Click "Deploy site"
- Wait for deployment to complete
- Note the frontend URL (e.g., `https://amazing-site.netlify.app`)

---

## 🔗 Connecting Frontend to Backend

### Update Frontend API Configuration

Edit `smart-productivity-system/frontend/src/api/axios.js`:

```javascript
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  // ... rest of configuration
});
```

### Update CORS in Backend

In Render environment variables, update:

```
CORS_ALLOWED_ORIGINS=https://your-frontend.netlify.app,https://amazing-site.netlify.app
```

---

## 🗄️ Database Setup (Optional - PostgreSQL)

For production, consider upgrading to PostgreSQL:

### Render PostgreSQL
1. Add PostgreSQL database in Render
2. Note the connection string
3. Add to environment variables:

```
DATABASE_URL=postgresql://user:password@host:port/database
```

### Update Django Settings

In `settings.py`, add database configuration:

```python
import dj_database_url

DATABASES = {
    'default': dj_database_url.config(default=f'sqlite:///{BASE_DIR}/db.sqlite3')
}
```

---

## 🧪 Testing Production Deployment

### 1. Test Backend API
```bash
# Test health endpoint
curl https://your-backend.onrender.com/api/tasks/

# Test emotion detection
curl -X POST https://your-backend.onrender.com/api/emotion-detect/ \
  -F "image=@test_image.jpg"
```

### 2. Test Frontend
- Visit your Netlify URL
- Try user registration
- Test emotion detection
- Verify task management

### 3. Test Integration
- Register a new user
- Upload an image for emotion detection
- Verify recommendations appear
- Test task CRUD operations

---

## 🔧 Common Deployment Issues & Fixes

### Issue: "DisallowedHost" Error
**Fix**: Add your domain to `ALLOWED_HOSTS` environment variable

### Issue: CORS Errors
**Fix**: Update `CORS_ALLOWED_ORIGINS` with your frontend URL

### Issue: Static Files Not Loading
**Fix**: Ensure `python manage.py collectstatic` runs in build command

### Issue: AI Model Not Working
**Fix**: Ensure TensorFlow dependencies are installed correctly

### Issue: Database Connection Failed
**Fix**: Verify DATABASE_URL format and credentials

### Issue: Build Timeout
**Fix**: Optimize build process or upgrade to paid plan

---

## 📊 Performance Optimization

### Backend Optimizations
```python
# In settings.py for production
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
    }
}

# Enable gzip compression
MIDDLEWARE.insert(0, 'django.middleware.gzip.GZipMiddleware')
```

### Frontend Optimizations
```javascript
// In package.json
"build": "GENERATE_SOURCEMAP=false react-scripts build"
```

---

## 🔒 Security Best Practices

### Environment Variables
- Never commit `.env` files
- Use strong, random SECRET_KEY
- Rotate keys regularly

### HTTPS Everywhere
- Enable HTTPS on all domains
- Use secure cookies
- Implement HSTS headers

### API Security
- Rate limiting on sensitive endpoints
- Input validation and sanitization
- JWT token expiration

### Monitoring
- Set up error logging
- Monitor performance metrics
- Implement health checks

---

## 📞 Support & Troubleshooting

### Getting Help
1. Check Render/Netlify logs
2. Verify environment variables
3. Test locally with production settings
4. Check network connectivity

### Useful Commands
```bash
# Check Django logs
python manage.py check --deploy

# Test CORS
curl -H "Origin: https://your-frontend.com" \
     -H "Access-Control-Request-Method: POST" \
     https://your-backend.com/api/emotion-detect/

# Verify SSL
openssl s_client -connect your-domain.com:443
```

---

## 🎯 Post-Deployment Tasks

### 1. Domain Setup
- Configure custom domain in Netlify
- Update DNS records
- Update CORS settings with new domain

### 2. Monitoring Setup
- Set up uptime monitoring
- Configure error alerts
- Monitor performance metrics

### 3. Backup Strategy
- Database backups (if using PostgreSQL)
- Static file backups
- Code repository backups

### 4. Documentation Update
- Update README with live URLs
- Add deployment instructions
- Document API endpoints

---

## 💰 Cost Estimation

### Free Tier (Recommended for demos)
- **Render**: 750 hours/month free
- **Netlify**: 100GB bandwidth/month free
- **Total**: $0/month

### Basic Production
- **Render**: $7/month (web service)
- **Netlify**: $19/month (pro plan)
- **PostgreSQL**: $7/month (optional)
- **Total**: ~$33/month

---

## 🚀 Scaling Considerations

### Vertical Scaling
- Upgrade Render service plan
- Increase Netlify bandwidth limits
- Add more database resources

### Horizontal Scaling
- Load balancer setup
- Database read replicas
- CDN for static assets

### Performance Monitoring
- Response time monitoring
- Error rate tracking
- Resource utilization alerts

---

**🎉 Congratulations! Your Smart Productivity System is now live and ready to help users optimize their productivity through emotional intelligence!**

For any issues, check the troubleshooting section or reach out to the development team.
