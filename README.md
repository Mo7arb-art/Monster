Monster Energy 3D Experience
A bold, interactive React web app inspired by Monster Energy branding.
This project showcases 3D product models, animated features, and smooth UI/UX — built as a portfolio piece and deployed on GitHub Pages.

🚀 Live Demo
👉 https://mo7arb-art.github.io/Monster/

✨ Features
- ⚡ Hero Section with bold branding and impactful typography
- 🎥 Feature Highlights with autoplaying background videos
- 🥤 3D Models of Monster Energy cans (.glb format) rendered in‑browser
- 🎨 Custom Styling with scoped CSS and brand‑inspired colors
- 📱 Responsive Design for desktop and mobile
- 🌐 Deployed on GitHub Pages with optimized asset paths

🛠️ Tech Stack
- React (Create React App)
- Three.js / React‑Three‑Fiber (for 3D models)
- CSS3 for styling and animations
- gh‑pages for deployment

📂 Project Structure
Monster/
 ┣ public/
 ┃ ┣ mp4/        # Feature videos
 ┃ ┣ Models/     # 3D .glb models
 ┃ ┗ index.html
 ┣ src/
 ┃ ┣ Assets/     # Images, fonts, icons
 ┃ ┣ Components/ # React components (Banner, Features, etc.)
 ┃ ┣ Styles/     # CSS files
 ┃ ┗ App.js
 ┣ package.json
 ┗ README.md



⚡ Deployment
This project is deployed using GitHub Pages.
Build & Deploy
npm run build
git add build -f
git commit -m "Deploy build"
git subtree push --prefix build origin gh-pages


Important Notes
- Assets in public/ (videos, models) are referenced with:
process.env.PUBLIC_URL + "/mp4/zenitsu.mp4"
- Assets in src/ (logos, icons) are imported directly:
import MonsterLogo from "../Assets/MonsterLogo.png";



📸 Screenshots
(Add screenshots of your hero section, features, and 3D models here for extra impact.)

👨‍💻 Author
Mostafa Mohamed Hamdi Ali
Freelance Frontend Developer & Creative Technologist
- 🌍 Cairo, Egypt
- 💼 https://mo7arb-art.github.io/Mostafa-Portfolio/
- 🐙 GitHub

📜 License
This project is for portfolio and educational purposes.
Monster Energy branding is used for demonstration only.

