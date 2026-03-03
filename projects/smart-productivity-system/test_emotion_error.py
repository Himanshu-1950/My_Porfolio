import requests

# Test the emotion detection endpoint with authentication and error cases
BASE_URL = "http://127.0.0.1:8000"
REGISTER_URL = f"{BASE_URL}/api/register/"
LOGIN_URL = f"{BASE_URL}/api/login/"
EMOTION_URL = f"{BASE_URL}/api/emotion-detect/"

# Step 1: Register a test user
register_data = {
    "username": "testuser_error",
    "email": "test_error@example.com",
    "password": "testpass123"
}

print("Registering test user...")
register_response = requests.post(REGISTER_URL, json=register_data)
print(f"Registration Status: {register_response.status_code}")

# Step 2: Login to get JWT token
login_data = {
    "username": "testuser_error",
    "password": "testpass123"
}

print("Logging in...")
login_response = requests.post(LOGIN_URL, json=login_data)
print(f"Login Status: {login_response.status_code}")

if login_response.status_code == 200:
    login_data = login_response.json()
    access_token = login_data.get('access')

    if access_token:
        headers = {'Authorization': f'Bearer {access_token}'}

        print("Login successful, testing error cases...")

        # Test 1: No image provided (authenticated)
        response = requests.post(EMOTION_URL, files={}, headers=headers)

        print("Test 1 - No image provided (authenticated):")
        print("Status Code:", response.status_code)
        print("Response:", response.json() if response.headers.get('content-type') == 'application/json' else response.text)
        print()

        # Test 2: Invalid data provided (authenticated)
        response = requests.post(EMOTION_URL, data={'image': 'not an image'}, headers=headers)

        print("Test 2 - Invalid data provided (authenticated):")
        print("Status Code:", response.status_code)
        print("Response:", response.json() if response.headers.get('content-type') == 'application/json' else response.text)
    else:
        print("No access token received")
else:
    print("Login failed:", login_response.text)
