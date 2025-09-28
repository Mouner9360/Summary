import requests
import json

# Test your API and show the full response
audio_file = "i-dont-care-where-i-go-movie-quote_78bpm_F_minor.wav"
url = "http://127.0.0.1:5000/api/transcribe"

print("🎵 Testing your audio file...")
print(f"📁 File: {audio_file}")
print(f"🌐 URL: {url}")
print("=" * 60)

try:
    with open(audio_file, 'rb') as f:
        files = {'file': (audio_file, f, 'audio/wav')}
        response = requests.post(url, files=files)
    
    print(f"📊 Status Code: {response.status_code}")
    print("=" * 60)
    
    if response.status_code == 200:
        # Parse the JSON response
        result = response.json()
        
        print("✅ SUCCESS! Here's what your API returned:")
        print("=" * 60)
        print("📝 TRANSCRIPT:")
        print(result.get('transcript', 'No transcript found'))
        print("\n" + "=" * 60)
        print("📄 SUMMARY:")
        print(result.get('summary', 'No summary found'))
        print("\n" + "=" * 60)
        print("✅ ACTION ITEMS:")
        print(result.get('action_items', 'No action items found'))
        print("\n" + "=" * 60)
        print("🎯 DECISIONS:")
        print(result.get('decisions', 'No decisions found'))
        print("\n" + "=" * 60)
        print("🔍 RAW JSON RESPONSE:")
        print(json.dumps(result, indent=2))
        
    else:
        print(f"❌ Error {response.status_code}:")
        print(response.text)
        
except Exception as e:
    print(f"❌ Error: {str(e)}")
