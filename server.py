from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

upcoming_events = [
	{
	"id": 1,
	"name": "Culture Connection: Strive From Within: The Jazzmeia Horn Approach",
	"date": "Nov 20, 7:00pm - 8:30pm",
	"location": "Virtual",
	"description": "Jazzmeia Horn has been one of jazz music’s rising stars in the past several years, selling out the most illustrious jazz venues around the world including the Appel Room in Jazz at Lincoln Center and The Kennedy Center in Washington D.C. Ms. Horn will be talking about her new book Strive From Within: The Jazzmeia Horn Approach, performing several musical numbers, and taking questions from our audience. Watch live on our Facebook page, htttps://www.facebook.com/QPLNYC."
	},
	{
	"id": 2,
	"name": "QPL English Language Conversation Practice Session: Thanksgiving and Party Planning",
	"date": "Nov 21, 11:00am - 12:00pm",
	"location": "Virtual",
	"description": "Join us at our ESOL Adult Conversation Group, where we will practice our conversational English skills and socialize with our peers! This program will be happening every Saturday at 11am. Go to https://queenslib.org/2Iqi7j7 and register."
	},
	{
	"id": 3,
	"name": "Chinese Music Appreciation: Erhu (Fiddle) with Yue Yang and Ba Ban Chinese Music Society",
	"date": "Nov 21, 4:00pm - 5:00pm",
	"location": "Virtual",
	"description": "Through demonstration of a variety of Chinese fiddles by Yue Yang and Zhou Yi, this workshop covers music history while enhancing understanding of the background of a famous repertoire. Watch live on Facebook: https://www.facebook.com/QPLNYC"
	},
	{
	"id": 4,
	"name": "Gabriel Guerrero: Jazz Piano",
	"date": "Nov 23, 4:00pm - 5:00pm",
	"location": "Virtual",
	"description": "Born in Colombia and based in New York City, Gabriel Guerrero draws his inspiration from South American rhythms and contemporary improvisation, and from the avant garde to the traditions of be-bop and jazz. He began his classical training at age five and made TV appearances at age nine. Tune in on Instagram Live, https://www.instagram.com/QPLNYC."
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
	},from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

upcoming_events = [
	{
	"id": 1,
	"name": "Culture Connection: Strive From Within: The Jazzmeia Horn Approach",
	"date": "Nov 20, 7:00pm - 8:30pm",
	"location": "Virtual",
	"description": "Jazzmeia Horn has been one of jazz music’s rising stars in the past several years, selling out the most illustrious jazz venues around the world including the Appel Room in Jazz at Lincoln Center and The Kennedy Center in Washington D.C. Ms. Horn will be talking about her new book Strive From Within: The Jazzmeia Horn Approach, performing several musical numbers, and taking questions from our audience. Watch live on our Facebook page, htttps://www.facebook.com/QPLNYC."
	},
	{
	"id": 2,
	"name": "QPL English Language Conversation Practice Session: Thanksgiving and Party Planning",
	"date": "Nov 21, 11:00am - 12:00pm",
	"location": "Virtual",
	"description": "Join us at our ESOL Adult Conversation Group, where we will practice our conversational English skills and socialize with our peers! This program will be happening every Saturday at 11am. Go to https://queenslib.org/2Iqi7j7 and register."
	},
	{
	"id": 3,
	"name": "Chinese Music Appreciation: Erhu (Fiddle) with Yue Yang and Ba Ban Chinese Music Society",
	"date": "Nov 21, 4:00pm - 5:00pm",
	"location": "Virtual",
	"description": "Through demonstration of a variety of Chinese fiddles by Yue Yang and Zhou Yi, this workshop covers music history while enhancing understanding of the background of a famous repertoire. Watch live on Facebook: https://www.facebook.com/QPLNYC"
	},
	{
	"id": 4,
	"name": "Gabriel Guerrero: Jazz Piano",
	"date": "Nov 23, 4:00pm - 5:00pm",
	"location": "Virtual",
	"description": "Born in Colombia and based in New York City, Gabriel Guerrero draws his inspiration from South American rhythms and contemporary improvisation, and from the avant garde to the traditions of be-bop and jazz. He began his classical training at age five and made TV appearances at age nine. Tune in on Instagram Live, https://www.instagram.com/QPLNYC."
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

@app.route('/login')
def login(name=None):
	return render_template('login.html')

@app.route('/register')
def register(name=None):
	return render_template('register.html')


if __name__ == '__main__':
   app.run(debug = True)
