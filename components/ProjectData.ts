export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  category: string;
  codeUrl: string;
  createdDate: string;
  youtubeVideoId?: string;
  codeSnippets?: {
    language: string;
    code: string;
  }[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'End to end data pipeline',
    description: 'Developed a real-time data processing pipeline for a music streaming service.',
    longDescription: 'This project showcases the implementation of a scalable, real-time data pipeline using Spotify API, Apache Kafka, Apache Spark Streaming, and Streamlit. The system ingests music data, processes it in real-time to calculate trends and analytics, and serves the results through a user-friendly dashboard. It is designed to handle high-throughput data streams efficiently.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
    techStack: ['Python', 'Spark', 'Kafka', 'Cassandra', '+2 more'],
    category: 'Engineering',
    codeUrl: '#',
    createdDate: 'August 15, 2025',
    youtubeVideoId: 'dQw4w9WgXcQ',
    codeSnippets: [
        {
            language: 'python',
            code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import from_json, col
from pyspark.sql.types import StructType, StringType

# Initialize Spark Session
spark = SparkSession.builder \\
    .appName("SpotifyStreamProcessor") \\
    .getOrCreate()

# Read from Kafka topic
df = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "localhost:9092") \\
    .option("subscribe", "spotify_tracks") \\
    .load()
`
        }
    ]
  },
  {
    id: 2,
    title: 'GOT characters graph',
    description: 'Created an interactive graph visualization of Game of Thrones character relationships.',
    longDescription: "After reading the books in the series 'A Song of Ice and Fire' by G. R. R. Martin, as a true fan of Game of Thrones, you might be curious about who is the most influential person in Westeros. Or you know that Eddard Stark and Randyll Tarly are connected but not quite sure how exactly they are connected. Are they connected by a third, or fourth person? This project visualizes the intricate web of relationships, alliances, and conflicts between the characters from the acclaimed series.",
    image: 'https://i.imgur.com/eB42oco.png',
    techStack: ['Graph', 'Visualization', 'Python', 'NetworkX', 'Plotly'],
    category: 'Graph theory',
    codeUrl: '#',
    createdDate: 'July 30, 2025',
    youtubeVideoId: 'dQw4w9WgXcQ', // Example video
    codeSnippets: [
        {
            language: 'python',
            code: `import networkx as nx
import plotly.graph_objects as go

# Create a graph of characters
G = nx.Graph()
G.add_edge("Eddard Stark", "Robert Baratheon")
G.add_edge("Eddard Stark", "Catelyn Stark")
# ... more relationships

# Visualization logic here...
`
        }
    ]
  },
  {
    id: 3,
    title: 'Stock price prediction',
    description: 'Built a stock price prediction model using an LSTM neural network.',
    longDescription: 'This project involves building and training a Long Short-Term Memory (LSTM) neural network to predict future stock prices based on historical data. The model captures temporal dependencies in stock market trends to make accurate forecasts. The project covers data preprocessing, model architecture design, training, and evaluation.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
    techStack: ['Python', 'PyTorch', 'LSTM', 'Scikit-learn', '+1 more'],
    category: 'Time series analysis',
    codeUrl: '#',
    createdDate: 'June 20, 2025',
    youtubeVideoId: 'dQw4w9WgXcQ',
    codeSnippets: [
        {
            language: 'python',
            code: `import torch
import torch.nn as nn

class LSTMModel(nn.Module):
    def __init__(self, input_size=1, hidden_layer_size=100, output_size=1):
        super().__init__()
        self.hidden_layer_size = hidden_layer_size
        self.lstm = nn.LSTM(input_size, hidden_layer_size)
        self.linear = nn.Linear(hidden_layer_size, output_size)
        self.hidden_cell = (torch.zeros(1,1,self.hidden_layer_size),
                            torch.zeros(1,1,self.hidden_layer_size))

    def forward(self, input_seq):
        lstm_out, self.hidden_cell = self.lstm(input_seq.view(len(input_seq), 1, -1), self.hidden_cell)
        predictions = self.linear(lstm_out.view(len(input_seq), -1))
        return predictions[-1]
`
        }
    ]
  },
  {
    id: 4,
    title: 'Data Science Market Analysis',
    description: 'Analyzed the German data science job market to identify key trends and skills.',
    longDescription: 'An in-depth analysis of the data science job market in Germany. This project scrapes and analyzes job postings to uncover key trends, in-demand skills, salary distributions, and regional differences. The findings are presented in an interactive dashboard to help data scientists navigate their career paths.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    techStack: ['Data Science', 'Visualization', 'Python', 'Pandas'],
    category: 'Data Science',
    codeUrl: '#',
    createdDate: 'May 05, 2025',
    youtubeVideoId: 'dQw4w9WgXcQ',
    codeSnippets: [
        {
            language: 'python',
            code: `import pandas as pd
import plotly.express as px

# Load the dataset of job postings
df = pd.read_csv('german_ds_jobs.csv')

# Simple analysis: Count jobs by city
city_counts = df['city'].value_counts().nlargest(10)

# Create a bar chart
fig = px.bar(city_counts, x=city_counts.index, y=city_counts.values,
             labels={'x': 'City', 'y': 'Number of Job Postings'},
             title='Top 10 Cities for Data Science Jobs in Germany')
fig.show()
`
        }
    ]
  },
  {
    id: 5,
    title: 'YOLO',
    description: 'Real-time object detection using the YOLO (You Only Look Once) algorithm.',
    longDescription: 'This project implements the YOLO (You Only Look Once) algorithm for real-time object detection in images and videos. It demonstrates how to train a YOLO model on a custom dataset and use it for high-performance detection tasks, highlighting its speed and accuracy.',
    image: 'https://images.unsplash.com/photo-1589578235526-91e831885f69?q=80&w=2070&auto=format&fit=crop',
    techStack: ['Computer Vision', 'Python', 'PyTorch', 'YOLOv5'],
    category: 'Computer Vision',
    codeUrl: '#',
    createdDate: 'April 18, 2025',
    youtubeVideoId: 'dQw4w9WgXcQ',
    codeSnippets: [
        {
            language: 'python',
            code: `import torch
import cv2

# Load pre-trained YOLOv5 model
model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)

# Load an image
img = cv2.imread('my_image.jpg')

# Perform inference
results = model(img)

# Results
results.print() # print results to console
results.show()  # display results
`
        }
    ]
  },
  {
    id: 6,
    title: 'Linkedin Analysis',
    description: 'Sentiment analysis on LinkedIn posts to gauge public opinion on tech trends.',
    longDescription: "This project performs sentiment analysis on a collection of LinkedIn posts related to emerging technology trends. By analyzing the language and tone of the posts, the model gauges public opinion, identifies key discussion points, and tracks the sentiment evolution over time.",
    image: 'https://images.unsplash.com/photo-1611944212129-29955ae40213?q=80&w=1974&auto=format&fit=crop',
    techStack: ['NLP', 'Sentiment analysis', 'Python', 'NLTK'],
    category: 'NLP',
    codeUrl: '#',
    createdDate: 'March 22, 2025',
    youtubeVideoId: 'dQw4w9WgXcQ',
    codeSnippets: [
        {
            language: 'python',
            code: `from nltk.sentiment import SentimentIntensityAnalyzer
import nltk
nltk.download('vader_lexicon')

sia = SentimentIntensityAnalyzer()

post_text = "The new advancements in AI are absolutely revolutionary and exciting!"

# Get sentiment scores
sentiment = sia.polarity_scores(post_text)

print(sentiment)
# Output: {'neg': 0.0, 'neu': 0.53, 'pos': 0.47, 'compound': 0.7}
`
        }
    ]
  },
   {
    id: 7,
    title: 'Medium articles analysis',
    description: 'Topic modeling on a corpus of Medium articles related to artificial intelligence.',
    longDescription: 'Using topic modeling techniques like Latent Dirichlet Allocation (LDA), this project analyzes a large corpus of Medium articles about AI. It identifies hidden thematic structures, uncovers the most prevalent topics discussed in the AI community, and visualizes the relationships between them.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop',
    techStack: ['NLP', 'Python', 'Gensim', 'Scikit-learn', '+2 more'],
    category: 'NLP',
    codeUrl: '#',
    createdDate: 'February 10, 2025',
    youtubeVideoId: 'dQw4w9WgXcQ',
    codeSnippets: [
        {
            language: 'python',
            code: `import gensim
from gensim import corpora
from pprint import pprint

# Sample documents (preprocessed text)
doc_a = "The cat sat on the mat."
doc_b = "The dog chased the cat."
doc_set = [doc_a.split(), doc_b.split()]

# Create a dictionary and corpus
dictionary = corpora.Dictionary(doc_set)
corpus = [dictionary.doc2bow(doc) for doc in doc_set]

# Build LDA model
Lda = gensim.models.ldamodel.LdaModel
ldamodel = Lda(corpus, num_topics=2, id2word=dictionary, passes=50)

pprint(ldamodel.print_topics(num_topics=2, num_words=3))
`
        }
    ]
  },
];