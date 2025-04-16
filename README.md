# 📝 OnlyOffice + React PoC Setup

This project demonstrates how to run **OnlyOffice Document Server** locally with Docker and integrate it with a local **React app** for document editing.

---

## 📦 Part 1: Setting Up OnlyOffice Document Server with Docker

### Step 1: Pull the OnlyOffice Docker Image
```bash
docker pull onlyoffice/documentserver
```

### Step 2: Run the OnlyOffice Container (Without JWT)
```bash
docker run -i -t -d \
  -p 8080:80 \
  -e JWT_ENABLED=false \
  --name onlyoffice-documentserver-nojwt \
  onlyoffice/documentserver
```

> This command:
> - Runs the container in detached mode (`-d`)
> - Maps port `8080` on your host to port `80` inside the container
> - Disables JWT (for local testing)
> - Names the container `onlyoffice-documentserver-nojwt`

### Step 3: Configure CORS

Edit the following file inside the container:

```
/etc/onlyoffice/documentserver/local.json
```

Update the `cors` section like so:
```json
"cors": {
  "allowed_origins": [
    "http://localhost:3000",
    "http://192.1.160.81:3000"
  ],
  "allowed_methods": ["GET", "POST", "PUT", "DELETE"],
  "allowed_headers": ["Authorization", "Content-Type"]
}
```

> 💡 Restart the container after editing `local.json` to apply changes.

---

## 🐳 Docker Container Commands

- **Restart container:**
  ```bash
  docker restart onlyoffice-documentserver-nojwt
  ```

- **View logs:**
  ```bash
  docker logs onlyoffice-documentserver-nojwt
  ```

---

## 💻 Part 2: Setting Up the Frontend React App

### Prerequisite: Install Node.js

Recommended version:
```
v20.15.1
```

Use [nvm](https://github.com/nvm-sh/nvm) if needed:
```bash
nvm install 20.15.1
nvm use 20.15.1
```

### Install Dependencies
```bash
npm install
```

### Start the App
```bash
npm start
```

---

## 📁 Project Structure (Example)

```
├── public/
│   ├── index.html
│   ├── Hive Developers.xlsx
│   └── Hive_development_priorities.docx
├── src/
│   ├── App.js
│   └── DocumentEditor.js
├── local.json
├── .gitignore
├── package.json
└── README.md
```

---

## 🧪 What's Included

- Local Docker-based setup of OnlyOffice Document Server
- CORS configuration for local dev
- React frontend to interface with the editor
- Node 20+ compatible setup

---

## 📬 Feedback / Contributions

Feel free to fork this repo and raise a PR or open issues if you run into trouble. Happy coding! 🚀
