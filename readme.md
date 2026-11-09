# 🎬 YouTube Clone API

A beginner-friendly REST API built for learning and practicing API integration through a YouTube Clone project.

This API helps students understand how real-world applications fetch, display, filter, and use data from APIs.

## 🌐 Base URL

```text
https://openapi.twoinsoft.com
```

## 📌 Available API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/videos` | Get all videos |
| `GET` | `/videos/vid001` | Get a single video by ID |
| `GET` | `/categories` | Get all video categories |
| `GET` | `/category/1004` | Get videos by category ID |

---

## 1. Get All Videos

Retrieve all available videos from the API.

**Endpoint:**

```http
GET https://openapi.twoinsoft.com/videos
```

**Use cases:**
- Display videos on the homepage.
- Create video cards.
- Show video thumbnails, titles, and channel information.
- Build a video listing page.

## 2. Get Single Video

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

| Parameter | Example | Description |
|---|---|---|
| `videoId` | `vid001` | Unique video ID |

## 3. Get All Categories

Retrieve all available video categories.

**Endpoint:**

```http
GET https://openapi.twoinsoft.com/categories
```

**Use cases:**
- Display category navigation.
- Create category buttons.
- Build category-based filtering UI.
- Organize videos by category.

## 4. Get Videos by Category

Retrieve videos belonging to a specific category using its category ID.

**Endpoint:**

```http
GET https://openapi.twoinsoft.com/category/1004
```

**Path Parameter:**

| Parameter | Example | Description |
|---|---|---|
| `categoryId` | `1004` | Unique category ID |

**Use cases:**
- Display videos from a selected category.
- Implement category filtering.
- Create category-specific video pages.
- Show related videos based on category.

---

## 💻 JavaScript Fetch Examples

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

### Get Videos by Category

```javascript
const getVideosByCategory = async (categoryId) => {
  try {
    const response = await fetch(
      `https://openapi.twoinsoft.com/category/${categoryId}`
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching category videos:", error);
  }
};

getVideosByCategory(1004);
```

---

## 🧠 What Will You Learn?

By working with this API, students can practice:

- REST API fundamentals
- HTTP GET requests
- JavaScript `fetch()`
- Async / Await
- JSON data handling
- Dynamic rendering
- Array methods (`map`, `filter`, etc.)
- Loading and error handling
- Reusable components
- Category-based filtering
- Building a YouTube-style user interface

## 🚀 Project Ideas

Build a YouTube Clone using these API endpoints.

Suggested features:

- Homepage with video cards
- Video details / watch page
- Category navigation
- Category-based video filtering
- Video thumbnails
- Channel information
- Responsive layout

## 📚 Learning Purpose

This API is intended for educational and practice purposes. It helps beginner developers understand how frontend applications communicate with APIs and display dynamic data.

**Happy Coding! ❤️**
