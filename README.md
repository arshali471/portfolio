# DevOps Portfolio - Md Arshad Ali

A modern, terminal-themed portfolio website showcasing Cloud & DevOps engineering expertise.

## 🚀 Features

- **Terminal-Style Interface** with animated effects
- **Comprehensive Sections**: Skills, Experience, Projects, Certifications, Achievements, Education
- **Tech Stack**: React.js + Tailwind CSS + FastAPI

## 📋 Prerequisites

- Node.js 16+
- npm or yarn

## 🛠️ Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the FastAPI server:

   ```bash
   python main.py
   ```

   The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The portfolio will be available at `http://localhost:5173`

## 📁 Project Structure

```
devops-portfolio/
├── backend/
│   ├── main.py              # FastAPI application with portfolio data
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # Main application component
│   │   └── components/
│   │       ├── TerminalHero.jsx      # Hero section with terminal UI
│   │       ├── CloudSkills.jsx       # Skills in YAML format
│   │       ├── PipelineExp.jsx       # Experience timeline
│   │       ├── Projects.jsx          # Featured projects
│   │       ├── CertBadges.jsx        # Certifications display
│   │       ├── Achievements.jsx      # Key achievements
│   │       └── Education.jsx         # Education background
│   └── tailwind.config.js   # Tailwind customization
└── README.md
```

## 🎨 Customization

### Update Portfolio Data

Edit `backend/main.py` to update your personal information:

- **Profile**: Name, role, contact information
- **Skills**: Add/remove technical skills by category
- **Experience**: Update work history and achievements
- **Projects**: Showcase your best projects with metrics
- **Certifications**: List your professional certifications
- **Achievements**: Highlight recognitions and awards
- **Education**: Academic background

### Color Theme

Customize colors in `frontend/tailwind.config.js`:

```javascript
colors: {
  'devops-bg': '#0f172a',      // Background
  'terminal-green': '#22c55e',  // Success/highlights
  'aws-orange': '#ff9900',      // AWS branding
  'k8s-blue': '#326ce5',        // Kubernetes branding
}
```

## 🌐 API Endpoints

- `GET /api/status` - System status
- `GET /api/portfolio` - Complete portfolio data

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🔒 CORS Configuration

The backend allows requests from `http://localhost:5173` by default. Update `main.py` if deploying to production:

```python
allow_origins=["https://your-domain.com"]
```

## 📄 License

This portfolio is open for personal use and customization.

## 👤 Contact

- **Email**: arshali471@gmail.com
- **LinkedIn**: [linkedin.com/in/md-arshad-ali](https://linkedin.com/in/md-arshad-ali)
- **GitHub**: [github.com/arshali471](https://github.com/arshali471)

---

Built with ❤️ by Md Arshad Ali
