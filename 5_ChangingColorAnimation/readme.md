# Changing Rectangle's color with Mouse Movement

This project demonstrates an interactive rectangle that changes color based on mouse position.  
Move your cursor **inside the rectangle**:
- When you move the mouse towards the **left side**, the rectangle gradually turns **red**.
- When you move the mouse towards the **right side**, it gradually turns **blue**.
- The color intensity increases based on how far you are from the center.

---

## Demo

Hover over the rectangle to see the color change in real-time!  
Left side → 🔴 Red  
Right side → 🔵 Blue  
Mouse leave → ⚪ White

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **GSAP (GreenSock Animation Platform)** for smooth transitions

---

## How It Works

### Steps:

1. **CHECK**: Detect if the mouse is moving **inside the rectangle**.
2. **CHECK**: Determine whether the cursor is on the **left** or **right** of the rectangle’s **center**.
3. **CALCULATE**: Measure **how far** the cursor is from the center.  
   The **more distance**, the **more intense** the color.

### Logic:

- If mouse is on the **left side**, increase **red intensity**:  
  `rgb(255, 0, 0)` (max red) → `rgb(0, 0, 0)` (center)
  
- If mouse is on the **right side**, increase **blue intensity**:  
  `rgb(0, 0, 0)` (center) → `rgb(0, 0, 255)` (max blue)

- On mouse **leave**, the color resets to **white**.

