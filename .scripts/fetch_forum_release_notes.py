import re
import glob
import requests
import html2markdown

# Config
forum_announce_url = "https://forum.obsidian.md/c/announcements/13"
target_folder = "Release notes"

def fourm_post_content_md(url:str) -> str:
    post_page = requests.get(url).text
    post_content = re.findall("<div class='post'.*?>(.*?)</div>",release_note_page, re.S)[0]
    return html2markdown.convert(release_note_content)
    
# main
forum_announce_page = requests.get(forum_announce_url).text
forum_announce_list = re.findall("<a href='(.*?)'.*?>Obsidian Release (.*?)</a>",forum_announce_page)

existing_releases:list = [ x[len(target_folder)+1:-3] for x in glob.glob(target_folder+"/*.md")]

for each in forum_announce_list:
    version = each[1].replace(" (Insider build)","")
    if version in existing_releases: continue
    
    release_content = fourm_post_content_md(each[0])
    release_filename = ''.join([target_folder,'/',version,'.md'])
    print(release_filename)
    print(release_content)
    with open(release_filename,'w') as f:
        f.write(release_content)
