const STORAGE_KEY = "case3_students_v1";

const DEFAULT_STUDENTS = [
  { id: 1, student_number: "2026-002", full_name: "Robert Patterbonia", email: "robert010gmail.com", course: "BS Information Technology", year_level: 1 },
  { id: 2, student_number: "2026-003", full_name: "John Dalton", email: "daltondalton@gmail.com", course: "BS Information Technology", year_level: 3 },
  { id: 3, student_number: "2026-004", full_name: "Toni Fowler", email: "singlemim@gmail.com", course: "BS Computer Science", year_level: 2 }
];

function getRecords() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) { localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_STUDENTS)); return [...DEFAULT_STUDENTS]; }
  try { return JSON.parse(raw); } catch { return [...DEFAULT_STUDENTS]; }
}
function saveRecords(records) { localStorage.setItem(STORAGE_KEY, JSON.stringify(records)); }
function getRecordById(id) { return getRecords().find(r => Number(r.id) === Number(id)) || null; }
function addRecord(data) {
  const records = getRecords();
  const nextId = records.length ? Math.max(...records.map(r => Number(r.id))) + 1 : 1;
  records.push({ id: nextId, ...data });
  saveRecords(records);
}
function updateRecord(id, data) { saveRecords(getRecords().map(r => Number(r.id) === Number(id) ? { id: Number(id), ...data } : r)); }
function deleteRecord(id) { saveRecords(getRecords().filter(r => Number(r.id) !== Number(id))); }
function resetSampleData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_STUDENTS)); }
function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
