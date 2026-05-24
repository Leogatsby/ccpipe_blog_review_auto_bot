import fs from 'fs';

const url = 'https://api.notion.com/v1/pages';
const token = 'ntn_w782772510322ieIAIYDFxXT7vulQ6nHLIt4bdp7EvidEU';
const dbId = '3691d2919b2f800d91b6dde7d00b65c5';

const contentPath = 'c:/Users/BAEK/Desktop/청청배관_블로그협찬 초안생성봇/.claude/최종결과물/2026-05-24_동작구_배관_변기막힘_협찬/에이전트프로세스보고/03.Writer/초안.md';
const content = fs.readFileSync(contentPath, 'utf8');

const posts = content.split('---').slice(1).map(part => {
    const titleMatch = part.match(/제목\s*:\s*(.+)/);
    if (!titleMatch) return null;
    const title = titleMatch[1].trim();
    const lines = part.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const blocks = lines.map(line => ({
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: line.substring(0, 2000) } }] }
    }));
    return { title, blocks: blocks.slice(0, 100) };
}).filter(Boolean);

async function upload() {
    for (const post of posts) {
        const data = {
            parent: { database_id: dbId },
            properties: {
                "제목": { title: [{ text: { content: post.title } }] }
            },
            children: post.blocks
        };
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            console.error("Error for " + post.title + ": ", await res.text());
        } else {
            console.log("Uploaded:", post.title);
        }
    }
}

upload();
