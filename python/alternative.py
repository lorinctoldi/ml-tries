from nltk.sentiment import SentimentIntensityAnalyzer
from tqdm.notebook import tqdm

sia = SentimentIntensityAnalyzer()

print(sia.polarity_scores('severe'))
print(sia.polarity_scores('critical'))
print(sia.polarity_scores('low'))
print(sia.polarity_scores('medium'))
print(sia.polarity_scores('high'))