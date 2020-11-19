from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

upcoming_events = [
	{
	"id": 1,
	"name": "Salsa Lessons",
	"date": "Monday, November 16",
	"time": "7PM",
	"location": "Library Hall"
	},
	{
	"id": 2,
	"name": "Sushi Cooking Class",
	"date": "Friday, November 20",
	"time": "11AM",
	"location": "Local Restaurant"
	},
	{
	"id": 3,
	"name": "Pottery Workshop",
	"date": "Wednesday, November 24",
	"time": "7PM",
	"location": "Library Room 14"
	},
	{
	"id": 4,
	"name": "Salsa Lessons",
	"date": "Wednesday, November 24",
	"time": "8PM",
	"location": "Flushing Meadows Park"
	}
]

people = [
	{
	"id": 1,
	"name": "Harry",
	"date": "Monday, November 16",
	"time": "7PM",
	"location": "Library Hall",
	"language": "French",
	},
	{
	"id": 2,
	"name": "Hermionie",
	"date": "Friday, November 20",
	"time": "11AM",
	"location": "Local Restaurant",
	"language": "Mandarin",
	},
	{
	"id": 3,
	"name": "Ron",
	"date": "Wednesday, November 24",
	"time": "7PM",
	"location": "Library Room 14",
	"language": "Spanish",
	},
	{
	"id": 4,
	"name": "Edward",
	"date": "Wednesday, November 24",
	"time": "8PM",
	"location": "Flushing Meadows Park",
	"language": "Urdu",
	}
]


@app.route('/')
def home(name=None):
	return render_template('home.html')

@app.route('/events')
def search(name=None):
	return render_template('events.html', upcoming_events=upcoming_events)

@app.route('/event_selected')
def event_selected(name=None):
	return render_template('event_selected.html', upcoming_events=upcoming_events, people=people)

if __name__ == '__main__':
   app.run(debug = True)

