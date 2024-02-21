from textblob import TextBlob

sentence = "The issue is severe"
res = TextBlob(sentence)
print(res.sentiment.polarity)