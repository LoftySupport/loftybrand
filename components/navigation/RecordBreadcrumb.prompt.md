One-line: where the record sits, and the house job-title format.

```jsx
<RecordBreadcrumb items={[{ label: "Jobs" }, { label: "1209" }, { label: "1209-002" }]} />
<JobTitle jobNumber="1209-002" location="EVANSTON PARK, 14/24 Wandoo Road" size="page" />
```

Rules
- Three levels: object › project › record. Never four.
- 12px, current crumb 600 in primary ink, ancestors in secondary ink, separator `›` in Flint 300.
- Job title format is fixed: `1209-002 - SUBURB, Res/StreetNo Street`. The first four digits are the project and link to it, marked only by a light Flint underline — not blue, not orange, not bold.
