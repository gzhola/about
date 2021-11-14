import requests


url = 'https://www.sougou.com/web?query=周润发'

headers = {
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.44'
}

resp = requests.get(url=url, headers=headers)



print(resp)
print(resp.text)