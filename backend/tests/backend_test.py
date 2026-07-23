"""Backend API tests for The King's Mahal."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://mahal-royal-stay.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def s():
    sess = requests.Session()
    sess.headers.update({"Content-Type": "application/json"})
    return sess


# ---------------- Root ----------------
class TestRoot:
    def test_root_message(self, s):
        r = s.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "King" in data["message"]


# ---------------- Reviews ----------------
class TestReviews:
    def test_list_reviews_has_seeds(self, s):
        r = s.get(f"{API}/reviews")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 5
        # validate fields
        first = items[0]
        for f in ("id", "name", "rating", "review_text", "approved", "created_at"):
            assert f in first
        assert first["approved"] is True

    def test_review_stats(self, s):
        r = s.get(f"{API}/reviews/stats")
        assert r.status_code == 200
        data = r.json()
        assert {"average", "total", "breakdown"} <= set(data.keys())
        assert data["total"] >= 122 + 5
        assert 4.0 <= float(data["average"]) <= 5.0
        assert isinstance(data["breakdown"], dict)
        # breakdown keys 1..5
        for k in ("1", "2", "3", "4", "5"):
            assert k in data["breakdown"]

    def test_create_review_and_persistence(self, s):
        marker = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": marker,
            "rating": 5,
            "review_text": "Lovely stay during our visit. Test entry.",
            "service_type": "Room Stay",
            "contact": "test@example.com",
        }
        r = s.post(f"{API}/reviews", json=payload)
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["name"] == marker
        assert body["rating"] == 5
        assert body["approved"] is True
        assert "id" in body

        # verify it shows in list
        r2 = s.get(f"{API}/reviews", params={"limit": 200})
        assert r2.status_code == 200
        names = [x["name"] for x in r2.json()]
        assert marker in names

    def test_create_review_invalid_rating_low(self, s):
        r = s.post(f"{API}/reviews", json={
            "name": "TEST_low", "rating": 0, "review_text": "bad"
        })
        assert r.status_code == 422

    def test_create_review_invalid_rating_high(self, s):
        r = s.post(f"{API}/reviews", json={
            "name": "TEST_high", "rating": 6, "review_text": "bad"
        })
        assert r.status_code == 422


# ---------------- Enquiries ----------------
class TestEnquiries:
    def test_create_and_list_enquiry(self, s):
        marker = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": marker,
            "phone": "+918817265341",
            "email": "guest@test.com",
            "check_in": "2026-02-01",
            "check_out": "2026-02-03",
            "guests": 2,
            "enquiry_type": "stay",
            "message": "Need a deluxe room",
        }
        r = s.post(f"{API}/enquiries", json=payload)
        assert r.status_code == 200, r.text
        body = r.json()
        assert "id" in body
        assert body["name"] == marker
        assert body["phone"] == "+918817265341"

        r2 = s.get(f"{API}/enquiries")
        assert r2.status_code == 200
        names = [x["name"] for x in r2.json()]
        assert marker in names

    def test_create_enquiry_missing_required(self, s):
        r = s.post(f"{API}/enquiries", json={"name": "x"})
        assert r.status_code == 422


# ---------------- Newsletter ----------------
class TestNewsletter:
    def test_newsletter_subscribe_and_duplicate(self, s):
        email = f"TEST_{uuid.uuid4().hex[:8]}@example.com"
        r = s.post(f"{API}/newsletter", json={"email": email})
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["email"] == email
        assert "id" in body

        # second submit -> 409
        r2 = s.post(f"{API}/newsletter", json={"email": email})
        assert r2.status_code == 409

    def test_newsletter_invalid_email(self, s):
        r = s.post(f"{API}/newsletter", json={"email": "not-an-email"})
        assert r.status_code == 422
