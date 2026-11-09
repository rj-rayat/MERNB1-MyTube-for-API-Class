# myTube API Documentation

Welcome to the official API documentation for **myTube**, a dynamic video-sharing platform clone built for educational and full-stack development purposes.

---

## Base URL
https://openapi.twoinsoft.com

---

## Endpoints Overview

### 1. Get All Categories
- **URL:** `/categories`
- **Method:** `GET`
- **Description:** Retrieves the list of video categories available on the platform for dynamic filter buttons.

#### Response Example:
```json
[
  {
    "category_id": "1001",
    "category_name": "Music"
  },
  {
    "category_id": "1004",
    "category_name": "Programming"
  }
]
```

---

### 2. Get All Videos
- **URL:** `/videos`
- **Method:** `GET`
- **Description:** Retrieves all uploaded videos, including thumbnail URLs, author details, view counts, and timestamps for grid rendering.

#### Response Example:
```json
{
  "status": true,
  "videos": [
    {
      "category_id": "1004",
      "video_id": "vid001",
      "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=85",
      "title": "JavaScript Fundamentals: Variables, Functions & Loops",
      "authors": [
        {
          "profile_picture": "https://i.pravatar.cc/120?img=1",
          "profile_name": "Nusrat Jahan",
          "verified": true
        }
      ],
      "others": {
        "views": "128K",
        "posted_date": "786600"
      }
    }
  ]
}
```

---

### 3. Get Single Video Details
- **URL:** `/videos/:id` (e.g., `/videos/vid001`)
- **Method:** `GET`
- **Description:** Retrieves detailed information for a specific video by its unique ID for single video watch pages.

#### Response Example:
```json
{
  "category_id": "1004",
  "category_name": "Programming",
  "video_id": "vid001",
  "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=85",
  "title": "JavaScript Fundamentals: Variables, Functions & Loops",
  "authors": [
    {
      "channel_id": "channel001",
      "profile_picture": "https://i.pravatar.cc/120?img=1",
      "profile_name": "Nusrat Jahan",
      "verified": true,
      "subscribers": "19K"
    }
  ],
  "others": {
    "views": "128K",
    "posted_date": "786600",
    "duration": "18:42",
    "likes": "8.4K",
    "comments": "326"
  },
  "description": "Learn JavaScript from the ground up with practical examples of variables, functions, loops, and clean coding habits."
}
```

---

## Frontend Integration & Helper Functions

### Time-Ago Helper Function
To format raw timestamp seconds into readable text:
```javascript
const getTimeAgo = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const months = Math.floor(days / 30);
    return months > 0 ? `${months} months ago` : days > 0 ? `${days} days ago` : "Today";
};
```