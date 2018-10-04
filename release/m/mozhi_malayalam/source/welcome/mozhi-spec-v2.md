##Basic mapping
Mozhi|Malayalam|Unicode Name| Example|Example in Mozhi
-- | -- | -- | -- | --
a|അ|A|അല|ala
aa|ആ|AA|ആല|aala
i|ഇ|I|ഇല|ila 
ii|ഈ|II|ഈറ|iirra
u|ഉ|U|ഉമ|uma
uu|ഊ|UU|ഊമ|uuma
R|ഋ|VOCALIC R|ഋതു|Rthu
RR|ൠ|VOCALIC RR|ൠന്ന്|RRnn

e|എ|E|എലി|eli
-- | -- | -- | -- | --
E|ഏ|EE|ഏലം|Elam
ai|ഐ|AI|ഐക്യം|aikyam
o|ഒ|O|ഒരു|oru
O|ഓ|OO|ഓരം|Oram
au|ഔ|AU|ഔഷധം|aushadham

m|ം|Anusvaram|അംബുജം|ambujam
-- | -- | -- | -- | --
H|ഃ|VISARGA|ദുഃഖം|duHkham

ka|ക|KA|കല|kala
-- | -- | -- | -- | --
kha|ഖ|KHA|നഖം|nakham
ga|ഗ|GA|ഗരം|garam
gha|ഘ|GHA|മേഘം|mEgham
nga|ങ|NGA|ങ്യാവൂ|ngyaavuu

cha|ച|CA|ചരം|charam
-- | -- | -- | -- | --
chha|ഛ|CHA|ഛായ|chhaaya
ja|ജ|JA|ജലം|jalam
jha|ഝ|JHA|ഝാൻസി|jhaansi
nja|ഞ|NYA|ഞാൻ|njaan

Ta|ട|TTA|ടിപ്പു|Tippu
-- | -- | -- | -- | --
Tha|ഠ|TTHA|പാഠം|paaTham
Da|ഡ|DDA|ഡപ്പി|Dappi
Dha|ഢ|DDHA|ദൃഢം|dRDham
Na|ണ|NNA|മണം|maNam

tha|ത|TA|തത്ത|thaththa
-- | -- | -- | -- | --
thha|ഥ|THA|കഥ|kathha
da|ദ|DA|ദയ|daya
dha|ധ|DHA|ധനം|dhanam
na|ന|NA|നന്ന്|nann~

pa|പ|PA|പല|pala
-- | -- | -- | -- | --
pha|ഫ|PHA|ഫലം|phalam
ba|ബ|BA|ബലം|balam
bha|ഭ|BHA|ഭയം|bhayam
ma|മ|MA|മയം|mayam

ya|യ|YA|യതി|yathi
-- | -- | -- | -- | --
ra|ര|RA|രണ്ട്|raNT
la|ല|LA|ലത|latha
va|വ|VA|വരം|varam

Sa|ശ|SHA|ശരം|Saram
-- | -- | -- | -- | --
sha|ഷ|SSA|ഷാരം|shaaram
sa|സ|SA|സാരം|saaram
ha|ഹ|HA|ഹാരം|haaram

La|ള|LLA|ഇള|iLa
-- | -- | -- | -- | --
zha|ഴ|LLLA|ഇഴ|izha
rra|റ|RRA|പറ|parra

ta|റ്റ|RRA, VIRAMA, RRA|പാറ്റ |paata
-- | -- | -- | -- | --

$|U+20B9|INDIAN RUPEE SIGN|₹100|$100
-- | -- | -- | -- | --

## Semi-vowel signs
### Described by examples:

Mozhi|Malayalam|Unicode Name| Example|Example in Mozhi
-- | -- | -- | -- | --
sya|സ്യ|SA, VIRAMA, YA|സസ്യം|sasyam
sra|സ്ര|SA, VIRAMA, RA|സ്രാവം|sraavam
sla|സ്ല|SA, VIRAMA, LA|സ്ലാവിക്|slaavik
sLa|സ്ള|SA, VIRAMA, LLA|ബ്ളോഗ്|bLOg
sva|സ്വ|SA, VIRAMA, VA|സ്വരം|svaram

## Separate two words without space
* Use '_' (underscore) to start a new word without a preceding space. Unicode output might use (not necessarily always) a ZWNJ(U+200C) to achieve this. This feature is useful for following:
  - Get chillu letter in contexts where it would otherwise form a conjunct with a following consonant.
  - Get a full vowel in-between a word
  - Get visible virama form instead of a conjunct or subscript.
  - If just '_' alone is typed, then that will appear to the user and will be consumed only when a valid letter is typed after it.

Example in Mozhi | Example| Unicode
-- | -- | -- 
pon_|പൊൻ_|PA, SIGN O, CHILLU N, _
pon_naaNyam|പൊൻനാണ്യം |PA, SIGN O, CHILLU N, NA, SIGN AA ... 
m~adani|മ്അദനി|MA, VIRAMA, A, DA, NA, SIGNI 
in_ka|ഇൻക | I, CHILLU N, KA

## Consonant Cluster

Consonant Cluster in a word is the sequence of English letters representing more than one consonant. As an example, the word in Mozhi, 'Sruthi' has the consonant cluster: 'Sr' - for consonants 'Sa' and 'ra'. This definition is used in sections below.

## Chillus

The letters N, n, m, r, l or L at the beginning of a word or after a vowel will form a chillu. Anusvara (ം) is considered a chillu.

svam | സ്വം | SA, VIRAMA, VA, ANUSVARA 
-- | -- | --
avan | അവൻ | A, VA, CHILLU N
Sr | ശ്ര് | SHA, VIRAMA, RA, VIRAMA
n|ൻ|CHILLU N
m|ം|ANUSVARA

# Chillu or conjunct
A chillu-capable letter in a consonant cluster will not form a chillu if that cluster starts with the following sequence (except for the ending 'a'):
NTa | ണ്ട |NNA, VIRAMA, TA | മണ്ട|maNTa
-- | -- | -- | -- | --
NTha|ണ്ഠ |NNA, VIRAMA, THA | കുണ്ഠിതം|kuNThitham 
NDa| ണ്ഡ |NNA, VIRAMA, DDA|പാണ്ഡു|paaNDu
NDha|ണ്ഢ |NNA, VIRAMA, DDHA|കണ്ഢം|kaNDham
NNa|ണ്ണ |NNA, VIRAMA, NNA | കണ്ണ്|kaNN
Nma | ണ്മ |NNA, VIRAMA, MA |വെണ്മ|veNma
Nya|ണ്യ |NNA, VIRAMA, YA |നാണ്യം|naaNyam
Nva | ണ്വ |NNA, VIRAMA, VA|കണ്വൻ|kaNvan

ntha| ന്ത |NA, VIRAMA, TA|തന്ത|thantha
-- | -- | -- | -- | --
nthha | ന്ഥ |NA, VIRAMA, THA|പാന്ഥൻ|paanthhan
nda|ന്ദ |NA, VIRAMA, DA|നന്ദി|nandi
ndha|ന്ധ |NA, VIRAMA, DHA|അന്ധൻ|andhan
nna|ന്ന |NA, VIRAMA, NA|പിന്നെ|pinne
nma|ന്മ |NA, VIRAMA, MA|നന്മ|nanma
nya|ന്യ |NA, VIRAMA, YA|അന്യം|anyam
nra|ന്ര |NA, VIRAMA, RA|ന്രസ്ഥി|nrasthhi
nva|ന്വ |NA, VIRAMA, VA|അന്വയം|anvayam

mpa|മ്പ |MA, VIRAMA, PA|കമ്പം|kampam
-- | -- | -- | -- | --
mma|മ്മ |MA, VIRAMA, MA|അമ്മ|amma
mya|മ്യ |MA, VIRAMA, YA|രമ്യം|ramyam
mra|മ്ര|MA, VIRAMA, RA|കമ്രം|kamram
mla|മ്ല |MA, VIRAMA, LA|അമ്ലം|amlam

rya|ര്യ|RA, VIRAMA, YA|ഭാര്യ|bhaarya
-- | -- | -- | -- | --
lpa|ല്പ |LA, VIRAMA, PA|അല്പം|alpam
lma|ല്മ |LA, VIRAMA, MA|കല്മഷം|kalmasham
lya|ല്യ|LA, VIRAMA, YA|അഹല്യ|ahalya
lva|ല്വ |LA, VIRAMA, VA|വില്വാദ്രി|vilvaadri
lla|ല്ല |LA, VIRAMA, LA|ഇല്ല|illa

Lya|ള്യ |LLA, VIRAMA, YA|ജാള്യം|jaaLyam
-- | -- | -- | -- | --
LLa|ള്ള |LLA, VIRAMA, LLA|ഉള്ള|uLLa

Following examples are for more than two consonants in a consonant cluster.

NDya|ണ്ഡ്യ|NNA, VIRAMA, DDA, VIRAMA, YA|പാണ്ഡ്യൻ|paaNDyan
-- | -- | -- | -- | --
nthrya|ന്ത്ര്യ|NA, VIRAMA, TA, VIRAMA, RA, VIRAMA, YA|സ്വാതന്ത്ര്യം|svaathanthryam

## Exceptions
If a consonant cluster starts as <chill-capable consonant A><consonant B><consonant B> then consonant A will form chillu. Example:

alppam | അൽപ്പം |A, CHILLU L, PA, VIRAMA, PA, ANUSVARA
-- | -- | -- | -- | --

The 'മ്യ' and 'മ്ര' conjuncts are not formed if they follow 'സം'. Example:

samyOgam|സംയോഗം|SA, ANUSVARA, YA, SIGN OO, ...
-- | -- | -- 
samrambham|സംരംഭം|SA, ANUSVARA, RA, ANUSVARA, ...
If 'മ്യ' and 'മ്ര' conjunct are required after 'സ', then please use '_' to make it the word initial consonant cluster. Examples:

sa_myak|സമ്യക്|SA, MA, VIRAMA, YA, ...
-- | -- | -- | -- | --
sa_mraaTT|സമ്രാട്ട്|SA, MA, VIRAMA, RA, SIGN AA, ...

While writing 'ൻ്റ' conjunct by 'nt..' sequence, 'n' will produce Chillu-N as follows:

nta|ൻ്റ|CHILLU-N, VIRAMA, RRA|എൻ്റെ|ente
-- | -- | -- | -- | --
nrra|ൻറ|CHILLU N, RRA|എൻറോൾ|enrrOL

## Chandrakkala instead of Chillu
To make sure we get chandrakkala instead of a chillu or after U-sign use '~' (tilda).

avan~|അവന്|..., NA, VIRAMA
| -- | -- | --
avanu~|അവനു്|..., NA, SIGN U, VIRAMA
vaalmeeki|വാല്മീകി  |..., LA, VIRAMA, MA, ...  
vaal_meeki|വാൽമീകി |..., CHILLU L, MA, ...  
vaal~meeki|വാല്മീകി |..., LA, VIRAMA, MA, ...  
vaal~_meeki|വാല്‌മീകി |..., LA, VIRAMA, ZWNJ, MA, ...  

Sometimes users type '~' even when it is not required at the word endings. Those '~'s are always consumed.

ath|അത്|A, TA, VIRAMA
-- | -- | -- | -- | --
ath~|അത് |A, TA, VIRAMA

Stand-alone combining marks
The Chandrakkala character '~' (tilde) can be used to get stand-alone signs.

~|്|VIRAMA
| -- | -- | --
~a|<empty> |
~aa|ാ|SIGN AA
~i|ി|SIGN I
~am|ം|ANUSVARA

## Doubling of ഞ
The sequence 'nj' produces 'ഞ്ഞ്', iff it is typed after any of the following:
* a vowel
* a vowel sign
* a consonant

At the same time, 'njnja' also produces 'ഞ്ഞ'.

To produce singular form in those cases, use underscore '_', by forcing it to be at word initial position. 

However, 'nga/ങ' does not show this behavior.

Examples:

ang|അങ്|A, NGA, VIRAMA
| -- | -- | --
angng|അങ്ങ്|A, NGA, VIRAMA, NGA, VIRAMA
njaan|ഞാൻ|NYA, SIGN AA, CHILLU N
manj|മഞ്ഞ്|MA, NYA, VIRAMA, NYA, VIRAMA
Saarngga|ശാർങ്ഗ |SHA, CHILLU RR, NGA, VIRAMA, GA
pa_nj|പഞ്|PA, NYA, VIRAMA
jnjaanam|ജ്ഞാനം|JA, NYA, SIGN AA, NA, ANUSVARA

## Shortcuts for conjuncts
nka|ങ്ക|NGA, VIRAMA, KA|മങ്ക|manka
-- | -- | -- | -- | --
ncha|ഞ്ച |GYA, VIRAMA, CA|പുഞ്ച|puncha
nchha|ഞ്ഛ| GYA, VIRAMA, CHA|വാഞ്ഛ|vaanchha
ccha|ച്ച|CA, VIRAMA, CA|പച്ച|paccha
cchha|ച്ഛ |CA, VIRAMA, CHA|പുച്ഛം|pucchham
tta|ട്ട|TTA, VIRAMA, TTA|പട്ട|patta
ttha|ത്ത |TA, VIRAMA, TA|തത്ത|thattha
tthha|ത്ഥ |TA, VIRAMA, THA|അർത്ഥം|artthham

## Error correction in conjuncts
Tta|ട്ട|TTA, VIRAMA, TTA|പട്ട|paTta
-- | -- | -- | -- | --
tTa|ട്ട|TTA, VIRAMA, TTA|പട്ട|patTa
nTa|ണ്ട|NNA, VIRAMA, TTA|പണ്ട്|panT
Nta|ണ്ട|NNA, VIRAMA, TTA|പണ്ട്|paNt

## Mapping for unmapped keys
ea|ഈ|II
| -- | -- | --
ee|ഈ|II
ie|ഈ|II
ei|ഐ|AI
oo|ഊ|UU
ou|ഔ|AU

c|ൿ|CHILLU K
| -- | -- | --
fa|ഫ |PHA
qa|ഖ |KHA
wa|വ |VA
xa|ക്സ |KA, VIRAMA, SA
za|ശ|SHA

A|ആ |AA
-- | -- | -- | -- | --
Ba|ബ്ബ |BA, VIRAMA, BA
Ca|ച്ച|CA, VIRAMA, CA
Fa|ഫ |PHA
Ga|ഗ്ഗ |GA, VIRAMA, GA
I|ഈ |II
Ja|ജ്ജ |JA, VIRAMA, JA

Ka|ക്ക |KA, VIRAMA, KA
-- | -- | -- | -- | --
Ma|മ്മ |MA, VIRAMA, MA
Pa|പ്പ |PA, VIRAMA, PA
Qa|ഖ |KHA
U|ഊ |UU
Va|വ്വ |VA, VIRAMA, VA
Wa|വ്വ |VA, VIRAMA, VA

Xa|ക്സ|KA, VIRAMA, SSA
Ya|യ്യ|YA, VIRAMA, YA
Za|ഴ|LLLA

## Extra elongation for vowel signs
('..' denotes that the last letter can be repeated to get last Malayalam vowel sign repeated)

aaa..|ആാാ..|AA, SIGN AA, SIGN AA
| -- | -- | --
kaaa..|കാാ..|KA, SIGN AA, SIGN AA
AA..|ആാ..|AA, SIGN AA, SIGN AA
kAA..|കാാ..|KA, SIGN AA, SIGN AA
iii..|ഈൗ..|II, AU LENGTH MARK
kiii..|കീീ..|KA, SIGN II, SIGN II
eee..|ഈൗ..|II, AU LENGTH MARK
keee..|കീീ..|KA, SIGN II, SIGN II
II..|ഈൗ..|II, AU LENGTH MARK
kII..|കീീ..|KA, SIGN II, SIGN II
EE..|ഏേ..|EE, SIGN EE
kEE..|കേേ.. |KA, SIGN EE, SIGN EE
uuu..|ഊൗ..|UU, AU LENGTH MARK
kuuu..|കൂൂ..|KA, SIGN UU, SIGN UU
UU.. |ഊൗ..|UU, AU LENGTH MARK
kUU..|കൂൂ..|KA, SIGN UU, SIGN UU
ooo..|ഊൗ..|UU, AU LENGTH MARK
kooo..|കൂൂ..|KA, SIGN UU, SIGN UU
OO..|ഓാ..|AU, SIGN AA
kOO..|കോോ..|KA, AU LENGTH MARK, AU LENGTH MARK
auu..|ഔൗ..|AU, AU LENGTH MARK

All vowel producing letters have above property.

## Archaic letters
To get the archaic form of a letter, please use the symbol '\' following it. Even more archaic form is given out by repeating it - '\\'.

അ\|a\|ഽ|AVAGRAHA|അസോഽസൗ|asOa\sau
| -- | -- | --| -- | -- | --
ഇ\|ii\ |ൟ|ARCHAIC II |ൟറ|ii\rra
ക്\|k\|ൿ|CHILLU K|ആമ്പിൿ|aampik\
റ്റ്\|t\|ഺ്|TTTA |
അഺ് |at\
റ്റ\ |ta\ |ഺ |TTTA|അഺ|ata\
ൻ\ |n\ |ഩ്|NNNA 
അഩ്|an\

n@erra|ൻെറ|CHILLU-N, SIGN E, RRA|എൻെറ|en@erra
| -- | -- | --| -- | -- | --
n@errarra|ൻെററ|CHILLU-N, SIGN E, RRA, RRA|എൻെററ|en@errarra

L@ka|ൾ്ക|CHILLU-LL, VIRAMA, KA||
| -- | -- | --| -- | -- | --
ന\ |na\ |ഩ|NNNA |അഩ|ana\
നു\ |nu\ |൹|DATE MARK
17-൹|17-nu\
ം\ |...m\ |U+0D00|ANUSVARA ABOVE||
ം\\ |... m\\ |U+0D01|CANDRABINDU||
ർ\ |r\ |U+0D4E
DOT REPH|ഭാൎയ്യ|bhaar\ya
₹\ |$\ |₨ |RUPEE SIGN|₨10|$\10
പറ\ |parra\ |U+0D4F|PARA SIGN||

ൾ\
L\|ഌ|VOCALIC L
ഌകാരം|L\kaaram
ക്‌ള്\|kL\|കൢ*|KA, SIGN VOCALIC L|കൢപ്തം|kL\ptham
ള്ള്\
LL\|ൡ|VOCALIC LL|ൡതം|LL\tham
ക്ള്ള്\|kLL\|കൣ*|KA, SIGN VOCALIC LL|കൣതം|kLL\tham
കൗ\|kau\|കൌ*
KA, SIGN AU
കൌതുകം|kau\thukam
|~\|U+0D3C|CIRCLE ABOVE VIRAMA||
|~\\|U+0D3B|VERTICAL BAR VIRAMA||
* The consonant 'k' is just an example to show the vowel sign.

1\
൧
ONE
10\
U+0D70|TEN
100\|U+0D71|HUNDRED
1000\|U+0D72|THOUSAND
1/4\|U+0D73|ONE QUARTER 
1/2\|U+0D74|ONE HALF
3/4\|U+0D75|THREE QUARTERS
...|...|<remaining fractions>
Since some digits does not get displayed in any popular fonts, corresponding Unicode codepoint is shown - for example: U+0D70.

Digits after a Malayalam digit will be a converted to Malayalam digit.

1\210|൧൨൧൦|ONE, TWO, ONE, ZERO
Escape by word
Transliteration is not attempted if it is preceded by '='.

=a|a
Keys after an English letter will be kept as it is. Along with English letters, it is continued for following special characters: . : / @. For the rest, escaping broken and transliteration will be attempted. Examples:

=abc@example.com enna |abc@example.com എന്ന
=http://www.9.com-l|http://www.9.com-ൽ
9l|9ൽ


Compatibility mapping

Previous versions of Mozhi had 'Ra' stands for റ. Since vowel (ഋ) and consonant(റ) come at two different contexts this can be honoured. Following examples demonstrate this:

pR
പൃ|PA, SIGN VOCALIC R
pRa
പ്ര|PA, VIRAMA, RA
R|ഋ|VOCALIC R
Ra|റ|RRA
aR|അർ 
A, CHILLU R
Legacy encoding
Chillu sequences mentioned in Unicode standard before version 5.1 are produced by adding '^' on the standard chillu-letter.

n^
ൻ^ |ന്‍|NA, VIRAMA, ZWJ
മോഹന്‍ലാല്‍|mohan^_laal^
l^|ൽ^|ല്‍|LA, VIRAMA, ZWJ|മോഹന്‍ലാല്‍|mohan^_laal^

There are multiple legacy encoding for ൻ്റ. The sequence specified in the standard is not fully supported in popular input tools or OSes. Also, the default sequence used by these input tools and Linux community is different from that used by Microsoft products.

nt^^a
nta^^
nte^^ 
...|ൻ്റ്^^a
ൻ്റ^^
ൻ്റെ^^|ന്‍റ|NA, VIRAMA, ZWJ, RRA|എന്‍റെ

ent^^e 
ente^^
nt^a
nta^
nte^
...|ൻ്റ്^a
ൻ്റ^
ൻ്റെ^|ന്റ|NA, VIRAMA, RRA|എന്റെ|ent^e
ente^
Backspace
On backspace, use the OS's backspace operation. However, next key would use the context of the existing input. Example:

nna
ന്ന|NA, VIRAMA, NA
nna<backspace>
ന്|NA, VIRAMA
nna<backspace>ka|ങ്ക|NGA, VIRAMA, KA

Convenience Mapping and Emoji
Following mappings does not have anything to do with Malayalam; however, these are useful essentials:

--
—
->
→
:)|😊
:(|☹
:D|😄
:x|😘
