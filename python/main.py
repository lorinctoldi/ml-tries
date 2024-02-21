from transformers import AutoTokenizer
from transformers import AutoModelForSequenceClassification
from scipy.special import softmax

import numpy as np

MODEL = f"cardiffnlp/twitter-roberta-base-sentiment"
tokenizer = AutoTokenizer.from_pretrained(MODEL)
model = AutoModelForSequenceClassification.from_pretrained(MODEL)

def getSentiment(text):
  encoded_text = tokenizer(text, return_tensors='pt')
  output = model(**encoded_text)
  output_scores = output[0][0].detach().numpy()
  scores = softmax(output_scores)
  score = {
    'neg' : scores[0],
    'pos' : scores[2]
  }
  
  return score

def getSeverity(type, severity, title, description):
  type_scores = getSentiment(type)
  severity_scores = getSentiment(severity)
  title_scores = getSentiment(title)
  description_scores = getSentiment(description)
  
  type_score = (type_scores['neg'] - type_scores['pos'])
  title_score = (title_scores['neg'] - title_scores['pos'])
  description_score = (description_scores['neg'] - description_scores['pos'])
  
  score = 0 + 0 + title_score + description_score
  return score;

examples = [
  {
    'type': 'Deficiency',
    'severity': 'high',
    'title': 'Malware detected',
    'description': 'Our security system have detected malware on your company computer. It is imperative that we address this issue immediately to prevent any further hrm to our systems and data.'
  },
  {
    'type': 'Significant Deficiency',
    'severity': 'medium',
    'title': 'OS versions are out of date',
    'description': 'Upon a recent review conducted by our IT security team, it has come to our atteintion that several of our company computers are running outdated operating system (OS) versions. As you may know, using outdated OS versions poses significant security risks to our organization, as these systems are more vulnerable to cyber attacks and exploits.'
  },
  {
    'type': 'Management Recommendation',
    'severity': 'low',
    'title': 'Acess control practises are not optimal',
    'description': 'Following a comprehensive review conducted by our IT security team, it has been identified that our current access control practises are not meeting the optimal standards required for ensuring the security and integrity of our data any system.'
  }
]

obj = {};
for e in examples:
  obj[e['severity']] = getSeverity(e['type'], e['severity'], e['title'], e['description'])
  
print(obj)