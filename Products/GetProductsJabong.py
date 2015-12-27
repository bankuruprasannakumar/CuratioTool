import urllib2, json, requests, sys
from lxml import html

def getResults(query):
    r = requests.get('http://www.jabong.com/find/' + query.replace(' ', '-') + '/?q=' + query + '&qc=' + query)
    page = str(r.text.encode("utf8"))

    urls = []
    count = 0
    t = page.find('<div class="col-xxs-6')
    page = page[t:]
    t = page.find('<a href="/')
    while t != -1 and count < 25:
        page = page[9+t:]
        x = page.find('?')
        urls.append('http://www.jabong.com' + page[:x])
        count += 1
        t = page.find('<div class="col-xxs-6')
        page = page[t:]
        t = page.find('<a href="/')
    json_data = '['
    for i in urls:
        r = requests.get(i)
        page = html.fromstring(r.text)
        pagestr = str(r.text.encode('utf8'))
        images = page.xpath('//img/@data-img-config')
        for j in range(0, len(images)):
            images[j] = images[j][images[j].find('path":"')+7:]
            images[j] = images[j][:images[j].find('"')] + '.jpg'

        y = pagestr.find('<h2 class="prod-disc') + 45
        details = pagestr[y:pagestr.find('</h2>')]

        brand = pagestr[pagestr.find('<span itemprop="brand" class="brand">')+37:]
        brand = brand[:brand.find('</span>')]

        title = pagestr[pagestr.find('<span itemprop="name" class="product-title">')+44:]
        title = title[:title.find('</span>')]
        
        y = pagestr.find('<label>Color</label><span>')
        if y != -1:
            color = pagestr[y+26:]
            color = color[:color.find('</span>')]
        else:
            color = ''
        
        t = pagestr.find('<span class="standard-price ">')
        if t != -1:
            price = pagestr[t+30:]
            price = price[:price.find('</span>')]

            discountPerc = pagestr[pagestr.find('<span class="discount productDiscount">(')+40:]
            discountPerc = discountPerc[:discountPerc.find('%)</span>')]
        else:
            price = pagestr[pagestr.find('class="actual-price">')+21:]
            price = price[:price.find('</span>')]
            
            discountPerc = ''
        
        json_data += json.dumps({"merchantName":"Jabong", "contentType":"BUY", "productName":title, "productUrl":i, "productDesc":details, "productPrice":price, "brand":brand, "color":color, "images":images, "rating": ""}) + ','

    try:
        json_data = json_data[:-1] + ']'
    except:
        pass
    if json_data == ']':
        json_data = '[]'
        
    print json_data
    
q = ''
for i in sys.argv[1:]:
    q += i + ' '

getResults(q[:-1])
