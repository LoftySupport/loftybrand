One-line: a task big enough to need its own scroll — a full job form, a settings panel. Anything answerable in a sentence is a Dialog.

```jsx
<Modal open={open} onClose={close} title="New job" description="Crews can be assigned after the job is created."
  footer={<><Button kind="tertiary" onClick={close}>Cancel</Button><Button onClick={create}>Create job</Button></>}>
  <JobForm />
</Modal>
```

Escape and backdrop both close. `contained` when the modal must stay inside a mocked device or app frame.
