a = '''
a	₹	INDIAN RUPEE SIGN	100	₹100
ta	റ്റ	RRA, VIRAMA, RRA	പാറ്റ	paata
'''
example = a.split("\n")

def addKBD(wrd):
    newWrd = ""
    for letter in wrd:
        newWrd = newWrd + "<kbd>" + letter + "</kbd>"
    return(newWrd)

print('<table class="exampleTable">\n\t')
for ex in example:
    try:
        ex = ex.split("\t")
        print('\t<tr>\n\t\t<td class="col1">' + addKBD(ex[0]) +'</td>\n\t\t' \
              '<td class="col2">' + ex[1] + '</td>\n\t\t' \
              '<td class="col3">' + ex[2] + '</td>\n\t\t' \
              '<td class="col4">' + ex[3] + '</td>\n\t\t' \
              '<td class="col5">' + addKBD(ex[4]) + '</td>\n\t</tr>')
    except:
        pass

print('</table>')
