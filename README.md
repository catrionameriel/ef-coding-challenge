# e.fundamentals Coding Challenge Create a Word cloud

# Introduction:

We gather raw HTML pages from retail sites this data is then processed and extracted, one of the fields extracted are product reviews.

The example reviews below are an illustration of the types of reviews we may gather.

Your challenge is to process this data and display it in the form of a word cloud.

# Requirements:

1. Create a ReactJS component as a tabular view to display a count of the frequency of words found in reviews.

2. Extend this to display the words as a word cloud where more frequent words are displayed larger on screen than others, you can do this simply by increasing the size of words and displaying them in a table or attempt to do it in a more interesting way, perhaps a use of a charting library.  or pull your own product reviews from a online retailer such as amazon.co.uk

3. You should include suitable unit tests

Feel free to render as you like bearing in mind we are more interested in your construction of ReactJS components and how this is represented with real data on screen.

# Approach to counting words from JSON

- Review = Array of strings
- Join all reviews together
- Remove all annoying characters
- Make all lowercase
- Make each word a seperate array
- Filter out two letter words
- Filter out words from blacklist
- Create WordCloud object
- Count words and push to object
- Display as table and style
- Then continue on to create word cloud

# Approach to styling word cloud

- Use count of word to select text class size
- Randomly select a colour for each word
- Randomly select a text direction and alignment for each word
