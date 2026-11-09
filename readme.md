# 🎬 YouTube Clone API

A beginner-friendly REST API built for learning and practicing API integration through a YouTube Clone project.

This API is designed to help students understand how real-world applications fetch, display, and use data from APIs.

## 🌐 Base URL

```text
https://openapi.twoinsoft.com
```

## 📌 Available Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/videos` | Get all videos |
| `GET` | `/videos/vid001` | Get a single video by ID |
| `GET` | `/categories` | Get all video categories |

### 1. Get All Videos

Retrieve the available videos from the API.

**Endpoint:**
```http
GET https://openapi.twoinsoft.com/videos
```

**Use cases:**
- Display videos on the homepage.
- Create video cards.
- Show video thumbnails, titles, and channel information.
- Build a video listing page.

### 2. Get Single Video

Retrieve a specific video using its unique video ID.

**Endpoint:**
```http
GET https://openapi.twoinsoft.com/videos/vid001
```

**Use cases:**
- Create a video details page.
- Display the selected video's information.
- Show video description and channel details.
- Build a video watch page.

**Path Parameter:**

| Parameter | Description | Example |
|---|---|---|
| `videoId` | Unique ID of the video | `vid001` |

### 3. Get All Categories

Retrieve the available video categories.

**Endpoint:**
```http
GET https://openapi.twoinsoft.com/categories
```

**Use cases:**
- Display category navigation.
- Create category buttons.
- Build category-based filtering UI.
- Organize videos by category.

---

## 💻 JavaScript Fetch Example

You can use JavaScript's `fetch()` method to retrieve data from this API.

### Get All Videos

```javascript
const getVideos = async () => {
  try {
    const response = await fetch(
      "https://openapi.twoinsoft.com/videos"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
};

getVideos();
```

### Get Single Video

```javascript
const getVideo = async (videoId) => {
  try {
    const response = await fetch(
      `https://openapi.twoinsoft.com/videos/${videoId}`
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error fetching video:", error);
  }
};

getVideo("vid001");
```

### Get All Categories

```javascript
const getCategories = async () => {
  try {
    const response = await fetch(
      "https://openapi.twoinsoft.com/categories"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

getCategories();
```

---

## 🧠 What Will You Learn?

By working with this API, students can practice:

- Understanding REST APIs
- HTTP GET requests
- JavaScript `fetch()`
- Async / Await
- JSON data handling
- Dynamic rendering
- Array methods (`map`, `filter`, etc.)
- Loading and error handling
- Building reusable components
- Creating a YouTube-style user interface

## 🚀 Project Idea

Build a YouTube Clone using this API.

Suggested features:

- Homepage with video cards
- Video watch page
- Category navigation
- Video thumbnails
- Channel information
- Responsive layout

## 📚 Learning Purpose

This API is intended for educational and practice purposes. It helps beginner developers understand how frontend applications communicate with backend APIs and display dynamic data.

**Happy Coding! ❤️**
