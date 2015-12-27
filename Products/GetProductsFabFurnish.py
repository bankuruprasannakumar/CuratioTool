import urllib2, json, requests, sys
from lxml import html

def getResults(query):
    r = requests.get('http://www.fabfurnish.com/catalog/?q=' + query)
    page1 = str(r.text.encode("utf8"))
    page = page1
    
    urls = []
    titles = []
    count = 0

    t = page.find('<a class="itm-link " href="')
    t1 = page1.find('<div class="itmContBg')
    page1 = page1[t1:]
    t1 = page1.find('>')
    while t != -1 and count < 25:
        page = page[27+t:]
        page1 = page1[t1+1:]
        x = page.find('"')
        t1 = page1.find('</div>')
        titles.append(page1[:t1])
        urls.append(page[:x])
        count += 1
        t = page.find('<a class="itm-link " href="')
        t1 = page1.find('<div class="itmContBg')
        page1 = page1[t1:]
        t1 = page1.find('>')
    json_data = '['
    for i in range(0, len(urls)):
        r = requests.get(urls[i])
        page = html.fromstring(r.text)
        pagestr = str(r.text.encode('utf8'))
        
        images = []
        image = pagestr
        t = pagestr.find('<div id="imgThumb')
        while t != -1:
            image = image[t:]
            image = image[image.find('longproductDesc="')+10:]
            images.append(image[:image.find('"')])
            t = image.find('<div id="imgThumb')
        
        details = pagestr[pagestr.find('<div class="prd-attr-box bb">')+29:]
        details = details[:details.find('<div')]
        
        y = pagestr.find('<div class="prd-attribute')
        if y != -1:
            color = pagestr[y:]
            y = color.find('Color: ')
            color = color[y+7:]
            color = color[:color.find('<br />')]
        else:
            color = ''

        price = pagestr[pagestr.find('<span id="price_box">')+21:]
        price = price[:price.find('</span>')]

        t = pagestr.find('<span id="special_price_box">')

        if t != -1:
            dprice = pagestr[pagestr.find('<span id="special_price_box">')+29:]
            dprice = dprice[dprice.find('>')+1:]
            dprice = dprice[:dprice.find('</span>')]
            discountPerc = str(((int(price.replace(',', '')) - int(dprice.replace(',', ''))) * 100) / int(price.replace(',', '')))
        else:
            discountPerc = ''

        json_data += json.dumps({"merchantName":"Fab Furnish", "contentType":"BUY", "productName":titles[i], "productUrl":urls[i], "productDesc":details, "productPrice":price, "brand":"Fab Home", "color":color, "images":images}) + ','
        
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
