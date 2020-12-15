from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

upcoming_events = [
	{
	"id": 1,
	"altname": "Soul Food with The Queensboro",
	"name": "It’s Time For Kind: Soul Food with The Queensboro",
	"date": "Dec 14, 2:00pm - 3:00pm",
	"location": "Virtual",
	"photo": "https://image.queenslibrary.org/lamps/styles/event_large/001550-11-20_Soul%20Food.jpg",
	"description": "Join us as we highlight several restaurants and organizations that have been continuing to help feed our communities despite COVID-19. We'll be talking about food, community, and what it means to be kind. For this episode, we will be talking to Dudley Stewart of The Queensboro. During the pandemic, they have made meals for essential workers while also providing for the local Jackson Heights community during these difficult times. Watch on our Facebook page, https://www.facebook.com/QPLNYC",
	"help_offered": ["Filling out forms in English", " Legal advice"],
	"help_people": {"Filling out forms in English":[{"pid": 1,"name": "Ron","available": "After Event","language": "Mandarin"}, {"pid": 2,"name": "Harry","available": "Before Event","language": "Spanish"}], " Legal advice": [{"pid": 3,"name": "Hermionie","available": "After Event","language": "Mandarin"}, {"pid": 2,"name": "Harry","available": "Before Event","language": "Spanish"}]},
	"languages_spoken": ["Spanish", " English", " Korean"],
	"offer_help": ["Korean conversation"],
	},
	{
	"id": 2,
	"altname": "Watercolor Basics: Art and Culture",
	"name": "Watercolor Basics: Art and Culture",
	"date": "Dec 16, 6:00pm - 8:00pm",
	"location": "Virtual",
	"photo": "https://image.queenslibrary.org/lamps/styles/event_large/001158-10-20_water%20color.jpg",
	"description": "This workshop aims to introduce the essentials of watercolor painting. It outlines the tools needed and provides space to practice different watercolor techniques. This workshop is free but registration is required. Please email: ggaraycochea@queensmuseum.org",
	"help_offered": ["Mandarin Translation", " Chinese Conversation"],
	"help_people": {"Mandarin Translation":[{"pid": 1,"name": "Rupal","available": "After Event","language": "Mandarin"}, {"pid": 2,"name": "Ramisa","available": "Before Event","language": "Spanish"}], " Chinese Conversation": [{"pid": 3,"name": "Laura","available": "After Event","language": "Mandarin"}, {"pid": 2,"name": "Harry","available": "Before Event","language": "Spanish"}]},
	"languages_spoken": ["Mandarin", " Spanish", " English"],
	"offer_help": ["Korean conversation"],
	},
	{
	"id": 3,
	"altname": "Chinese Cultural Lecture",
	"name": "Chinese Cultural Lecture: Explore the Hidden Cultural Treasures in Taipei presented by Dr. Liu Yuan",
	"date": "Dec 19, 8:00pm - 10:00pm",
	"location": "Virtual",
	"photo": "https://image.queenslibrary.org/lamps/styles/event_large/001620-11-20_532.jpg",
	"description": "Dr. Yuan Liu is a bilingual docent at the National Museum of Asian Art, a writer, and a photographer, who serves as a cultural ambassador to build bridges between Western and Asian Cultures. In this seminar, they will share with the audience their interesting experiences in hunting the hidden treasures around Taipei. Join here: https://queenslib.org/3oFircZ",
	"help_offered": ["English Conversation", " Reading help"],
	"help_people": {"English Conversation":[{"pid": 1,"name": "Andrea","available": "After Event","language": "Mandarin"}, {"pid": 2,"name": "Paul","available": "Before Event","language": "Spanish"}], " Reading help": [{"pid": 3,"name": "Lydia","available": "After Event","language": "Mandarin"}, {"pid": 2,"name": "Harry","available": "Before Event","language": "Spanish"}]},
	"languages_spoken": ["Mandarin", " Korean", " Yiddish "],
	"offer_help": ["Korean conversation"],
	},
	{
	"id": 4,
	"altname": "Gabriel Guerrero: Jazz Piano",
	"name": "Gabriel Guerrero: Jazz Piano",
	"date": "Dec 21, 4:00pm - 5:00pm",
	"location": "Virtual",
	"photo": "https://image.queenslibrary.org/lamps/styles/event_large/001151-10-20_1151.jpg",
	"description": "Born in Colombia and based in New York City, Gabriel Guerrero draws his inspiration from South American rhythms and contemporary improvisation, and from the avant garde to the traditions of be-bop and jazz. He began his classical training at age five and made TV appearances at age nine. Tune in on Instagram Live, https://www.instagram.com/QPLNYC.",
	"help_offered": ["Filling out forms in English", " Korean Conversation"],
	"help_people": {"Filling out forms in English":[{"pid": 1,"name": "Mark","available": "After Event","language": "Mandarin"}, {"pid": 2,"name": "Ann-Laure","available": "Before Event","language": "Spanish"}], " Korean Conversation": [{"pid": 3,"name": "Sophia","available": "After Event","language": "Mandarin"}, {"pid": 2,"name": "Harry","available": "Before Event","language": "Spanish"}]},
	"languages_spoken": ["English", " Spanish", " Korean"],
	"offer_help": ["Korean conversation"],
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

@app.route('/submit_proposal')
def submit_proposal(name=None):
	return render_template('submit_proposal.html')


if __name__ == '__main__':
   app.run(debug = True)
