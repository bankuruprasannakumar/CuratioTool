#!usr/bin/python

from lxml import html
import requests, json, os, sys
import urllib2

def getResults(query):
    r = requests.get("https://play.google.com/store/search?q=" + query + "&c=apps")
    page = html.fromstring(r.text)
    
    title = page.xpath('//a[@class="title"]/@title')
    num = len(title)
    for i in range(0, num):
        title[i] = title[i].encode("utf8")
    author = page.xpath('//a[@class="subtitle"]/@title')
    for i in range(0, num):
        author[i] = author[i].encode("utf8")
    link = page.xpath('//a[@class="title"]/@href')
    price = page.xpath('//span[@class="display-price"]/text()')
    for i in range(0, num):
        link[i] = "https://play.google.com" + link[i]
    
    image = ""
    rating = ""
    features = []
    comments = []
    details = ""
    images = []
    
    json_data = "["
    
    for i in range(0, num):
        r = requests.get(link[i])
        page = html.fromstring(r.text)
        image = page.xpath('//img[@class="cover-image"]/@src')[0]
        if image[0] != 'h':
            image = 'https:' + image
        images = [image] + page.xpath('//div[@class="thumbnails"]/img/@src')
        if len(images) >= 4:
            images = images[:4]
        for j in range(0, len(images)):
            if images[j][0] != 'h':
                images[j] = "https:" + images[j]
        else:
            while len(images) != 4:
                images.append("")
        
        code = str((r.text).encode("utf8"))
        
        a = code.find("<div jsname=")
        a += 21
        b = code.find("</div>", a)
        details = code[a:b]
        
        try:
            rating = str(page.xpath('//div[@class="score"]/text()')[0])
        except:
            rating = 'N/A'
            
        t = page.xpath('//div[@class="review-body"]/text()')
        if len(t) > 9:
            t = t[:9]
        comments = []
        for j in range(0, len(t)):
            t[j] = t[j].strip()
            if t[j] != '':
                comments.append(t[j])

        t = page.xpath('//div[@class="recent-change"]/text()')[:10]
        if len(t) > 10:
            t = t[:10]
        features = []
        for j in range(0, len(t)):
            t[j] = t[j].strip()
            if t[j] != '':
                features.append(t[j])

        json_data += json.dumps({"contentType":"D/L", "productUrl":link[i], "productName":title[i], "contributor":author[i], "productDesc":details, "rating":rating, "reviews":comments, "features":features, "productPrice":price[i], "images":images}) + ','

    json_data = json_data[:-1] + "]"
    if json_data == ']':
        print "[]"
    print json_data
    
q = ""
for i in sys.argv[1:]:
    q += i + ' '

getResults(q[:-1])
