from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
import sys
root=Path(__file__).parent
required=[
'index.html','services.html','pricing.html','request-service.html','contact.html',
'legal-notice.html','privacy.html','cookies.html','terms.html','assets/config.js','assets/styles.css','assets/site.js','assets/form.js'
]
errors=[]
for f in required:
    if not (root/f).exists(): errors.append(f'Missing required file: {f}')
config=(root/'assets/config.js').read_text(encoding='utf-8')
if 'REPLACE BEFORE DEPLOYMENT' in config: errors.append('Professional address placeholder still exists in assets/config.js')
class P(HTMLParser):
    def __init__(self): super().__init__(); self.links=[]
    def handle_starttag(self,tag,attrs):
        if tag=='a':
            href=dict(attrs).get('href')
            if href:self.links.append(href)
for f in root.glob('*.html'):
    p=P(); p.feed(f.read_text(encoding='utf-8'))
    for href in p.links:
        if href.startswith(('http://','https://','mailto:','tel:','#')): continue
        target=(f.parent/href.split('#')[0])
        if not target.exists(): errors.append(f'Broken internal link in {f.name}: {href}')
req=(root/'request-service.html').read_text(encoding='utf-8')
for cid in ['privacy-consent','cookies-consent','terms-consent']:
    if f'id="{cid}"' not in req or 'required' not in req.split(f'id="{cid}"',1)[1].split('>',1)[0]: errors.append(f'Missing required checkbox: {cid}')
terms=(root/'terms.html').read_text(encoding='utf-8')
for word in ['€30','15 días naturales','transferencia bancaria','Reclamación']:
    if word not in terms: errors.append(f'Terms missing expected item: {word}')
if errors:
    print('PRE-FLIGHT FAILED')
    for e in errors: print(' -',e)
    sys.exit(1)
print('PRE-FLIGHT PASSED: required files, internal links and core contracting fields are present.')
