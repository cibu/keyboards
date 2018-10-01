def addKBD(wrd):
    '''Add <kbd> around each letter of the given word'''
    NewWrd = ""
    if(wrd=="" or wrd.strip()==""):
        return ""
    else:
        for letter in wrd:
            NewWrd = NewWrd + "<kbd>" + letter + "</kbd>"
        return(NewWrd)

def buildHTML(eg):
    example = eg.split("\n")
    htmlstring=""
    htmlstring += '<table class="exampleTable">\n\t<thead>\n'
    headrow = example[0].split("|")
    classes = []
    for classname in headrow:
        if(classname.strip()=="Mozhi"):
            htmlstring+="\t\t<th>Mozhi</th>\n"
            classes.append('keystroke')
        elif(classname.strip()=="Malayalam"):
            htmlstring+="\t\t<th>Malayalam</th>\n"
            classes.append('rachana')
        elif(classname.strip()=="Unicode Name"):
            htmlstring+="\t\t<th>Unicode Name</th>\n"
            classes.append('unicode')
        elif(classname.strip()=="Example"):
            htmlstring+="\t\t<th>Example</th>\n"
            classes.append('example')
        elif(classname.strip()=="Example in Mozhi"):
            htmlstring+="\t\t<th>Example in Mozhi</th>\n"
            classes.append('ex_keystroke')
        else:
            htmlstring+="\t\t<th>" + classname.strip() + "</th>\n"
    htmlstring+="\t</thead>\n\t<tbody>\n"
    for ex in example[1:]:
        try:
            ex = ex.split("|")
            print(ex, len(classes), len(ex))
            htmlstring+='\t\t<tr>\n\t\t\t<td class="' +classes[0] +'">' + addKBD(ex[0])+'</td>\n\t\t\t' \
                '<td class="' +classes[1] +'">' + ex[1] + '</td>\n\t\t\t' \
                '<td class="' +classes[2] +'">' + ex[2] + '</td>\n\t\t\t' \
                '<td class="' +classes[3] +'">' + ex[3] + '</td>\n\t\t\t' \
                '<td class="' +classes[4] +'">' + addKBD(ex[4]) + '</td>\n\t\t</tr>\n'
        except Exception as e:
            print(str(e))
            pass

    htmlstring+='\t</tbody>\n</table><br />\n'
    return htmlstring

f = open("mozhi-examples.csv", mode='r', encoding='utf-8')
fc = f.read()
examples = fc.split("\n\n")
    
o = open("mozhi-examples.htm", mode='a+', encoding='utf-8')
for example in examples:
    o.write(buildHTML(example))
o.close()