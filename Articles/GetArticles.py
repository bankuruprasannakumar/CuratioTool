#!usr/bin/python

import json, os, requests, urllib2, sys
from lxml import html
import time, random

def getResults(query, num_image):
    try:
        r = requests.get("https://www.google.co.in/search?num=5&q=" + query)
        page = str((r.text).encode("utf8"))
        t = page.find('<h3 class=')
        c = []
        a = []
        d = []
        count = 0
        num = 5
        while t != -1 and count < num:
            page = page[t+30:]
            t = page.find('&amp')
            c.append(page[:t].encode("utf8"))
            t = page.find('>') + 1
            page = page[t:]
            t = page.find('</a>')
            a.append(page[:t].encode("utf8").replace('<b>', '').replace('</b>', ''))
            t = page.find('<h3 class=')
            count += 1
        json_data = ""
        for i in range(0, len(c)):
            try:
                r = requests.get(c[i])
                page = html.fromstring(r.text)

                try:
                    text = page.xpath('//p/text()')
                    b = ""

                    for j in text:
                        b += j.encode("utf8") + ' '
                    b = b.replace('<b>', '').replace('</b>', '')
                except:
                    continue

                try:
                    d = page.xpath('//img/@src')[num_image]
                    if d.find('?') != -1:
                        d = d[:d.find('?')]
                    if d[:2] == "//":
                        d = "http:" + d
                    elif d[0] == '/':
                        d = 'http://' + query[(query.find("site:") + 5):] + d
                except:
                    d = ""
                json_data += json.dumps({"contentType": "READ", "productName": a[i], "image": d, "textArea": b, "productUrl": c[i]}) + ','
            except:
                continue
        time.sleep(random.randint(5, 10))
        return json_data;
    except:
        return ''
    

articles = "["
q = ""
for i in sys.argv[2:]:
    q += i + " "

if sys.argv[1] == 'fashion':
    #articles += getResults(q + "site:hubpages.com", 2)
    #articles += getResults(q + "site:www.ehow.com", 3)
    #articles += getResults(q + "site:gurl.com", 17)
    articles += getResults(q + "site:washingtonpost.com", 1)
    articles += getResults(q + "site:www.nytimes.com", 0)
    #articles += getResults(q + "site:www.articlesbase.com", 2)
    articles += getResults(q + "site:www.thefashionspot.com", 5)
    articles += getResults(q + "site:www.details.com", 4)
    articles += getResults(q + "site:www.thebudgetfashionista.com", 0)
    articles += getResults(q + "site:creativefashionglee.com", 1)
if sys.argv[1] == 'travel':
    articles += getResults(q + "site:thrillophilia.com", 6)
    articles += getResults(q + "site:hubpages.com", 2)
    articles += getResults(q + "site:www.articlesbase.com", 2)
    articles += getResults(q + "site:www.ehow.com", 3)
    articles += getResults(q + "site:www.holidify.com", 2)
    articles += getResults(q + "site:www.lonelyplanet.com", 0)
if sys.argv[1] == 'sports':
    articles += getResults(q + "site:hubpages.com", 2)
    #articles += getResults(q + "site:www.articlesbase.com", 2)
    articles += getResults(q + "site:www.ehow.com", 3)
    articles += getResults(q + "site:www.corespirit.com", 3)
    articles += getResults(q + "site:www.netfit.co.uk", 2)
    articles += getResults(q + "site:www.artofliving.org", 53)
    #articles += getResults(q + "site:www.healthfitnessrevolution.com", 53)
    #articles += getResults(q + "site:www.realbuzz.com", 2)
    articles += getResults(q + "site:blogs.psychcentral.com", 2)
if sys.argv[1] == 'food':
    articles += getResults(q + "site:www.ehow.com", 3)
    articles += getResults(q + "site:www.foodpeoplewant.com", 0)
    articles += getResults(q + "site:traveleatlove.com", 0)
    articles += getResults(q + "site:www.corespirit.com", 3)
    articles += getResults(q + "site:www.onegreenplanet.org", 22)
    articles += getResults(q + "site:www.mummumtime.com", 14)
if sys.argv[1] == 'music':
    #articles += getResults(q + "site:hubpages.com", 2)
    articles += getResults(q + "site:www.articlesbase.com", 2)
    articles += getResults(q + "site:www.ehow.com", 3)
    articles += getResults(q + "site:www.billboard.com/articles", 1)
    articles += getResults(q + "site:www.dailymail.co.uk", 4)
    articles += getResults(q + "site:www.music-web.org/blog", 0)
    articles += getResults(q + "site:modernmixing.com/blog", 2)
if sys.argv[1] == 'home':
    articles += getResults(q + "site:hubpages.com", 2)
    articles += getResults(q + "site:crhideas.com", 1)
    articles += getResults(q + "site:www.topdreamer.com", 5)
    articles += getResults(q + "site:www.housebeautiful.com", 0)
    #articles += getResults(q + "site:www.realsimple.com", 3)
    articles += getResults(q + "site:www.goodhousekeeping.com", 0)
    articles += getResults(q + "site:www.ehow.com", 3)
if sys.argv[1] == 'life-hacks':
    articles += getResults(q + "site:www.articlesbase.com", 2)
    articles += getResults(q + "site:crhideas.com", 1)
    articles += getResults(q + "site:hubpages.com", 2)
    articles += getResults(q + "site:www.topdreamer.com", 2)
    articles += getResults(q + "site:www.ehow.com", 3)
    articles += getResults(q + "site:lifehacker.com", 2)
    
#dailymail.co.uk / 4

if articles == '[':
    articles = '[]'
articles = articles[:-1] + "]"

print articles
