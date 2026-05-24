# API 설정

## Notion API
- API 키: ntn_w782772510322ieIAIYDFxXT7vulQ6nHLIt4bdp7EvidEU
- 키워드산업 DB ID: 
- 지역키워드 DB ID: 
- 초안 저장 DB ID: 3691d2919b2f800d91b6dde7d00b65c5

## 네이버 검색광고 API (STEP 1: 월간 검색량)
- 발급처: https://searchad.naver.com → 도구 → API 관리
- API Key: 
- Secret Key: 
- Customer ID: 
- 엔드포인트: `GET https://api.naver.com/keywordstool` (RelKwdStat)

## 네이버 검색/블로그 API (STEP 2: 블로그 발행량)
- 발급처: https://developers.naver.com → 애플리케이션 등록 → 검색 API 선택
- Client ID: 
- Client Secret: 
- 엔드포인트: `GET https://openapi.naver.com/v1/search/blog.json`

## 네이버 데이터랩 API (STEP 3: 트렌드)
- 발급처: https://developers.naver.com → 애플리케이션 등록 → 데이터랩 API 선택
- Client ID: (검색 API와 동일 앱 사용 가능)
- Client Secret: (검색 API와 동일 앱 사용 가능)
- 엔드포인트: `POST https://openapi.naver.com/v1/datalab/search`
