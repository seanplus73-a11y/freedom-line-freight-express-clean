#!/bin/bash

# Cloudflare Pages Functions Verification Script
# Run this AFTER pushing to GitHub and deployment completes

echo "🔍 Cloudflare Pages Functions Verification"
echo "==========================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

DOMAIN="https://freightco.com"
CONTACT_API="${DOMAIN}/api/contact"
QUOTE_API="${DOMAIN}/api/quote"

echo "Testing: $CONTACT_API"
echo ""

# Test 1: GET request to /api/contact (should NOT be 404)
echo "📡 Test 1: GET /api/contact"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X GET "$CONTACT_API")

if [ "$RESPONSE" = "404" ]; then
    echo -e "${RED}❌ FAIL: Got 404 - Functions NOT deployed${NC}"
    echo "   → Cloudflare is routing to SPA instead of Function"
    echo "   → Check that _routes.json exists at root level"
    echo "   → Check Cloudflare Functions tab is not empty"
    exit 1
elif [ "$RESPONSE" = "405" ]; then
    echo -e "${GREEN}✅ PASS: Got 405 Method Not Allowed - Function is working!${NC}"
elif [ "$RESPONSE" = "400" ]; then
    echo -e "${GREEN}✅ PASS: Got 400 Bad Request - Function is working!${NC}"
else
    echo -e "${YELLOW}⚠️  Got $RESPONSE - Function may be working${NC}"
fi

echo ""

# Test 2: POST request to /api/contact with test data
echo "📡 Test 2: POST /api/contact (with test data)"
POST_RESPONSE=$(curl -s -X POST "$CONTACT_API" \
  -H "Content-Type: application/json" \
  -d '{"name":"API Test","email":"test@example.com","message":"Testing Cloudflare Functions deployment"}')

echo "Response: $POST_RESPONSE"

if echo "$POST_RESPONSE" | grep -q '"success":true'; then
    echo -e "${GREEN}✅ PASS: Successfully submitted to Airtable!${NC}"
    echo "   → Check your Airtable Contacts table for 'API Test' record"
elif echo "$POST_RESPONSE" | grep -q '"success":false'; then
    echo -e "${YELLOW}⚠️  Function executed but returned error${NC}"
    echo "   → Check environment variables in Cloudflare"
    echo "   → Verify AIRTABLE_TOKEN, AIRTABLE_BASE_ID, etc."
elif echo "$POST_RESPONSE" | grep -q "<!DOCTYPE" || echo "$POST_RESPONSE" | grep -q "<html"; then
    echo -e "${RED}❌ FAIL: Got HTML page (SPA 404) instead of JSON${NC}"
    echo "   → Functions are NOT deployed"
    echo "   → _routes.json is missing or not working"
    exit 1
else
    echo -e "${YELLOW}⚠️  Unexpected response${NC}"
fi

echo ""
echo "==========================================="
echo "Next steps:"
echo "1. Check Cloudflare Dashboard → Pages → Functions tab"
echo "2. Verify you see: /api/contact and /api/quote listed"
echo "3. Test the actual contact form at $DOMAIN/contact"
echo "4. Check Airtable for new records"
