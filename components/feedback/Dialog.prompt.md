One-line: modal for a decision or a short focused form.

```jsx
<Dialog title="Delete job?" description="This can't be undone."
  footer={<><Button kind="tertiary" onClick={close}>Cancel</Button><Button color="negative">Delete</Button></>} onClose={close} />
```
