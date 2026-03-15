# FindMy: Exam Seating Information System

## Overview
**FindMy** is a high-performance web application designed to streamline the process of locating exam seating assignments for college students. By digitizing the traditional physical notice board, the platform allows students to retrieve their room number, building name, and floor details instantly using their unique roll number.

## Problem Statement
During examination periods, physical notice boards often lead to significant student congestion and delays. **FindMy** eliminates this bottleneck by providing a scalable, digital solution that ensures sub-second query latency even during peak concurrent traffic.

## Technical Specifications

| Component      | Technology           | Role                                      |
| :------------- | :------------------- | :---------------------------------------- |
| **Frontend** | React.js / Next.js   | Client-side rendering and responsive UI   |
| **Backend** | Node.js / Express.js | RESTful API and business logic            |
| **Database** | MongoDB / PostgreSQL | High-speed indexed data storage           |
| **Styling** | Tailwind CSS         | Utility-first CSS for rapid, clean UI     |
| **Deployment** | Vercel / AWS         | Cloud hosting and scalability             |

## Data Schema
The system utilizes a structured data model to ensure fast lookups. Below is the primary schema used for student seating:

| Field             | Type            | Description                                  |
| :---------------- | :-------------- | :------------------------------------------- |
| `roll_number`     | String (Unique) | The primary key used for searching           |
| `student_name`    | String          | Full name of the student                     |
| `building_name`   | String          | Name of the assigned building/block          |
| `floor`           | String          | Specific floor (e.g., 2nd Floor)             |
| `room_number`     | String          | Designated exam hall/room                    |
| `exam_code`       | String          | Unique code for the specific subject exam    |

## Core Features
* **Optimized Search Engine:** High-speed retrieval of seating assignments via roll number identification.
* **Comprehensive Metadata:** Displays detailed information including Building Name, Floor, Room Number, and Exam Category.
* **Mobile-First Architecture:** Responsive UI optimized for fast access on mobile devices during student commutes.
* **Traffic Resilience:** Engineered to handle high concurrency during the critical 15-minute window before exams begin.

## Getting Started

### Prerequisites
* Node.js (v18.x or higher)
* npm or yarn
* Database instance (local or cloud-hosted)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/korderushi07/FindMy.git](https://github.com/korderushi07/FindMy.git)
    cd FindMy
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the root directory and configure the following variables:
    ```env
    DATABASE_URL=your_database_connection_string
    PORT=3000
    ```

4.  **Execute Development Server:**
    ```bash
    npm run dev
    ```

## Usage
1.  Navigate to the deployed URL or `localhost:3000`.
2.  Input the unique student **Roll Number**.
3.  The system will instantly display the designated seating details and building location.

## Contributing
Contributions are welcome to enhance the functionality and scalability of this project. 
1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/NewFeature`).
3.  Commit changes (`git commit -m 'Add NewFeature'`).
4.  Push to the branch (`git push origin feature/NewFeature`).
5.  Open a Pull Request.

## Designed with Curiosity by-
**Rushikesh Korde** [LinkedIn](https://www.linkedin.com/in/rushikesh-korde) | [GitHub](https://github.com/korderushi07) | [Email](mailto:rushi.korde07@gmail.com)
