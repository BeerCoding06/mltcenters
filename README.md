# MLTCENTERS Workshop

เว็บแอปและเวิร์กช็อปเรียนภาษาผ่านเทคโนโลยี (React + Vite)

## รันโปรเจกต์ในเครื่อง

ต้องมี Node.js (แนะนำ 18+) และ npm — [ติดตั้งด้วย nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
git clone <YOUR_GIT_URL>
cd mltcenters
npm install
npm run dev
```

## English Assessment (AI)

แบบทดสอบภาษาอังกฤษแบบโต้ตอบที่ **/assessment**: เสียงพูด, บทสนทนา AI, คะแนนแบบ NLP และหน้าสรุปผล

- **Frontend:** `src/pages/` และ `src/components/assessment/`
- **Backend:** Express ใน `server/` — จาก root ของโปรเจกต์:

  ```sh
  cd server && npm install && OPENAI_API_KEY=sk-your-key npm start
  ```

  API ใช้พอร์ต 3001; ในโหมด dev Vite จะ proxy `/api` ไปที่เซิร์ฟเวอร์นี้

- **เอกสาร:** [docs/ASSESSMENT_PROMPT.md](docs/ASSESSMENT_PROMPT.md)

## เทคโนโลยีหลัก

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Build และ preview

```sh
npm run build
npm run preview
```
