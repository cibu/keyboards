from bs4 import BeautifulSoup as bs

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
            classes.append('unknown')
    htmlstring+="\t</thead>\n\t<tbody>\n"
    for ex in example[1:]:
        try:
            ex = ex.split("|")
            htmlstring += "\t\t<tr>\n"
            for i in range(len(classes)):
                if(classes[i]=='keystroke' or classes[i]=='ex_keystroke'):
                    htmlstring+='\t\t\t<td class="' + classes[i] +'">' + addKBD(ex[i]) + '</td>\n\t\t'
                else:
                    htmlstring+='\t<td class="' +classes[i] +'">' + ex[i] + '</td>\n\t\t' 
            htmlstring+="\t</tr>\n\t\t"
        except Exception as e:
            print(str(e))
            pass
    htmlstring+='\t</tbody>\n'
    htmlstring+='\t<tfoot>\n\t<tr><td colspan="' + str(len(classes)) +'"><input type="text" placeholder="Try it now"></td></tr></tfoot>\n'
    htmlstring+='</table><br />\n'
    
    return bs(htmlstring, features="html.parser").prettify()

f = open("mozhi-examples.csv", mode='r', encoding='utf-8')
fc = f.read()
fc = fc.replace('| ', '|')
fc = fc.replace(' |', '|')
fc = fc.replace(' | ', '|')
fc = fc.replace(' \n', '\n')
examples = fc.split("\n\n")

htmlstring_intro='''<!DOCTYPE html>
<html>
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Mozhi Malayalam Keyboard Help</title>
      <meta content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" name="viewport">
      <link rel="shortcut icon" href="https://help.keyman.com/cdn/deploy/img/favicon.56e7a2d76793fb59cca3133b8bb1dd3d.ico">
      <link rel="stylesheet" type="text/css" href="./welcome1_files/template.b892e10a7489fc2fcb836382ced842c2.css">
      <link rel="stylesheet" type="text/css" href="./welcome1_files/keyboard.c855e229114c70aa572854de8d37265d.css">
      <link rel="stylesheet" type="text/css" href="./welcome1_files/keys.298336161ce24cc84fd19fc4ecb6f7ae.css">
      <link href="./welcome1_files/css" rel="stylesheet" type="text/css">
      <link href="./welcome1_files/css(1)" rel="stylesheet" type="text/css">
      <style type="text/css">
		/* Chilanka */
			@font-face {
				font-family: 'Chilanka';
				font-style: normal;
				font-weight: 400;
				src: url(https://smc.org.in/downloads/fonts/chilanka/Chilanka-Regular.woff2?v=1.2.0) format('woff2'), url(https://smc.org.in/downloads/fonts/chilanka/Chilanka-Regular.woff?v=1.2.0) format('woff'), url(https://smc.org.in/downloads/fonts/chilanka/Chilanka-Regular.ttf?v=1.2.0) format('truetype');
				unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+0D01-0D7F, U+200C-U+200D, U+25CC;
			}
		/* Rachana */
			@font-face {
				font-family: 'Rachana';
				font-style: normal;
				font-weight: 400;
				src: url(https://smc.org.in/downloads/fonts/rachana/Rachana-Regular.woff2?v=7.0) format('woff2'), url(https://smc.org.in/downloads/fonts/rachana/Rachana-Regular.woff?v=7.0) format('woff'), url(https://smc.org.in/downloads/fonts/rachana/Rachana-Regular.ttf?v=7.0) format('truetype');
				unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+0D01-0D7F, U+200C-U+200D, U+25CC;
			}
		/* Meera */
			@font-face {
				font-family: 'Meera';
				font-style: normal;
				font-weight: 400;
				src: url(https://smc.org.in/downloads/fonts/meera/Meera-Regular.woff2?v=7.0) format('woff2'), url(https://smc.org.in/downloads/fonts/meera/Meera-Regular.woff?v=7.0) format('woff'), url(https://smc.org.in/downloads/fonts/meera/Meera-Regular.ttf?v=7.0) format('truetype');
				unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+0D01-0D7F, U+200C-U+200D, U+25CC;
			}
			/* RaghuMalayalamSans */
			@font-face {
				font-family: 'RaghuMalayalam';
				font-style: normal;
				font-weight: 400;
				src: url(https://smc.org.in/downloads/fonts/raghumalayalamsans/RaghuMalayalamSans-Regular.woff2?v=2.1.1) format('woff2'), url(https://smc.org.in/downloads/fonts/raghumalayalamsans/RaghuMalayalamSans-Regular.woff?v=2.1.1) format('woff'), url(https://smc.org.in/downloads/fonts/raghumalayalamsans/RaghuMalayalamSans-Regular.ttf?v=2.1.1) format('truetype');
				unicode-range: U+0000-02DC, U+0D01-0D7F, U+200C-U+200D, U+25CC;
			}

		.lang2,.languageExample {
			font-family:AnjaliOldLipi;
		}
		 .lang2 {
			font-size:150%
		}
		 table td{
			 width: 180px;
			 text-align: center;
		}
		 table{
			 background: #e3e3e3;
		}
		 kbd{
			 background: #c0c0c0;
			 border: solid 1px grey;
			 padding: 2px 4px;
			 margin-left:4px;
			 box-shadow: 1px 2px;
             font-size: 100%;
             background-image: linear-gradient(to bottom, white, rgb(184, 179, 179));
             /* background-image: radial-gradient(circle, white, grey);*/
             
		}
		 .col10 {
			width: 10%;
		}
		 .col15 {
			width: 15%;
		}
		 .col20 {
			width: 20%;
		}
		 .col40 {
			 width: 40%;
		 }
        .keystroke {
            width: 20%;
             align: left;
        }
        .keystroke kbd {
			 background: #white;
			 border: solid 1px grey;
			 padding: 0px 0px;
			 margin-left:0px;
			 box-shadow: 1px 2px;
             font-size: 80%;
        }
        .ex_keystroke{
            width: 50%;
        }
        .example {
            font-family: "Rachana";
            width: 10%
        }
        .unicode {
            font-family: 'Courier New', Courier, monospace, serif;
            font-size: 80%;
            width: 15%;
        }
		.rachana{
			font-family:"Rachana",sans-serif;
            width: 10%;
            margin-bottom: 20px;
		}
		.meera{
			font-family:"Meera",sans-serif;
		}
		.chilanka{
			font-family:"Chilanka",sans-serif;
		}
		.raghu{
			font-family:"RaghuMalayalam",sans-serif;
		}
        .exampleTable {
            width: "100%";
            border: "2";
            background-color: #d7e5f0;
        }
        .exampleTable th {
            background: #2b3e3d;
            font-size: 100%;
            height: 1em;
            color: yellow;
        }
        .exampleTable tfoot {
            background: #7fa2a0;
            font-size: 100%;
            height: 1em;
            color: yellow;
        }
        .exampleTable tr:nth-child(even) {background: #f4f4f8;};
        .exampleTable tr:nth-child(odd) {background: #83d0c9;}
    </style>
    <script src='https://s.keyman.com/kmw/engine/10.0.103/keymanweb.js'></script>
    <script src='https://s.keyman.com/kmw/engine/10.0.103/kmwuitoggle.js'></script>
 <script>
  keyman.addKeyboards({
    id: 'mozhi',
    name: 'Malayalam Mozhi',
    language: {
      id: 'ml',
      name:'Malayalam',
      region:'Asia',
      font: {
        family: 'Rachana',
      }
    },
    filename: './mozhi_malayalam.js'
  });
</script>
    <script>
        (function(kmw) {
            kmw.init({attachType:'auto'});
        })(keyman);
    </script>
    </head>
   <body>
      <div class="main">
        <div id="section2">
            <div class="wrapper">
                <article>
                    <span id="toc-mozhi-malayalam-keyboard-help"></span>
                    <h2 class="red underline">Mozhi Malayalam Keyboard Help</h2>
                    <p style="margin:0px">Keyboard © 2017-2018 Junaid P. V.</p>
                    <div id="overview">
                        <span id="toc-overview"></span>
                        <h2>Keyboard Layout</h2>
                        <img src="mozhi_malayalam.jpg" width="100%" />
                    </div>
                    <h2>Malayalam alphabets and the corresponding keystrokes</h2>'''
htmlstring_end='''</article>
        </div>
      </div>
   </body>
</html>'''    
o = open("mozhi-examples.htm", mode='a+', encoding='utf-8')
o.write(htmlstring_intro)
for example in examples:
    o.write(buildHTML(example))
o.write(htmlstring_end)
o.close()