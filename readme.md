# ToDo App - Django Backend with React Frontend

ToDo App is a web application that combines a Django backend with a React frontend to manage tasks and to-do lists.

## Setup

To run ToDo App locally, follow these steps:

1. Clone the repository:
git clone https://github.com/JPLopezOrozco/Todo.git
cd todo-app

2. Activate the virtual environment (`venv`):
source venv/bin/activate # On Windows use venv\Scripts\activate

3. Install Python dependencies:
pip install -r requirements.txt


4. Install Node.js dependencies for the frontend and build the React app:
cd frontend
npm install react
npm run build


## Usage

1. Start the Django development server:
python manage.py runserver


2. Open your web browser and go to `http://localhost:8000/` to use the ToDo App.

## API Endpoint

- **GET /api/tasks/**: Retrieves all tasks.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

Email - jplopezorozco@gmail.com

Project Link: [https://github.com/JPLopezOrozco/Todo.git](https://github.com/JPLopezOrozco/Todo.git)