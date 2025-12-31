# BrightStep: Adaptive Skills Reinforcement Platform

An adaptive learning tool designed to help individuals practice real-world skills through interest-based reinforcement, combining academic, physical, and cognitive development into engaging, structured activities.

This project is inspired by the needs of neurodivergent learners and aims to provide meaningful practice that feels purposeful, motivating, and transferable to daily life.

---

## 🎯 Project Purpose

Many educational tools focus on isolated skills or abstract exercises. This project takes a different approach:

- Skills are practiced **in context**
- Engagement is driven by **personal interests**
- Progress is tracked over time through **structured sessions**

The initial implementation focuses on practicing **“WHY” questions**, helping users build reasoning, explanation, and cause–effect understanding.

---

## 🧠 Skills Supported (Current & Planned)

**Current**
- Answering basic “Why” questions

**Planned**
- Arithmetic in real-world scenarios
- Reading & sight-word recognition
- Time and location awareness
- Direction-giving and question-asking
- Physical activity reinforcement (e.g. exercise, sports drills)

The system is designed to scale to new skills and activities without restructuring the core data model.

---

## 🏗️ Architecture Overview

- **Client**: Frontend UI (framework-agnostic by design)
- **Server**: Node.js + Express backend
- **Database**: MySQL relational schema
- **API**: RESTful endpoints serving adaptive prompts and recording responses

---

## 🗄️ Database Design Philosophy

The database is structured around:
- **Users** → who is practicing
- **Activities** → what context they are in
- **Sessions** → when learning occurs
- **Skills** → what is being developed
- **Prompts** → what is being asked
- **Responses** → how users engage

This ensures:
- Clear purpose for every table
- Easy extensibility
- Meaningful data for progress tracking

---

## ⚠️ AI Assistance Disclosure

> **Note:**  
> This README was generated with the assistance of AI.

AI was also used during:
- Project ideation and scoping
- Schema design review
- Code explanation and proofreading

All architectural decisions, implementation, and final code are authored, reviewed, and curated by the developer.

AI is used as a **development aid**, not a replacement for understanding or ownership.

---

## 📌 Project Status

🚧 Early-stage development  

---

## 📜 License

MIT License
