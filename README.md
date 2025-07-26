
# Feature Voting App

A quick demo of a **Django + Django REST Framework** backend with an **Expo React Native** front‑end (web or mobile).  
Users can add feature ideas and up‑vote existing ones.

---

## 1 · Backend (Django)

```bash
# clone repo, then:
python -m venv env && source env/bin/activate        # Windows ⇒ env\Scripts\activate
pip install -r requirements.txt                      # Django, DRF, cors-headers
python manage.py migrate
python manage.py runserver 0.0.0.0:8000              # reachable on LAN
```

API endpoints:

| Method | URL | Purpose |
|--------|-----|---------|
| GET / POST | `/api/features/` | list / create features |
| POST | `/api/features/<id>/upvote/` | increment vote counter |

> **Note:** CORS is enabled for all origins via `django‑cors‑headers`.

---

## 2 · Front‑End (Expo React Native)

```bash
cd frontend
npm install
npx expo start          # press **w** for web ‑OR‑ scan the QR code with Expo Go
```

### API base URL

`frontend/api.js` defaults to:

```js
const BASE = "http://127.0.0.1:8000/api/features/";
```

* **Web preview (same PC)** – leave as is.  
* **Phone / emulator** – replace `127.0.0.1` with your computer’s LAN IP  
  (e.g. `http://10.0.0.18:8000/api/features/`).

---

## 3 · Using the App

1. Open the web page or launch the mobile app.  
2. Click **Add Feature**, enter a title/description, and submit.  
3. New features appear in the list, ordered by votes.  
4. Click **Up‑vote** to increment a feature’s vote count.

---

## 4 · Project Structure

```
feature-voting-app/
├── manage.py
├── voting_app/          # Django settings/project
├── features/            # Django app (models, views, serializers)
├── templates/home.html  # Minimal Django home page
├── static/              # (optional) CSS
├── frontend/            # Expo React Native project
│   ├── App.js
│   ├── api.js
│   └── screens/
│       ├── FeatureListScreen.js
│       └── AddFeatureScreen.js
├── prompts.txt          # AI prompt log (audit trail)
└── README.md
```

---

## 5 · Prompts

Every AI prompt used while building this project is logged in **`prompts.txt`** for transparency.

---

## 6 · License

MIT – use it freely.
