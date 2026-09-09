One-line: a Dropdown whose list is too long to scan — roughly 8 options and up, or any list the user knows the name of.

```jsx
<Combobox options={crew} value={assignee} onChange={setAssignee} placeholder="Search crew" />
<Combobox options={depots} addNewLabel="Add depot" onAddNew={createDepot} noResultsMessage="No depot by that name" />
```

Categories group without a Divider. It renders as its own panel — put it inside a MenuButton or Dialog rather than floating it yourself.
